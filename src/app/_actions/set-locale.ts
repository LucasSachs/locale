'use server'

import type { Locale } from '@/lib/lang/dictionaries'
import { cookies } from 'next/headers'

export async function setLocale({ locale }: { locale: Locale }) {
  const cookieStorage = await cookies()

  cookieStorage.set('lang', locale, {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    sameSite: 'strict',
  })
}
