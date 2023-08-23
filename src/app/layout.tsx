import { SideBar } from '@/components/Sidebar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Theme } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Create dashboard with tailwind css',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className=" antialiased">
      <body className={inter.className}>
        <Theme>
          <div className="min-h-screen  dark:bg-zinc-900 dark:text-zinc-100 lg:grid lg:grid-cols-app ">
            <SideBar />
            <main className="mx-4 max-w-[100vw] px-4 pb-12 pt-24 lg:col-start-2 lg:px-8 lg:pt-8">
              {children}
            </main>
          </div>
        </Theme>
      </body>
    </html>
  )
}
