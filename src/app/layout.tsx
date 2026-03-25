import type { Metadata } from 'next'
import { Outfit, JetBrains_Mono, Fraunces } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/providers'

const outfit = Outfit({ 
  subsets: ['latin'], 
  variable: '--font-sans',
  weight: ['300', '400', '500', '600', '700', '800', '900']
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['italic', 'normal']
})

const jetBrainsMono = JetBrains_Mono({ 
  subsets: ['latin'], 
  variable: '--font-mono' 
})

export const metadata: Metadata = {
  title: 'GRID | From One Student to a Million',
  description: 'A global movement of students building the future.',
  icons: {
    icon: '/logo.svg',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} ${jetBrainsMono.variable} ${fraunces.variable} antialiased font-sans bg-white text-neutral-dark selection:bg-accent selection:text-white`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
