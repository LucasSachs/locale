import type { LucideIcon } from 'lucide-react'
import type { PropsWithChildren } from 'react'
import { Button, type ButtonProps } from '../button'

interface ButtonWithIconProps extends PropsWithChildren<ButtonProps> {
  icon: LucideIcon
}

export default function ButtonWithIcon({
  icon: Icon,
  children,
  ...props
}: ButtonWithIconProps) {
  return (
    <Button {...props}>
      <Icon size={20} />
      {children}
    </Button>
  )
}
