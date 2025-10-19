import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'TheGirlz.store - Coming Soon',
  description: 'We\'re crafting something stunning ✨ Join our waitlist to get early access to exclusive digital nail bundles.',
  keywords: ['nail art', 'digital products', 'beauty', 'waitlist', 'coming soon'],
  authors: [{ name: 'TheGirlz.store' }],
  openGraph: {
    title: 'TheGirlz.store - Coming Soon',
    description: 'We\'re crafting something stunning ✨ Join our waitlist to get early access to exclusive digital nail bundles.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="antialiased" suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}
