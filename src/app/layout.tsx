import type { Metadata } from 'next';
import { Geist, Geist_Mono, Kalnia } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const kalnia = Kalnia({
  subsets: ['latin'],
  weight: ['600'],
});

export const metadata: Metadata = {
  title: 'sheguideme',
  description: 'Inspiration and travel guidance for women',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${kalnia.className} bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100`}
      >
        {children}
      </body>
    </html>
  );
}
