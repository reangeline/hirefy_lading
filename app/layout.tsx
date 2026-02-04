import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hirefy - AI-Powered Resume Optimization for 3x More Interviews',
  description: 'Get your resume past AI recruiters with Hirefy. Optimize for ATS systems, land more interviews. Join 10,000+ job seekers who increased their interview rate by 3x.',
  keywords: ['resume optimization', 'ATS resume', 'AI resume', 'job search', 'career', 'interviews', 'applicant tracking system'],
  authors: [{ name: 'Hirefy' }],
  openGraph: {
    title: 'Hirefy - AI-Powered Resume Optimization',
    description: 'Get your resume past AI recruiters. 3x more interviews guaranteed.',
    url: 'https://hirefy.careers',
    siteName: 'Hirefy',
    images: [
      {
        url: '/logo.png',
        width: 2200,
        height: 1630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hirefy - AI-Powered Resume Optimization',
    description: 'Get your resume past AI recruiters. 3x more interviews guaranteed.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
