export interface PosterDesign {
  id: string
  lines: string[]
  reference: string
  theme: string
  background: string
  textColor: string
  accentColor: string
  frameColor: string
}

export interface Theme {
  id: string
  number: string
  title: string
  description: string
  poster: PosterDesign
  href: string
}

export interface Product {
  id: string
  title: string
  verse: string
  reference: string
  theme: string
  themeId: string
  priceFrom: number
  priceWithFrame: number
  poster: PosterDesign
  slug: string
  featured?: boolean
  isNew?: boolean
}

export interface FAQItem {
  id: string
  question: string
  answer: string
}

export interface CustomizerTextOption {
  lines: string[]
  reference: string
  label: string
}

export interface CustomizerColorOption {
  name: string
  value: string
  textColor: string
  frameColor: string
}
