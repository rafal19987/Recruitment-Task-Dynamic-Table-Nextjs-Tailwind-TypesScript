'use client';

import { useEffect, useContext } from 'react';
import { TableContext } from '@/context/TableContext/TableContext';
import TableCaption from '@/components/table/tableCaption/TableCaption';
import TableBody from './tableBody/TableBody';
import TableHead from './tableHead/TableHead';
import Error from '@/components/error/Error';
import Loading from '@/components/loading/Loading';
import { INICIAL_API_URL } from '@/constants/constants';

const Table = () => {
  const { isLoading, isError, getData } = useContext(TableContext);

  useEffect(() => {
    getData(INICIAL_API_URL);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  return (
    <table className="w-full border-x border-b border-[var(--blue)]">
      <TableCaption />
      <TableHead />
      <TableBody />
    </table>
  );
};

export default Table;
