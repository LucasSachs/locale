'use client'

import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '@/components/ui/navigation-menu'

// ! > Should only get the projectName here and not the complete dictionary because of the client side bundle size
export function Navbar({ projectName }: { projectName: string }) {
  return (
    <NavigationMenu className="border-b min-w-full">
      <NavigationMenuList>
        <NavigationMenuItem>
          <p className="py-2 font-medium">
            {projectName}
          </p>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
