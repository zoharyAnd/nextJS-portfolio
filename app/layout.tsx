import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const inter = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zohary Andrianome',
  description: 'Web and Mobile application developer | Développeur web et mobile',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body
        className={`${inter.className} min-h-screen w-screen overflow-x-hidden text-slate-800 bg-app`}
      >
        {children}
      </body>
    </html>
  )
}
