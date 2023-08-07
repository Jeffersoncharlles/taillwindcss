import { FileInput } from '@/components/Form/FileInput'
import { Select } from '@/components/Form/Select'
import { Input } from '@/components/Form/Input'
import { SettingsTabs } from '@/components/SettingsTabs'
import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react'
import { SelectItem } from '@/components/Form/Select/SelectItem'
import { TextArea } from '@/components/Form/TextArea'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100">
        Settings
      </h1>
      <SettingsTabs />
      <section className="mt-6 flex flex-col ">
        <div className=" flex items-center justify-between border-b border-zinc-200 pb-5 dark:border-zinc-600">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
              Personal info
            </h2>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              Update your photo and personal details here
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50 dark:border-zinc-400 dark:text-zinc-300 dark:hover:bg-zinc-800"
              type="button"
            >
              Cancel
            </button>
            <button
              className=" rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
              type="submit"
              form="settings"
            >
              Save
            </button>
          </div>
        </div>
        <form
          id="settings"
          className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200 dark:divide-zinc-800"
        >
          <div className="grid grid-cols-form gap-3">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Name
            </label>
            <div className="grid grid-cols-2 gap-6">
              <Input.Root>
                <Input.Control id="firstName" defaultValue="Jefferson" />
              </Input.Root>
              <Input.Root>
                <Input.Control defaultValue="Charlles" />
              </Input.Root>
            </div>
          </div>
          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Email address
            </label>
            <Input.Root>
              <Input.Prefix>
                <Mail className="h-5 w-5 text-zinc-500" />
              </Input.Prefix>
              <Input.Control
                id="email"
                type="email"
                defaultValue="contato@jefferdeveloper.com"
              />
            </Input.Root>
          </div>
          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="photo"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Your photo
              <span className="mt-0.5 block text-sm font-normal text-zinc-500 dark:text-zinc-400">
                This will be displayed on your profile
              </span>
            </label>
            <FileInput.Root className="flex items-start gap-5">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
          </div>
          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="role"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Role
            </label>
            <div className="grid grid-cols-2 gap-6">
              <Input.Root>
                <Input.Control id="role" defaultValue="CTO" />
              </Input.Root>
            </div>
          </div>
          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="country"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Country
            </label>
            <Select placeholder="Select a country...">
              <SelectItem value="br" text="Brasil" />
              <SelectItem value="us" text="United states" />
              <SelectItem value="ca" text="Canada" />
            </Select>
          </div>
          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="timezone"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Timezone
            </label>
            <Select placeholder="Select a timezone...">
              <SelectItem value="br" text="Pacific standard Time (UTC-08:00)" />
              <SelectItem value="us" text="America - Sao Paulo (UTC-03:00)" />
              <SelectItem value="ca" text="Africa - Addis_Ababa (UTC+03:00)" />
            </Select>
          </div>
          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="bio"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Bio
              <span className="mt-0.5 block text-sm font-normal text-zinc-500 dark:text-zinc-400">
                Write a short introduction.
              </span>
            </label>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <Select placeholder="" defaultValue="normal">
                  <SelectItem
                    value="normal"
                    text="Normal Text"
                    defaultChecked
                  />
                  <SelectItem value="md" text="Markdown" />
                </Select>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    className=" rounded-md p-2 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-800"
                  >
                    <Bold className="h-4  w-4 text-zinc-500" strokeWidth={3} />
                  </button>
                  <button
                    type="button"
                    className=" rounded-md p-2 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-800"
                  >
                    <Italic
                      className="h-4  w-4 text-zinc-500"
                      strokeWidth={3}
                    />
                  </button>
                  <button
                    type="button"
                    className=" rounded-md p-2 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-800"
                  >
                    <Link className="h-4  w-4 text-zinc-500" strokeWidth={3} />
                  </button>
                  <button
                    type="button"
                    className=" rounded-md p-2 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-800"
                  >
                    <List className="h-4  w-4 text-zinc-500" strokeWidth={3} />
                  </button>
                  <button
                    type="button"
                    className=" rounded-md p-2 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-800"
                  >
                    <ListOrdered
                      className="h-4  w-4 text-zinc-500"
                      strokeWidth={3}
                    />
                  </button>
                </div>
              </div>
              <TextArea
                id="bio"
                defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development.
"
              />
            </div>
          </div>
          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="projects"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Portfolio projects
              <span className="mt-0.5 block text-sm font-normal text-zinc-500 dark:text-zinc-400">
                Share a few snippets of your work.
              </span>
            </label>
            <FileInput.Root className="items-start gap-5">
              <FileInput.Trigger />
              <FileInput.FileList />
              <FileInput.Control multiple />
            </FileInput.Root>
          </div>

          <div className="flex items-center justify-end gap-2 pt-5">
            <button
              className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50 dark:border-zinc-400 dark:text-zinc-300 dark:hover:bg-zinc-800"
              type="button"
            >
              Cancel
            </button>
            <button
              className=" rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
              type="submit"
            >
              Save
            </button>
          </div>
        </form>
      </section>
    </>
  )
}
