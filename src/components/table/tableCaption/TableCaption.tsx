'use client';

import { useContext } from 'react';
import { TableContext } from '@/context/TableContext/TableContext';
import { INICIAL_API_URL } from '@/constants/constants';

const TableCaption = () => {
  const { path, getData } = useContext(TableContext);

  const handleHomeClick = () => {
    getData(INICIAL_API_URL);
  };

  return (
    <caption className="sticky top-0 text-left  min-h-max w-full bg-[var(--blue)]">
      <h3 className="w-fit p-2 tracking-wide text-lg">
        {'> '}
        <span
          className="hover:cursor-pointer underline text-[var(--navigate-color)] hover:text-[var(--navigate-color-hover)] transition-colors"
          onClick={handleHomeClick}
        >
          home
        </span>
        /{path}
      </h3>
    </caption>
  );
};

export default TableCaption;
