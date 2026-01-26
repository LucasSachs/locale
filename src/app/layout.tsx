import './globals.css'

import type { Metadata } from 'next'

import { font } from '@/lib/fonts'
import { LangService } from '@/lib/services/lang'
import { cn } from '@/lib/utils'
import Footer from './(content)/_components/footer'
import { Navbar } from './(content)/_components/navbar'

export const metadata: Metadata = {
  title: 'Locale',
  description: 'This project was made by Lucas Sachs. His purpose is to test how Locales are implemented in websites.',
}

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const lang = await LangService.getLang()
  const dict = await LangService.getDictionary(lang)

  return (
    <html lang={lang}>
      <body className={cn('light h-screen grid grid-rows-[auto_1fr_auto]', font.className)}>
        <Navbar projectName={dict.projectName} />

        {children}

        <Footer />
      </body>
    </html>
  )
}
