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
} from 'lucide-react'
import { Logo } from './Logo'
import { NavItem } from './NavItem'
import { UserSpaceWidget } from './UserSpaceWidget'
import { Profile } from './Profile'
import { Input } from '../Input'

export function SideBar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8  dark:border-zinc-700">
      <Logo />
      <Input />
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

        <div className="h-px bg-zinc-200 dark:bg-zinc-200/30" />
        <Profile />
      </div>
    </aside>
  )
}
