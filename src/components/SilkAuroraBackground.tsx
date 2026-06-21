'use client'

import React, { useEffect, useRef, useMemo, useState } from 'react'
import { cn } from '@/lib/utils'
import { WebGLErrorBoundary, WebGLFallback } from './webgl-error-boundary'

const VERTEX_SHADER = `
attribute vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`

const FRAGMENT_SHADER = `
precision highp float;

uniform vec2 u_res;
uniform vec2 u_mouse;
uniform float u_time;
uniform float u_speed;
uniform float u_intensity;
uniform float u_grain;
uniform float u_vignette;
uniform float u_mouseInfluence;
uniform vec3 u_base;
uniform vec3 u_mid;
uniform vec3 u_sheen;
uniform vec3 u_accent;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(41.93, 289.17))) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

float fbm(vec2 p) {
  float value = 0.0;
  float amp = 0.5;
  mat2 rot = mat2(0.82, 0.57, -0.57, 0.82);
  for (int i = 0; i < 5; i++) {
    value += amp * noise(p);
    p = rot * p * 2.03;
    amp *= 0.5;
  }
  return value;
}

float ribbon(vec2 p, float offset, float width, float softness) {
  float y = p.y + sin(p.x * 1.8 + offset) * 0.18;
  y += sin(p.x * 4.2 - offset * 0.7) * 0.045;
  return smoothstep(width + softness, width, abs(y));
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_res;
  float aspect = u_res.x / max(u_res.y, 1.0);
  vec2 p = (uv - 0.5) * vec2(aspect, 1.0);

  vec2 mouse = (u_mouse - 0.5) * vec2(aspect, 1.0);
  float t = u_time * 0.12 * u_speed;
  float pointerFalloff = smoothstep(0.72, 0.0, length(p - mouse));
  p += (mouse - p) * pointerFalloff * 0.05 * u_mouseInfluence;

  vec2 silk = p;
  silk.x += fbm(p * 1.6 + vec2(t * 0.8, -t * 0.35)) * 0.16;
  silk.y += fbm(p * 2.2 + vec2(-t * 0.25, t * 0.7)) * 0.10;

  float veilA = ribbon(silk + vec2(-0.18, 0.08), t * 2.1, 0.055, 0.22);
  float veilB = ribbon(silk * vec2(0.86, 1.18) + vec2(0.2, -0.14), -t * 2.8 + 1.7, 0.038, 0.18);
  float veilC = ribbon(silk * vec2(1.18, 0.9) + vec2(-0.08, 0.24), t * 1.4 - 2.1, 0.03, 0.16);

  float atmosphere = fbm(p * 1.35 + vec2(t * 0.22, -t * 0.1));
  float pearlescent = pow(max(0.0, sin((p.x - p.y) * 7.5 + atmosphere * 4.0 - t * 2.5)), 5.0);
  float glint = pow(max(0.0, noise(gl_FragCoord.xy * 0.065 + t * 18.0) - 0.72), 5.0);

  vec3 col = u_base;
  col = mix(col, u_mid, smoothstep(-0.45, 0.75, p.y + atmosphere * 0.75));
  col += u_accent * veilA * 0.72 * u_intensity;
  col += u_sheen * veilB * 0.64 * u_intensity;
  col += mix(u_sheen, u_accent, 0.35) * veilC * 0.42 * u_intensity;
  col += u_sheen * pearlescent * 0.075 * u_intensity;
  col += vec3(1.0, 0.93, 0.82) * glint * 0.22 * u_intensity;
  col += u_sheen * pointerFalloff * 0.08 * u_mouseInfluence;

  float vignette = smoothstep(1.25, 0.22, length(p));
  col *= mix(1.0 - u_vignette * 0.42, 1.06, vignette);

  float grain = (hash(gl_FragCoord.xy + t * 90.0) - 0.5) * 0.08 * u_grain;
  col += grain;

  gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}
`

const HEX_RE = /^#?[0-9a-fA-F]{6}$/

function sanitize(hex: string, fallback: string): string {
  const t = hex.trim()
  if (!HEX_RE.test(t)) return fallback
  return t.startsWith('#') ? t : `#${t}`
}

function hexToRgb(hex: string, fallback: string): [number, number, number] {
  const h = sanitize(hex, fallback).replace('#', '')
  return [
    parseInt(h.slice(0, 2), 16) / 255,
    parseInt(h.slice(2, 4), 16) / 255,
    parseInt(h.slice(4, 6), 16) / 255,
  ]
}

export interface SilkAuroraBackgroundProps {
  baseColor?: string
  midColor?: string
  sheenColor?: string
  accentColor?: string
  speed?: number
  intensity?: number
  grain?: number
  vignette?: number
  mouseInfluence?: number
  interactive?: boolean
  className?: string
}

export function SilkAuroraBackground({
  baseColor = '#1A1A1A',
  midColor = '#2F3A32',
  sheenColor = '#E8DDC8',
  accentColor = '#C8A84B',
  speed = 0.65,
  intensity = 0.78,
  grain = 0.70,
  vignette = 0.85,
  mouseInfluence = 0.70,
  interactive = true,
  className,
}: SilkAuroraBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0.5, y: 0.5 })
  const targetMouseRef = useRef({ x: 0.5, y: 0.5 })
  const [hasError, setHasError] = useState(false)

  const settings = useMemo(
    () => ({ baseColor, midColor, sheenColor, accentColor, speed, intensity, grain, vignette, mouseInfluence, interactive }),
    [baseColor, midColor, sheenColor, accentColor, speed, intensity, grain, vignette, mouseInfluence, interactive],
  )

  useEffect(() => {
    if (hasError) return
    const container = containerRef.current
    const canvas = canvasRef.current
    if (!container || !canvas) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const onPointerMove = (e: PointerEvent) => {
      if (!settings.interactive) return
      const rect = container.getBoundingClientRect()
      targetMouseRef.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: 1 - (e.clientY - rect.top) / rect.height,
      }
    }
    const onPointerLeave = () => { targetMouseRef.current = { x: 0.5, y: 0.5 } }

    container.addEventListener('pointermove', onPointerMove)
    container.addEventListener('pointerleave', onPointerLeave)

    let gl: WebGLRenderingContext | null = null
    let rafId = 0

    try {
      gl = canvas.getContext('webgl', { antialias: false, alpha: false })
      if (!gl) { setHasError(true); return }

      const compile = (type: number, src: string) => {
        const s = gl!.createShader(type)!
        gl!.shaderSource(s, src)
        gl!.compileShader(s)
        if (!gl!.getShaderParameter(s, gl!.COMPILE_STATUS)) { gl!.deleteShader(s); return null }
        return s
      }

      const vs = compile(gl.VERTEX_SHADER, VERTEX_SHADER)
      const fs = compile(gl.FRAGMENT_SHADER, FRAGMENT_SHADER)
      if (!vs || !fs) { setHasError(true); return }

      const prog = gl.createProgram()!
      gl.attachShader(prog, vs)
      gl.attachShader(prog, fs)
      gl.linkProgram(prog)
      if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) { setHasError(true); return }
      gl.useProgram(prog)

      const posBuf = gl.createBuffer()
      gl.bindBuffer(gl.ARRAY_BUFFER, posBuf)
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW)
      const posAttr = gl.getAttribLocation(prog, 'position')
      gl.enableVertexAttribArray(posAttr)
      gl.vertexAttribPointer(posAttr, 2, gl.FLOAT, false, 0, 0)

      const uRes   = gl.getUniformLocation(prog, 'u_res')!
      const uMouse = gl.getUniformLocation(prog, 'u_mouse')!
      const uTime  = gl.getUniformLocation(prog, 'u_time')!
      const uSpd   = gl.getUniformLocation(prog, 'u_speed')!
      const uInt   = gl.getUniformLocation(prog, 'u_intensity')!
      const uGrn   = gl.getUniformLocation(prog, 'u_grain')!
      const uVig   = gl.getUniformLocation(prog, 'u_vignette')!
      const uMI    = gl.getUniformLocation(prog, 'u_mouseInfluence')!
      const uBase  = gl.getUniformLocation(prog, 'u_base')!
      const uMid   = gl.getUniformLocation(prog, 'u_mid')!
      const uSheen = gl.getUniformLocation(prog, 'u_sheen')!
      const uAcc   = gl.getUniformLocation(prog, 'u_accent')!

      const base  = hexToRgb(settings.baseColor,  '#1A1A1A')
      const mid   = hexToRgb(settings.midColor,   '#2F3A32')
      const sheen = hexToRgb(settings.sheenColor, '#E8DDC8')
      const acc   = hexToRgb(settings.accentColor,'#C8A84B')
      gl.uniform3f(uBase,  base[0],  base[1],  base[2])
      gl.uniform3f(uMid,   mid[0],   mid[1],   mid[2])
      gl.uniform3f(uSheen, sheen[0], sheen[1], sheen[2])
      gl.uniform3f(uAcc,   acc[0],   acc[1],   acc[2])

      const resize = () => {
        const dpr = Math.min(window.devicePixelRatio || 1, 2)
        const { width, height } = container.getBoundingClientRect()
        canvas.width  = Math.max(1, Math.floor(width  * dpr))
        canvas.height = Math.max(1, Math.floor(height * dpr))
        gl!.viewport(0, 0, canvas.width, canvas.height)
        gl!.uniform2f(uRes, canvas.width, canvas.height)
      }
      resize()
      const ro = new ResizeObserver(resize)
      ro.observe(container)

      const start = performance.now()
      const render = (now: number) => {
        mouseRef.current.x += (targetMouseRef.current.x - mouseRef.current.x) * 0.045
        mouseRef.current.y += (targetMouseRef.current.y - mouseRef.current.y) * 0.045

        const elapsed = reducedMotion ? 8 : (now - start) / 1000
        gl!.uniform2f(uMouse, mouseRef.current.x, mouseRef.current.y)
        gl!.uniform1f(uTime,  elapsed)
        gl!.uniform1f(uSpd,   reducedMotion ? 0 : settings.speed)
        gl!.uniform1f(uInt,   settings.intensity)
        gl!.uniform1f(uGrn,   settings.grain)
        gl!.uniform1f(uVig,   settings.vignette)
        gl!.uniform1f(uMI,    settings.interactive && !reducedMotion ? settings.mouseInfluence : 0)
        gl!.drawArrays(gl!.TRIANGLE_STRIP, 0, 4)
        rafId = requestAnimationFrame(render)
      }
      rafId = requestAnimationFrame(render)

      return () => {
        container.removeEventListener('pointermove', onPointerMove)
        container.removeEventListener('pointerleave', onPointerLeave)
        cancelAnimationFrame(rafId)
        ro.disconnect()
      }
    } catch {
      setHasError(true)
      return () => {
        container.removeEventListener('pointermove', onPointerMove)
        container.removeEventListener('pointerleave', onPointerLeave)
      }
    }
  }, [hasError, settings])

  const fallback = (
    <div
      className={cn('absolute inset-0', className)}
      style={{ background: 'radial-gradient(ellipse 90% 65% at 50% 38%, #2F3A32 0%, #1A1A1A 70%)' }}
    />
  )

  if (hasError) return fallback

  return (
    <WebGLErrorBoundary fallback={fallback}>
      <div ref={containerRef} className={cn('absolute inset-0 overflow-hidden', className)}>
        <canvas
          ref={canvasRef}
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{ width: '100%', height: '100%', display: 'block' }}
        />
        {/* Gouden gloed — upper center */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 60% 40% at 50% 28%, rgba(200,168,75,0.07) 0%, transparent 65%)',
          }}
        />
        {/* Zij-edge vignette */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(0,0,0,0.38) 0%, rgba(0,0,0,0.06) 40%, rgba(0,0,0,0.38) 100%)',
          }}
        />
        {/* Bodem darkening */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0"
          style={{
            height: '40%',
            background: 'linear-gradient(to top, rgba(26,26,26,0.72) 0%, transparent 100%)',
          }}
        />
      </div>
    </WebGLErrorBoundary>
  )
}

export default SilkAuroraBackground
