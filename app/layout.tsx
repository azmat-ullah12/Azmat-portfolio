import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Azmat Ullah | Researcher · Educator · Digital Creator',
  description:
    'Personal portfolio of Azmat Ullah — researcher, educator, digital creator and emerging entrepreneur working across research, education, data, projects and digital content.',
  metadataBase: new URL('https://azmatullah.vercel.app'),
  openGraph: {
    title: 'Azmat Ullah | Researcher · Educator · Digital Creator',
    description:
      'Personal portfolio of Azmat Ullah — researcher, educator, digital creator and emerging entrepreneur working across research, education, data, projects and digital content.',
    url: 'https://azmatullah.vercel.app',
    siteName: 'Azmat Ullah',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Azmat Ullah | Researcher · Educator · Digital Creator',
    description:
      'Personal portfolio of Azmat Ullah — researcher, educator, digital creator and emerging entrepreneur.',
  },
  alternates: {
    canonical: 'https://azmatullah.vercel.app',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="font-body bg-off-white text-navy antialiased">
        {children}
      </body>
    </html>
  );
}
