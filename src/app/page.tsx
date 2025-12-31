import { getDictionary, type Locale } from '@/lib/lang/dictionaries'
import { cookies } from 'next/headers'
import ChangeLocaleButton from './_components/buttons/change-locale'

export default async function Page() {
  const cookieStorage = await cookies()
  const lang = (cookieStorage.get('lang')?.value ?? 'en') as Locale // Here we are gonna need to get the browser locale, if we do have a translation to that, use it, else define a default locale, wich is en

  const dict = await getDictionary(lang)

  return (
    <main className="flex flex-col gap-2">
      <span>{dict.teste.text1}</span>
      <ChangeLocaleButton currentLang={lang} />
    </main>
  )
}
