import '../styles/globals.css';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
export const metadata = {
  title: 'Shahan.One Portfolio',
  description: 'Portfolio for Syed Shahan Hussain',
  icons: {
    icon: '/dev.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
