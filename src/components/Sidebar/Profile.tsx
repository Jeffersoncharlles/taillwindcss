import { LogOut } from 'lucide-react'

export function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <img
        src="https://github.com/jeffersoncharlles.png"
        alt="jefferson"
        className="h-10 w-10 rounded-full"
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-300">
          Jefferson Charlles
        </span>
        <span className="truncate text-sm text-zinc-500">
          contato@jefferdeveloper.com
        </span>
      </div>
      <button
        type="button"
        className="ml-auto rounded-md p-2 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-800"
      >
        <LogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  )
}
