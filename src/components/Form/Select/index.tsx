'use client'
import { ChevronDown } from 'lucide-react'
import * as SelectRadix from '@radix-ui/react-select'

export interface SelectProps extends SelectRadix.SelectProps {
  children: React.ReactNode
  placeholder: string
}

export function Select({ children, placeholder, ...rest }: SelectProps) {
  return (
    <SelectRadix.Root {...rest}>
      <SelectRadix.Trigger className="flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm data-[placeholder]:text-zinc-400 dark:border-zinc-700">
        <SelectRadix.Value placeholder={placeholder} />
        <SelectRadix.Icon>
          <ChevronDown className="h-5 w-5 text-zinc-500" />
        </SelectRadix.Icon>
      </SelectRadix.Trigger>

      <SelectRadix.Portal>
        <SelectRadix.Content
          side="bottom"
          position="popper"
          sideOffset={8} // mt 8
          className="z-10 w-[--radix-select-trigger-width] cursor-pointer overflow-hidden  rounded-lg border border-zinc-200 bg-white text-zinc-900 shadow-md dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-100"
        >
          <SelectRadix.Viewport>{children}</SelectRadix.Viewport>
        </SelectRadix.Content>
      </SelectRadix.Portal>
    </SelectRadix.Root>
  )
}
