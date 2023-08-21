import { ComponentProps } from 'react'

// Pattern de composição

type InputPrefixProps = ComponentProps<'div'>

function InputPrefix({ ...rest }: InputPrefixProps) {
  return <div {...rest} />
}
type InputControlProps = ComponentProps<'input'>

function InputControl({ ...rest }: InputControlProps) {
  return (
    <input
      className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600 outline-none dark:text-zinc-100 "
      {...rest}
    />
  )
}

export type InputRootProps = ComponentProps<'div'>

function InputRoot({ ...rest }: InputRootProps) {
  return (
    <div
      className="mx-1 flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm focus-within:border-violet-300 focus-within:ring-2 focus-within:ring-violet-100 dark:border-zinc-700"
      {...rest}
    />
  )
}

export const Input = {
  Prefix: InputPrefix,
  Control: InputControl,
  Root: InputRoot,
}
