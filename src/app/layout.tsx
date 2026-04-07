import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'HomeGrownSkills',
  description: 'The education system teaches children to pass tests. We teach them to pass life.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}