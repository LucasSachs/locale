'use server'

import type { Locale } from '@/lib/lang/dictionaries'
import { LangService } from '@/lib/services/lang'

export async function setLocale({ locale }: { locale: Locale }) {
  await LangService.setLocale(locale)
}
