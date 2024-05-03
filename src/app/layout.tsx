import * as React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import 'flowbite/dist/flowbite.min.css';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pedro Correia',
  description: 'Portfolio - Fullstack Developer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactNode {
  return (
    <html lang='en'>
      <head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap'
          rel='stylesheet'
        />
      </head>

      <body className={inter.className}>
        <script src='../../node_modules/flowbite/dist/flowbite.min.js' />

        {children}
      </body>
    </html>
  );
}
