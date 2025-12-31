'use client'

import { setLocale } from '@/app/_actions/set-locale'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import type { Locale } from '@/lib/lang/dictionaries'

export default function ChangeLocaleButton({ currentLang }: { currentLang: Locale }) {
  return (
    <Select
      onValueChange={locale => setLocale({ locale: locale as Locale })}
      defaultValue={currentLang}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Language" />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="en">English</SelectItem>
        <SelectItem value="pt">Portuguese</SelectItem>
      </SelectContent>
    </Select>
  )
}
