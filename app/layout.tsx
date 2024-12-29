import './globals.css'
import { Metadata } from 'next'
import { Noto_Kufi_Arabic } from 'next/font/google'

const notoKufiArabic = Noto_Kufi_Arabic({ subsets: ['arabic'] })

export const metadata: Metadata = {
  title: 'شركة النقل | خدمات شحن وتوصيل موثوقة في المملكة العربية السعودية',
  description: 'شركة رائدة في مجال خدمات النقل والشحن في المملكة العربية السعودية. نقدم خدمات نقل بري، بحري وجوي مع ضمان الجودة والأمان',
  keywords: 'نقل, شحن, لوجستيات, شحن بري, شحن بحري, شحن جوي, نقل بضائع, شركة نقل, السعودية, جدة',
  authors: [{ name: 'شركة النقل' }],
  creator: 'شركة النقل',
  publisher: 'شركة النقل',
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: 'website',
    locale: 'ar_SA',
    url: 'https://www.transport-company.sa',
    siteName: 'شركة النقل',
    title: 'شركة النقل | خدمات شحن وتوصيل موثوقة',
    description: 'خدمات نقل وشحن متكاملة في المملكة العربية السعودية',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'شركة النقل - خدمات الشحن المتكاملة',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'شركة النقل | خدمات شحن وتوصيل موثوقة',
    description: 'خدمات نقل وشحن متكاملة في المملكة العربية السعودية',
    images: ['/twitter-image.jpg'],
    creator: '@TransportCompany',
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
    },
  },
  verification: {
    google: 'verification_token',
    yandex: 'verification_token',
  },
  alternates: {
    canonical: 'https://www.transport-company.sa',
    languages: {
      'ar-SA': 'https://www.transport-company.sa',
      'en-US': 'https://www.transport-company.sa/en',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={notoKufiArabic.className}>{children}</body>
    </html>
  )
}
