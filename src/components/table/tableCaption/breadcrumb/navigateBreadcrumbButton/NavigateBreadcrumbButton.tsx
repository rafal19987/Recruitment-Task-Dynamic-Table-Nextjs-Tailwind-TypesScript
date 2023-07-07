'use client';

import { useContext } from 'react';
import { TableContext } from '@/context/TableContext/TableContext';

const NavigateBreadcrumbButton = ({
  author,
  title,
}: {
  author: string;
  title: string;
}) => {
  const { getBooksOfAuthor } = useContext(TableContext);

  return (
    <>
      <button
        className="py-2 hover:cursor-pointer text-lg text-[var(--navigate-color)] hover:text-[var(--navigate-color-hover)] transition-colors after:content-['/'] after:text-[var(--text-dark)]"
        onClick={() => getBooksOfAuthor(author)}
      >
        {author}
      </button>
      <span className="text-lg">{title}</span>
    </>
  );
};

export default NavigateBreadcrumbButton;
