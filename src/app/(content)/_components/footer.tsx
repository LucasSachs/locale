import linkedinSvg from '@/assets/svg/linkedin.svg'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="flex justify-center w-full border-t py-1 items-center gap-6">
      <p>
        {'Developed By: '}
        <span className="font-semibold">Lucas Sachs</span>
      </p>

      <Button
        variant="link"
        className="gap-0.5"
        asChild
      >
        <Link
          href="https://www.linkedin.com/in/lucas-sachs-215b87261/"
          target="_blank"
        >
          <Image
            src={linkedinSvg}
            alt="Linkedin logo"
            className="size-6"
          />

          Linkedin
        </Link>
      </Button>
    </footer>
  )
}
