import { CheckCircle2, Trash2, UploadCloud } from 'lucide-react'
import { formatBytes } from './Utils/format-byts'
import { Button } from '@/components/Button'
import { tv, VariantProps } from 'tailwind-variants'

const fileItem = tv({
  slots: {
    container:
      'group flex items-start gap-4 rounded-lg border border-zinc-200 p-4 dark:border-zinc-700',
    icon: 'rounded-full border-4 border-violet-100 bg-violet-200 p-2 text-violet-600 dark:border-violet-600 dark:bg-violet-800 dark:text-violet-300',
    deleteButton: '',
  },

  variants: {
    state: {
      progress: {
        container: '',
      },
      complete: {
        container: 'border-violet-500',
      },
      error: {
        container:
          'bg-error-25 border-error-300 dark:border-error-500 dark:bg-error-800/10',
        icon: 'border-error-50 bg-error-100 text-error-400 dark:border-error-800/10 dark:bg-error-300 dark:text-error-700',
        deleteButton: 'text-error-700 dark:text-error-400/80',
      },
    },
  },

  defaultVariants: {
    state: 'progress',
  },
})

export interface FileItemProps extends VariantProps<typeof fileItem> {
  name: string
  size: number
}

export function FileItem({ name, size, state }: FileItemProps) {
  const { container, icon, deleteButton } = fileItem({ state })

  return (
    <div className={container()}>
      <div className={icon()}>
        <UploadCloud className="h-4 w-4" />
      </div>

      {state === 'error' ? (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col">
            <span className="text-md font-medium text-error-600 ">
              Upload failed, please try again
            </span>
            <span className="text-sm text-error-400">{name}</span>
          </div>

          <button
            type="button"
            className="text-sm font-semibold text-error-600 hover:text-error-900"
          >
            Try again
          </button>
        </div>
      ) : (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              {name}
            </span>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              {formatBytes(size)}
            </span>
          </div>

          <div className="flex w-full items-center gap-3 ">
            <div className="h-2 flex-1 rounded-full bg-zinc-100">
              <div
                className="h-2 rounded-full bg-violet-600"
                style={{ width: state === 'complete' ? '100%' : '80%' }}
              />
            </div>
            <span className=" text-sm font-medium text-zinc-700 dark:text-zinc-300">
              {state === 'complete' ? '100%' : '80%'}
            </span>
          </div>
        </div>
      )}

      {state === 'complete' ? (
        <CheckCircle2 className="h-5 w-5 fill-violet-500 text-white" />
      ) : (
        <Button variant="ghost" type="button" className={deleteButton()}>
          <Trash2 className="h-5 w-5 " />
        </Button>
      )}
    </div>
  )
}
