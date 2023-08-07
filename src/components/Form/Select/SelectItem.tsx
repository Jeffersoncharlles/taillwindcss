'use client'
import * as SelectRadix from '@radix-ui/react-select'
import { Check } from 'lucide-react'

export interface SelectItemProps extends SelectRadix.SelectItemProps {
  text: string
}

export function SelectItem({ text, ...props }: SelectItemProps) {
  return (
    <SelectRadix.Item
      className="flex items-center justify-between gap-2 px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-50 dark:data-[highlighted]:bg-zinc-800"
      {...props}
    >
      <SelectRadix.ItemText>{text}</SelectRadix.ItemText>
      <SelectRadix.ItemIndicator>
        <Check className="h-4 w-4 text-violet-500 dark:text-violet-300" />
      </SelectRadix.ItemIndicator>
    </SelectRadix.Item>
  )
}
