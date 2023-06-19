'use client';

import { useContext, useState } from 'react';
import Image from 'next/image';
import { TableContext } from '@/context/TableContext/TableContext';
import DetailHeader from './detailHeader/DetailHeader';
import Loading from '@/components/loading/Loading';
import noImageIcon from '@/assets/noImage.svg';

const Details = () => {
  const { details } = useContext(TableContext);
  const [imageIsLoading, setImageIsLoading] = useState<boolean>(true);
  const { publisher, categories, averageRating, pageCount, thumbnail } =
    details[0];

  const handleImageLoad = () => {
    setImageIsLoading(false);
  };

  if (!details) return null;

  return (
    <div className="flex text-lg border-x border-b border-[var(--blue)] p-2 pb-8 bg-[var(--details-bg-color)]">
      <div className="flex flex-col items-end justify-start w-fit h-full py-4">
        <div className="relative w-32 h-48">
          {imageIsLoading && <Loading />}
          <Image
            src={thumbnail ? thumbnail : noImageIcon}
            alt="book image"
            fill={true}
            priority={true}
            onLoad={handleImageLoad}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
      <div className="flex pt-4 px-8 gap-6 flex-col w-full">
        <DetailHeader detail={pageCount} detailField="Pages" />
        <DetailHeader detail={averageRating} detailField="Rating" />
        <DetailHeader detail={publisher} detailField="Publisher" />
        <DetailHeader detail={categories} detailField="Category" />
      </div>
    </div>
  );
};

export default Details;
