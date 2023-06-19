import Link from 'next/link';
import Logo from '@/components/header/logo/Logo';

const Header = () => {
  return (
    <header className="flex items-center justify-center w-screen border-b border-[--blue]">
      <div className="flex items-center justify-start w-full h-14 max-w-[1000px] p-4">
        <Link href="/" className="flex gap-2">
          <Logo />
          <span>Google Books API</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
