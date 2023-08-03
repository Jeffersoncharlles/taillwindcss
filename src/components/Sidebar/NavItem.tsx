import { ChevronDown } from 'lucide-react'
import { ElementType } from 'react'

interface Props {
  title: string
  expansive?: boolean
  icon: ElementType
}

export function NavItem({ title, expansive = true, icon: Icon }: Props) {
  return (
    <a
      href=""
      className="group flex items-center gap-3 rounded px-3 py-2 transition-colors hover:bg-violet-50 dark:hover:bg-violet-300/10"
    >
      <Icon className="h-5 w-5 text-zinc-500" />
      <span className="font-medium text-zinc-700 group-hover:text-violet-500 dark:text-zinc-300 dark:group-hover:text-violet-300">
        {title}
      </span>
      {expansive && (
        <ChevronDown className="ml-auto h-5 w-5 text-zinc-400  group-hover:text-violet-300" />
      )}
    </a>
  )
}
