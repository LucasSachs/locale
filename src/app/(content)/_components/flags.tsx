'use client'

import brFlag from '@/assets/svg/flags/br.svg'
import usFlag from '@/assets/svg/flags/us.svg'
import type { Locale } from '@/lib/lang/dictionaries'
import type { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import { setLocale } from '../_actions/set-locale'

const flags: {
  src: StaticImport
  countryName: string
  lang: Locale
}[] = [{
  src: brFlag,
  countryName: 'Brazil',
  lang: 'pt',
}, {
  src: usFlag,
  countryName: 'United States',
  lang: 'en',
}]

export default function Flags() {
  return (
    <div className="group flex gap-2 justify-center">
      {flags.map((flag, index) => (
        <Image
          key={index}
          src={flag.src}
          alt={`${flag.countryName} flag`}
          className="size-10 hover:cursor-pointer"
          onClick={() => setLocale({ locale: flag.lang })}
        />
      ))}
    </div>
  )
}
