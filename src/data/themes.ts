import type { Theme } from '@/types'
import { posterVariants } from './posterVariants'

export const themes: Theme[] = [
  {
    id: 'identiteit',
    number: '01',
    title: 'Identiteit in Christus',
    description: 'Ontdek wie je bent in Gods ogen. Posters die je dagelijks herinneren aan je waarde en roeping.',
    poster: posterVariants[0],
    href: '/collectie',
  },
  {
    id: 'rust',
    number: '02',
    title: 'Rust & Vrede',
    description: 'Vind rust in Zijn aanwezigheid. Designs die stilte en zekerheid uitstralen in elke ruimte.',
    poster: posterVariants[1],
    href: '/collectie',
  },
  {
    id: 'kracht',
    number: '03',
    title: 'Kracht & Moed',
    description: 'Sta sterk in geloof, elke dag opnieuw. Krachtige Bijbelteksten die je herinneren aan Gods kracht in jou.',
    poster: posterVariants[2],
    href: '/collectie',
  },
  {
    id: 'doel',
    number: '04',
    title: 'Doel & Richting',
    description: 'Leef met focus en volg Zijn plan. Designs die richting geven aan wie je bent en wie je wordt.',
    poster: posterVariants[3],
    href: '/collectie',
  },
]
