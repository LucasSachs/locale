import nextjsSvg from '@/assets/svg/nextjs.svg'
import reactSvg from '@/assets/svg/react.svg'
import shadcnSvg from '@/assets/svg/shadcn-ui.svg'
import typescriptSvg from '@/assets/svg/typescript.svg'

import type { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'

const stacks: {
  src: StaticImport
  name: string
}[] = [{
  src: nextjsSvg,
  name: 'Next.js 16',
}, {
  src: typescriptSvg,
  name: 'Typescript',
}, {
  src: reactSvg,
  name: 'React',
}, {
  src: shadcnSvg,
  name: 'Shadcn UI',
}]

export default function Stacks() {
  return (
    <div className="flex gap-8 items-center mt-2">
      {stacks.map((stack, index) => (
        <div
          key={index}
          className="flex flex-col items-center gap-1"
        >
          <Image
            src={stack.src}
            alt={`${stack.name} svg`}
            className="size-10"
          />

          {stack.name}
        </div>
      ))}
    </div>
  )
}
