import Image from 'next/image';
import logoIcon from '@/assets/logo.svg';

const Logo = () => {
  return (
    <div>
      <Image
        src={logoIcon}
        alt="page logo icon"
        width={30}
        height={40}
        priority={true}
      />
    </div>
  );
};

export default Logo;
