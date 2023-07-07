'use client';

import { useContext } from 'react';
import { TableContext } from '@/context/TableContext/TableContext';
import { TSelectedData } from '@/types/types';
import NoData from '@/components/noData/NoData';

const TableContent = () => {
  const { getBookDetails, selectedData, getBooksOfAuthor } =
    useContext(TableContext);

  return (
    <>
      {selectedData.map(
        ({ id, title, authors, publishedDate }: TSelectedData) => (
          <tr
            key={id}
            className="even:bg-[var(--row-bg-primary)] h-14 hover:bg-[var(--blue)] transition-colors duration-200"
          >
            <td className="flex p-4 md:table-cell">
              <span className="w-2/4 text-base text-white md:hidden">ID</span>
              <span className="w-2/4 text-start text-[var(--grey)] md:full">
                {id}
              </span>
            </td>
            <td className="flex p-4 md:table-cell">
              <span className="w-2/4 text-base text-white md:hidden">
                TITLE
              </span>
              <span
                className="w-2/4 text-start cursor-pointer hover:text-[var(--violet)] transition-colors duration-200 md:full"
                onClick={() => {
                  getBookDetails(id);
                }}
              >
                {title}
              </span>
            </td>
            <td className="flex p-4 md:table-cell">
              <span className="w-2/4 text-base text-white md:hidden">
                AUTHOR
              </span>
              <span
                className="w-2/4 text-start cursor-pointer hover:text-[var(--violet)] transition-colors duration-200 md:full"
                onClick={() => {
                  getBooksOfAuthor(authors);
                }}
              >
                {authors}
              </span>
            </td>
            <td className="flex p-4 md:table-cell">
              <span className="w-2/4 text-base text-white md:hidden">YEAR</span>
              <span className="w-2/4 text-start text-[var(--grey)] md:full">
                {publishedDate ? publishedDate : <NoData />}
              </span>
            </td>
          </tr>
        )
      )}
    </>
  );
};

export default TableContent;
