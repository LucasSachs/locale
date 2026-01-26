import githubSvg from '@/assets/svg/github.svg'
import { LangService } from '@/lib/services/lang'
import Image from 'next/image'
import Link from 'next/link'
import Stacks from './_components/stacks'
import TextSession from './_components/text-session'

export default async function Page() {
  const lang = await LangService.getLang()
  const dict = await LangService.getDictionary(lang)

  return (
    <main className="flex flex-col gap-6">
      <TextSession>
        <h1 className="text-lg font-medium">
          {dict.main.header1}
        </h1>

        {dict.main['paragraph1.1']}
      </TextSession>

      <TextSession>
        <h1 className="text-lg font-medium">
          {dict.main.header2}
        </h1>

        <Stacks />
      </TextSession>

      <TextSession>
        <h1 className="text-lg font-medium">
          {dict.main.header3}
        </h1>

        {dict.main['paragraph3.1']}

        <br />

        {dict.main['paragraph3.2']}

        <br />

        {dict.main['paragraph3.3']}
      </TextSession>

      <TextSession>
        <h1 className="text-lg font-medium">
          {dict.main.header4}
        </h1>

        {dict.main['paragraph4.1']}
      </TextSession>

      <TextSession>
        <h1 className="text-lg font-medium">
          {dict.main.header5}
        </h1>

        {dict.main['paragraph5.1']}

        <Link
          href="https://github.com/LucasSachs/locale"
          target="_blank"
          className="flex w-fit gap-2 mt-1"
        >
          <Image
            src={githubSvg}
            alt="Github logo"
            className="size-6"
          />

          Github
        </Link>
      </TextSession>
    </main>
  )
}
