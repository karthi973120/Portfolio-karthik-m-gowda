import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import '../styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio-karthik-m-gowda.netlify.app'),
  title: 'Karthik M Gowda | Senior Software Engineer & Frontend Architect',
  description:
    'Senior Software Engineer with 8+ years of experience in React, React Native, and frontend architecture. Currently consulting at Flipkart via Wissen Technology. Available for Senior, Staff & Architect opportunities.',
  keywords: [
    'Karthik M Gowda',
    'Senior Software Engineer',
    'Frontend Architect',
    'React Developer',
    'React Native Developer',
    'TypeScript',
    'Next.js',
    'Bengaluru',
    'India',
  ],
  authors: [{ name: 'Karthik M Gowda' }],
  creator: 'Karthik M Gowda',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://portfolio-karthik-m-gowda.netlify.app',
    title: 'Karthik M Gowda | Senior Software Engineer & Frontend Architect',
    description:
      'Senior Software Engineer with 8+ years of experience in React, React Native, and frontend architecture.',
    siteName: 'Karthik M Gowda Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Karthik M Gowda | Senior Software Engineer & Frontend Architect',
    description: 'Senior Software Engineer with 8+ years of experience in React, React Native, and frontend architecture.',
    creator: '@coolkarthik_m',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
