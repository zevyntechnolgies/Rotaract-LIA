import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Providers from '@/components/providers/Providers'
import AuroraBackground from '@/components/ui/AuroraBackground'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Rotaract LIA - Building Leaders, Serving Communities',
  description: 'Rotaract LIA - Empowering the next generation of leaders through excellence, innovation, and community service. Join us in making a global impact.',
  keywords: ['Rotaract', 'LIA', 'Community Service', 'Youth Leadership', 'Rotary', 'Non-profit', 'Volunteering', 'Coimbatore'],
  authors: [{ name: 'Rotaract LIA' }],
  creator: 'Rotaract LIA',
  publisher: 'Rotaract LIA',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://rotaractlia.org'),
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Rotaract LIA - Building Leaders, Serving Communities',
    description: 'Rotaract LIA - Empowering the next generation of leaders through excellence, innovation, and community service.',
    type: 'website',
    url: 'https://rotaractlia.org',
    siteName: 'Rotaract LIA',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rotaract LIA - Building Leaders, Serving Communities',
    description: 'Rotaract LIA - Empowering the next generation of leaders through excellence, innovation, and community service.',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a1929' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Outfit:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased bg-background text-foreground">
        <AuroraBackground />
        <Providers>
          {children}
        </Providers>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
