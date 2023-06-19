'use client';

import { createContext, useState, useEffect } from 'react';
import { TSelectedData, TTableContextProvider } from '@/types/types';
import { BASE_API_URL } from '@/constants/constants';

export const TableContext = createContext<any>({
  data: null,
  path: '',
  isLoading: false,
  isError: false,
  getDetailsData: () => {},
  showBooksOfAuthor: () => {},
  showBookDetails: () => {},
  getDetails: () => {},
  getData: () => {},
  getAuthorOfBook: () => {},
});

export const TableContextProvider: React.FC<TTableContextProvider> = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [data, setData] = useState<TSelectedData[]>();
  const [details, setDetails] = useState<TSelectedData[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [path, setPath] = useState<string | React.ReactNode>('');
  const [isMounted, setIsMounted] = useState<boolean>(false);

  const showBooksOfAuthor = (author: string) => {
    getData(`${BASE_API_URL}?q=inauthor:"${author}"&maxResults=40`);
    setPath(`${author}`);
  };

  const showBookDetails = (bookID: string) => {
    getDetails(`${BASE_API_URL}${bookID}`);
  };

  const getAuthorOfBook = async (bookID: string) => {
    const res = await fetch(`${BASE_API_URL}${bookID}`);
    const data = await res.json();
    const author = data.volumeInfo.authors[0];
    const title = data.volumeInfo.title;
    setPath(
      <>
        <span
          className="hover:cursor-pointer underline text-[var(--navigate-color)] hover:text-[var(--navigate-color-hover)] transition-colors"
          onClick={() => showBooksOfAuthor(author)}
        >
          {author}
        </span>
        {'/'}
        {title}
      </>
    );
  };

  const getDetails = async (url: string): Promise<void> => {
    try {
      setIsLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      const selectedDataFromApi: Array<TSelectedData> = [
        {
          id: data.id,
          title: data.volumeInfo.title,
          authors: data.volumeInfo.authors,
          publishedDate: data.volumeInfo.publishedDate.slice(0, 4),
          publisher: data.volumeInfo.publisher,
          categories: data.volumeInfo.categories
            ? data.volumeInfo.categories
            : null,
          pageCount: data.volumeInfo.pageCount,
          averageRating: data.volumeInfo.averageRating,
          thumbnail: data.volumeInfo.imageLinks
            ? data.volumeInfo.imageLinks.thumbnail
            : null,
        },
      ];
      await getAuthorOfBook(data.id);
      setData(selectedDataFromApi);
      setDetails(selectedDataFromApi);
      setIsLoading(false);
      if (isError) setIsError(false);
    } catch (error) {
      console.error('Opss, something went wrong with getting details: ', error);
      setIsLoading(false);
      setIsError(true);
    }
  };

  const getData = async (url: string): Promise<void> => {
    try {
      setIsLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      let selectedDataFromApi: Array<TSelectedData> = [];
      data.items.forEach((item: any) => {
        if (item.volumeInfo.authors?.length === 1) {
          selectedDataFromApi.push({
            id: item.id,
            title: item.volumeInfo?.title,
            authors: item.volumeInfo?.authors,
            publishedDate: item.volumeInfo.publishedDate?.slice(0, 4),
          });
        }
      });
      setDetails(undefined);
      setData(selectedDataFromApi);
      setIsLoading(false);
    } catch (error) {
      console.error('Opss, something went wrong with getting data: ', error);
      setIsLoading(false);
      setIsError(true);
    }
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <TableContext.Provider
      value={{
        data,
        path,
        isLoading,
        isError,
        details,
        showBooksOfAuthor,
        showBookDetails,
        getDetails,
        getData,
        getAuthorOfBook,
      }}
    >
      {children}
    </TableContext.Provider>
  );
};
