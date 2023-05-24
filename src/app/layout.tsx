import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Animesh Todo Application',
  description: 'A todo application made by Animesh using nextjs and sqlite',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} m-0 p-0 box-border`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
