export type Page = {
  meta: Meta
  widgets: Widget[]
}

export type Meta = {
  title: string
  description: string
}

export interface Widget {
  auditCD: string
  auditCU: string | null
  auditMD: string
  auditMU: string | null
  auditLD: string
  fields: Fields
  order: number
  widgetUuid: string
  widgetType: string
}

export interface Visibility {
  visibleOnSport: boolean
  visibleForGuest: boolean
  visibleOnCasino: boolean
  visibleOnMobile: boolean
  visibleOnNative: boolean
  visibleForLogged: boolean
  visibleOnDesktop: boolean
}

export type BooleanValue = {
  type: string
  value: boolean
}

export interface Fields {
  visibility: Visibility
}

export interface HeaderFields extends Fields {
  cta: CtaFields
  logo?: Logo
  languageSwitcher?: LanguageSwitcherOptions
}

export interface CtaFields {
  ctaLink: string
  ctaText: string
}

export interface TextFields extends Fields {
  text?: Text
}

export interface Text {
  type: string
  value: string
}

export interface Repeater<T> {
  type: string
  value: T[]
}

export interface LogoValue {
  id: string
  alt: string
  logo: string
  order: number
}

export interface LanguageSwitcherOptions {
  type: string
  value: Map<string, LanguageValue>
}

export interface LanguageValue {
  country: string
  language: string
  countryFlag: string
}

export interface LanguageSwitcherValue {
  values: Map<string, string>
}

export interface FooterFields extends Fields {
  email?: string
  partners: LogoValue[]
  languages: LanguageValue[]
  regulation: string
  responsibleGambling: LogoValue[]
}
