'use client';

import { TableContext } from '@/context/TableContext/TableContext';
import { useContext } from 'react';
import Image from 'next/image';
import errorIcon from '@/assets/error.svg';
import { INICIAL_API_URL } from '@/constants/constants';

const Error = () => {
  const { getData } = useContext(TableContext);

  return (
    <div className="flex flex-col items-center justify-evenly w-full h-full">
      <div className="relative w-48 h-48">
        <Image src={errorIcon} alt="Error Icon" fill={true} priority={true} />
      </div>
      <h2 className="flex flex-col gap-4 text-[var(--red)] text-xl">
        Opss, something went wrong with getting data. Error is logged in
        console.{' '}
        <button
          className="text-2xl text-blue-500 hover:text-blue-800 transition-colors duration-200"
          onClick={() => getData(INICIAL_API_URL)}
        >
          Fetch inicial Data
        </button>
      </h2>
    </div>
  );
};

export default Error;
