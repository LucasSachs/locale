import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { getDictionary, hasLocale, type Locale } from '../lang/dictionaries'

export const LANG_COOKIE_NAME = 'lang'
export const LANG_DEFAULT = 'en'

export class LangService {
  static async getLang() {
    const cookieStorage = await cookies()

    // By default, en is the main locale
    const lang = (cookieStorage.get(LANG_COOKIE_NAME)?.value || LANG_DEFAULT) as Locale
    if (!hasLocale(lang)) redirect('api/locale/change/en')

    return lang
  }

  static async setLocale(locale: Locale) {
    const cookieStorage = await cookies()

    // If is invalid locale, sets to the default locale (en)
    if (!hasLocale(locale)) locale = 'en'

    cookieStorage.set(LANG_COOKIE_NAME, locale, {
      secure: process.env.NODE_ENV === 'production',
      httpOnly: true,
      sameSite: 'strict',
    })
  }

  static async getDictionary(locale: Locale) {
    const dict = getDictionary(locale)

    return dict
  }
}
