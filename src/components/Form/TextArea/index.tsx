export type TextAreaProps = React.ComponentProps<'textarea'>

export function TextArea(props: TextAreaProps) {
  return (
    <textarea
      className="min-h-[120px] w-full resize-y rounded-lg border border-zinc-300 px-3 py-2 shadow-sm dark:border-zinc-600 dark:bg-zinc-900"
      {...props}
    />
  )
}
