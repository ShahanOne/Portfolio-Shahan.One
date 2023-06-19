import '../styles/globals.css';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
import Head from 'next/head';
export const metadata = {
  title: 'Shahan.One Portfolio',
  description: 'Portfolio for Syed Shahan Hussain',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="dev.ico" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
