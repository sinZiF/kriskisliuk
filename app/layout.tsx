import type { Metadata } from 'next'
import '@/css/globals.css'
import Navbar from '@/components/Nav/Navbar'
import About from '@/components/about/About'

export const metadata: Metadata = {
  title: 'kriskisliuk',
  description: 'Content Creator',
}
//  h-screen m-auto px-16 flex flex-col max-w-screen-2xl
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
