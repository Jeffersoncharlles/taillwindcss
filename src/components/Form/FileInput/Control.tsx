'use client'

import { ChangeEvent } from 'react'
import { useFileInput } from './Root'

type ControlProps = React.ComponentProps<'input'>

export function Control({ multiple = false, ...props }: ControlProps) {
  const { id, onFilesSelected } = useFileInput()

  const handleFilesSelected = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) {
      return null
    }

    const files = Array.from(e.target.files) // convert array files

    onFilesSelected(files, multiple)
  }

  return (
    <input
      onChange={handleFilesSelected}
      type="file"
      className="sr-only"
      id={id}
      multiple={multiple}
      {...props}
    />
  )
}
