'use client';

import { useContext } from 'react';
import { TableContext } from '@/context/TableContext/TableContext';
import { TSelectedData } from '@/types/types';
import NoData from '@/components/noData/NoData';

const TableContent = () => {
  const { data, showBookDetails, showBooksOfAuthor, getAuthorOfBook } =
    useContext(TableContext);

  return (
    <>
      {data?.map(({ id, title, authors, publishedDate }: TSelectedData) => (
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
            <span className="w-2/4 text-base text-white md:hidden">TITLE</span>
            <span
              className="w-2/4 text-start cursor-pointer hover:text-[var(--violet)] transition-colors duration-200 md:full"
              onClick={() => {
                showBookDetails(id, title), getAuthorOfBook(id);
              }}
            >
              {title}
            </span>
          </td>
          <td className="flex p-4 md:table-cell">
            <span className="w-2/4 text-base text-white md:hidden">
              AUTHOR/S
            </span>
            <ul className="flex flex-col gap-4 w-2/4 h-full md:w-full md:cell-content">
              {authors?.map((author: string) => (
                <li className="" key={author}>
                  <span
                    className="text-start md:cell-content"
                    onClick={() => showBooksOfAuthor(author)}
                  >
                    {author}
                  </span>
                </li>
              ))}
            </ul>
          </td>
          <td className="flex p-4 md:table-cell">
            <span className="w-2/4 text-base text-white md:hidden">YEAR</span>
            <span className="w-2/4 text-start text-[var(--grey)] md:full">
              {publishedDate ? publishedDate : <NoData />}
            </span>
          </td>
        </tr>
      ))}
    </>
  );
};

export default TableContent;
