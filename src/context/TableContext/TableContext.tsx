'use client';

import { createContext, useState, useEffect } from 'react';
import { TSelectedData, TTableContextProvider } from '@/types/types';
import NavigateBreadcrumbButton from '@/components/table/tableCaption/breadcrumb/navigateBreadcrumbButton/NavigateBreadcrumbButton';
import { BASE_API_URL } from '@/constants/constants';

export const TableContext = createContext<any>({
  selectedData: null,
  breadcrumb: '',
  isLoading: false,
  isError: false,
  getSelectedData: () => {},
  hideDetails: () => {},
  getData: () => {},
  getBookDetails: () => {},
  getBooksOfAuthor: () => {},
  resetBreadcrumb: () => {},
});

export const TableContextProvider: React.FC<TTableContextProvider> = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selectedData, setSelectedData] = useState<any>();
  const [details, setDetails] = useState<TSelectedData[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [breadcrumb, setBreadcrumb] = useState<string | React.ReactNode>('');
  const [isMounted, setIsMounted] = useState<boolean>(false);

  const selectedDataFromApi: TSelectedData[] = [];

  const checkIsBookGotOnlyOneAuthor = (item: any): boolean => {
    return item.volumeInfo.authors?.length === 1 ? true : false;
  };

  const resetBreadcrumb = (): void => {
    setBreadcrumb('');
  };

  const updateBreadcrumb = (author: string, title?: string): void => {
    if (!title) {
      setBreadcrumb(`${author}`);
    }
    setBreadcrumb(
      <NavigateBreadcrumbButton author={author} title={title || ''} />
    );
  };

  const getData = async (url: string): Promise<void> => {
    try {
      setIsLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      getSelectedData(data.items);
      setIsLoading(false);
    } catch (error) {
      console.error('Opss, something went wrong with getting data: ', error);
      setIsLoading(false);
      setIsError(true);
    }
  };

  const getSelectedData = (source: any) => {
    source?.map((book: any) => {
      if (checkIsBookGotOnlyOneAuthor(book)) {
        selectedDataFromApi.push({
          id: book.id,
          title: book.volumeInfo?.title,
          authors: book.volumeInfo?.authors,
          publishedDate: book.volumeInfo.publishedDate?.slice(0, 4),
          publisher: book.volumeInfo.publisher,
          categories: book.volumeInfo.categories
            ? book.volumeInfo.categories
            : null,
          pageCount: book.volumeInfo.pageCount,
          averageRating: book.volumeInfo.averageRating,
          thumbnail: book.volumeInfo.imageLinks
            ? book.volumeInfo.imageLinks.thumbnail
            : null,
        });
      }
      setSelectedData(selectedDataFromApi);
    });
  };

  const getBookDetails = (bookID: string) => {
    const selectedBookDetails = selectedData.find(
      (item: any) => item.id === bookID
    );
    // [selectedBookDetails].flat() ==> wrapping object into Array
    setSelectedData([selectedBookDetails].flat());
    setDetails(selectedBookDetails);
    updateBreadcrumb(selectedBookDetails.authors, selectedBookDetails.title);
  };

  const hideDetails = () => {
    setDetails(undefined);
  };

  const getBooksOfAuthor = (author: string) => {
    getData(`${BASE_API_URL}?q=inauthor:"${author}"&maxResults=40`);
    updateBreadcrumb(author);
    if (details) hideDetails();
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <TableContext.Provider
      value={{
        getData,
        getSelectedData,
        getBookDetails,
        hideDetails,
        getBooksOfAuthor,
        resetBreadcrumb,
        selectedData,
        details,
        breadcrumb,
        isLoading,
        isError,
      }}
    >
      {children}
    </TableContext.Provider>
  );
};
