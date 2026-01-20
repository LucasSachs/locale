import 'server-only'

const dictionaries = {
  en: () => import('./dictionaries/pt.json').then(module => module.default),
  pt: () => import('./dictionaries/pt.json').then(module => module.default),
}

export type Locale = keyof typeof dictionaries

export const hasLocale = (locale: string): locale is Locale => locale in dictionaries

export async function getDictionary(locale: Locale) {
  return dictionaries[locale]()
}
