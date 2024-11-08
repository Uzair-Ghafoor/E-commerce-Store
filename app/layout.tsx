import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/navbar/Navbar';
import Container from '@/components/global/Container';
import { Roboto } from 'next/font/google';
import Providers from './Providers';
import { ClerkProvider } from '@clerk/nextjs';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // `${geistSans.variable} ${geistMono.variable} antialiased`;
  return (
    <ClerkProvider>
      <html lang='en' suppressHydrationWarning>
        <body className={roboto.className}>
          <Providers>
            <Navbar />
            <Container className=' py-20'>{children}</Container>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
