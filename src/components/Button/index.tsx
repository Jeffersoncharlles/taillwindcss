import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: [
    'rounded-lg px-4 py-2 text-sm font-semibold shadow-sm outline-none',
    'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-violet-500',
    'active:opacity-80',
  ],
  variants: {
    variant: {
      primary: 'bg-violet-600  text-white  hover:bg-violet-700',
      outline:
        'border border-zinc-300  text-zinc-700  hover:bg-zinc-50 dark:border-zinc-400 dark:text-zinc-300 dark:hover:bg-zinc-800',
      ghost:
        'rounded-md p-2 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-500',
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
})
type ButtonProps = React.ComponentProps<'button'> & VariantProps<typeof button>

export function Button({ variant, className, ...rest }: ButtonProps) {
  return <button className={button({ variant, className })} {...rest} />
}
//
