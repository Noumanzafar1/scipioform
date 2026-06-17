import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Scipioform — Growth Consulting for Executives',
  description: 'Scipioform partners with CEOs, COOs, and senior leadership to build the pipeline, strategy, and outreach that drives real commercial results.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}