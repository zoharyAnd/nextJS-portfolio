import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const inter = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zohary Andrianome',
  description: 'Web and Mobile application developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
