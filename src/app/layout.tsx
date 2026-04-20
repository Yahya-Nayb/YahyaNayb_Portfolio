import type { Metadata } from 'next';
import { Geist, Geist_Mono, Archivo, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/providers/SmoothScroll';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const archivo = Archivo({
  variable: '--font-archivo',
  subsets: ['latin'],
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Yahya Nayb | Full Stack Developer',
  description: 'Portfolio of Yahya Nayb, Full Stack Developer.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${archivo.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-[#030717] text-white antialiased overflow-x-hidden">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
