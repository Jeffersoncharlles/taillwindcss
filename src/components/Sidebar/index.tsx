'use client'

import {
  Cog,
  LifeBuoy,
  Search,
  BarChart,
  CheckSquare,
  Flag,
  Home,
  SquareStack,
  Users,
  Menu,
} from 'lucide-react'
import { Logo } from './Logo'
import { NavItem } from './NavItem'
import { UserSpaceWidget } from './UserSpaceWidget'
import { Profile } from './Profile'
import { Input } from '../Form/Input'
import * as Collapsible from '@radix-ui/react-collapsible'
import { Button } from '../Button'
import { useTheme } from 'next-themes'

export function SideBar() {
  const { theme, setTheme } = useTheme()
  return (
    <Collapsible.Root className="fixed left-0 right-0 top-0 z-20 flex flex-col gap-6  border-zinc-200 bg-white p-4 data-[state=open]:bottom-0 dark:bg-zinc-900 lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8 lg:data-[state=closed]:bottom-0">
      <div className="flex items-center justify-between">
        <Logo />
        <Collapsible.Trigger asChild className="lg:hidden">
          <Button variant="ghost">
            <Menu className="h-6 w-6" />
          </Button>
        </Collapsible.Trigger>
      </div>
      <Collapsible.Content
        forceMount
        className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
      >
        <Input.Root>
          <Input.Prefix>
            <Search className="h-5 w-5 text-zinc-500 " />
          </Input.Prefix>
          <Input.Control placeholder="Search" />
        </Input.Root>
        <nav className="space-y-0.5">
          <NavItem title="Home" icon={Home} />
          <NavItem title="Dashboard" icon={BarChart} />
          <NavItem title="Projects" icon={SquareStack} />
          <NavItem title="Tasks" icon={CheckSquare} />
          <NavItem title="Reporting" icon={Flag} />
          <NavItem title="Users" icon={Users} />
        </nav>
        <div className="mt-auto flex flex-col gap-6">
          <nav className="space-y-0.5">
            <NavItem title="Support" icon={LifeBuoy} expansive={false} />
            <NavItem title="Settings" icon={Cog} expansive={false} />
          </nav>

          <UserSpaceWidget />
          <Button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          >
            theme
          </Button>

          <div className="h-px bg-zinc-200 dark:bg-zinc-200/30" />
          <Profile />
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
