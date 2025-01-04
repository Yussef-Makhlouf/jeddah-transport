import './globals.css'
import { Metadata } from 'next'
import { Noto_Kufi_Arabic } from 'next/font/google'
import Cursor from '@/components/Cursor'

const notoKufiArabic = Noto_Kufi_Arabic({ subsets: ['arabic'] })

export const metadata: Metadata = {
  title: {
    default: 'شركة ترميز كود | تطوير وبرمجة المواقع والتطبيقات في المملكة العربية السعودية',
    template: '%s | شركة ترميز كود'
  },
  description: 'شركة رائدة في مجال تطوير وبرمجة المواقع والتطبيقات. نقدم حلول تقنية متكاملة وخدمات برمجية احترافية مع ضمان الجودة',
  keywords: [
    'تطوير مواقع',
    'برمجة تطبيقات',
    'تصميم مواقع',
    'تطوير تطبيقات',
    'برمجة خاصة',
    'تطوير متاجر إلكترونية',
    'شركة برمجة',
    'السعودية',
    'جدة'
  ],
  authors: [{ name: 'شركة ترميز كود', url: 'https://www.tarmezcode.sa' }],
  creator: 'شركة ترميز كود',
  publisher: 'شركة ترميز كود',
  metadataBase: new URL('https://www.tarmezcode.sa'),
  alternates: {
    canonical: '/',
    languages: {
      'ar-SA': '/',
      'en-US': '/en'
    }
  },
  openGraph: {
    type: 'website',
    locale: 'ar_SA',
    url: 'https://www.tarmezcode.sa',
    siteName: 'شركة ترميز كود',
    title: 'شركة ترميز كود | تطوير وبرمجة المواقع والتطبيقات',
    description: 'حلول تقنية متكاملة وخدمات برمجية احترافية في المملكة العربية السعودية',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'شركة ترميز كود - حلول برمجية متكاملة',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'شركة ترميز كود | تطوير وبرمجة المواقع والتطبيقات',
    description: 'حلول تقنية متكاملة وخدمات برمجية احترافية',
    images: ['/twitter-image.jpg'],
    creator: '@TarmezCode',
    site: '@TarmezCode'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  },
  verification: {
    google: 'verification-code',
    yandex: 'verification-code',
  },
  category: 'technology',
  classification: 'web development and programming',
  referrer: 'origin-when-cross-origin',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#00B272' }
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={notoKufiArabic.className}>
      <Cursor />

        {children}</body>
    </html>
  )
}