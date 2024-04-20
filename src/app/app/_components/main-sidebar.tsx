'use client' //

import { usePathname } from 'next/navigation'
import { Session } from 'next-auth'
import { HomeIcon, MixerVerticalIcon } from '@radix-ui/react-icons'

import { UserDropdown } from './user-dropdown'
import { Logo } from '@/components/logo'

import {
  DasboardSidebar,
  DasboardSidebarFooter,
  DasboardSidebarHeader,
  DasboardSidebarMain,
  DasboardSidebarNav,
  DasboardSidebarNavHeader,
  DasboardSidebarNavHeaderTitle,
  DasboardSidebarNavLink,
  DasboardSidebarNavMain,
} from '@/components/dashboard/sidebar'

type MainSidebarProps = {
  user: Session['user']
}

export const MainSidebar = ({ user }: MainSidebarProps) => {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return path === pathname
  }

  if (!user) return

  return (
    <DasboardSidebar>
      <DasboardSidebarHeader>
        <Logo />
      </DasboardSidebarHeader>
      <DasboardSidebarMain className="flex flex-col flex-grow">
        <DasboardSidebarNav>
          <DasboardSidebarNavMain>
            <DasboardSidebarNavLink href="/app" active={isActive('/app')}>
              <HomeIcon className="w-3 h-3 mr-3" />
              Tarefas
            </DasboardSidebarNavLink>
            <DasboardSidebarNavLink
              href="/app/settings"
              active={isActive('/app/settings')}
            >
              <MixerVerticalIcon className="w-3 h-3 mr-3" />
              Configurações
            </DasboardSidebarNavLink>
          </DasboardSidebarNavMain>
        </DasboardSidebarNav>

        <DasboardSidebarNav className="mt-auto">
          <DasboardSidebarNavHeader>
            <DasboardSidebarNavHeaderTitle>
              Links Extras
            </DasboardSidebarNavHeaderTitle>
          </DasboardSidebarNavHeader>
          <DasboardSidebarNavMain>
            <DasboardSidebarNavLink href="/">
              Precisa de ajuda?
            </DasboardSidebarNavLink>
            <DasboardSidebarNavLink href="/">Site</DasboardSidebarNavLink>
          </DasboardSidebarNavMain>
        </DasboardSidebarNav>
      </DasboardSidebarMain>
      <DasboardSidebarFooter>
        <UserDropdown user={user} />
      </DasboardSidebarFooter>
    </DasboardSidebar>
  )
}
