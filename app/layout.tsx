"use client"
import type { Metadata } from 'next'
import { Inter, Sora } from 'next/font/google'
import './globals.css'
import Navbar from './components/navbar'
import { ThemeProvider } from 'next-themes'

const sora = Sora({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Grupo Raja',
//   description: 'Grupo raja energia solar',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
        <body className={sora.className}>
      <ThemeProvider attribute='class' defaultTheme='light'>
          {/* <Navbar /> */}
          {children}
      </ThemeProvider>
        </body>
    </html>
  )
}
