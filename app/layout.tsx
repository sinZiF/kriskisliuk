import type { Metadata } from 'next'
import '@/css/globals.css'
import Navbar from '@/components/Nav/Navbar'

export const metadata: Metadata = {
  title: 'kriskisliuk',
  description: 'Content Creator',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="h-screen m-auto px-16 flex flex-col max-w-screen-2xl">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
