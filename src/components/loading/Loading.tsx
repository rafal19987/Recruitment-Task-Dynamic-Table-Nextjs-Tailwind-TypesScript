import Image from 'next/image';
import loadingIcon from '@/assets/loading.svg';

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full ">
      <div className="relative w-48 h-48 animate-spin">
        <Image
          src={loadingIcon}
          alt="Loading Icon"
          fill={true}
          priority={true}
        />
      </div>
      <span className="mt-4 text-2xl">Loading...</span>
    </div>
  );
};

export default Loading;
