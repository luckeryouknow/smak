import type { Metadata } from 'next';

import { Header } from '@/modules';

import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <body className="font-lato font-normal"> */}
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
