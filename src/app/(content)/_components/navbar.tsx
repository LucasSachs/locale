'use client'

import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '@/components/ui/navigation-menu'

// ! > Should only get the projectName here and not the complete dictionary because of the client side bundle size
export function Navbar({ projectName }: { projectName: string }) {
  return (
    <NavigationMenu className="min-w-full md:pt-5 lg:pt-10">
      <NavigationMenuList>
        <NavigationMenuItem>
          <h1 className="py-2 font-medium text-md md:text-xl">
            {projectName}
          </h1>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
