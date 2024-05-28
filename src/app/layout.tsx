import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import StoreProvider from './StoreProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'eMedipay',
  description: 'Health care',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <StoreProvider>
        <body
          className={cn(
            'min-h-screen bg-background font-sans antialiased',
            inter.className
          )}
        >
          {children}
        </body>
      </StoreProvider>
    </html>
  );
}
