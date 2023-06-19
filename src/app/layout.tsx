import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Dynamic Table App',
  description: 'Dynamic Table created by using open Google Books Api',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex flex-col items-center justify-between w-full max-w-[1000px] h-screen mx-auto bg-[var(--body-bg-color-dark)] text-[var(--text-dark)] overflow-hidden `}
      >
        <Header />
        <div className="w-full grow p-4 pb-28 overflow-hidden">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
