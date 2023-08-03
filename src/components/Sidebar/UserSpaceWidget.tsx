export function UserSpaceWidget() {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-violet-50 px-4 py-5 dark:bg-violet-300/10 ">
      <div className="space-y-1">
        <span className="text-base/5 font-semibold text-violet-700 dark:text-violet-300">
          Used space
        </span>
        <p className="text-sm/5 text-violet-500 dark:text-violet-200">
          Your team has used 80% of your available space. Need more?
        </p>
      </div>

      <div className="h-2 rounded-full bg-violet-100">
        <div className="h-2 w-4/5 rounded-full bg-violet-600" />
      </div>

      <div className="space-x-3">
        <button
          type="button"
          className="text-sm font-medium text-violet-500 hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300"
        >
          Dismiss
        </button>
        <button
          type="button"
          className="text-sm font-semibold text-violet-700 hover:text-violet-950 dark:text-violet-200 dark:hover:text-violet-100"
        >
          Upgrade plan
        </button>
      </div>
    </div>
  )
}