import Image from 'next/image';
import Link from 'next/link';
import githubIcon from '@/assets/gitHub.svg';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center w-screen h-12 ">
      <span className="flex items-center gap-2">
        Created by
        <Link
          className="flex gap-2"
          target="_blank"
          href={'https://github.com/rafal19987'}
        >
          <span className="text-[var(--green)] hover:underline">
            Rafał Izdebski
          </span>
          <Image src={githubIcon} alt="github icon" width={20} height={20} />
        </Link>
      </span>
    </footer>
  );
};

export default Footer;
