'use client';

import { useEffect, useContext } from 'react';
import { TableContext } from '@/context/TableContext/TableContext';
import TableCaption from '@/components/table/tableCaption/TableCaption';
import ColumnsHeaders from '@/components/table/columnsHeaders/ColumnsHeaders';
import TableContent from '@/components/table/tableContent/TableContent';
import Error from '@/components/error/Error';
import Loading from '@/components/loading/Loading';
import Details from '@/components/details/Details';
import { INICIAL_API_URL } from '@/constants/constants';

const Table = () => {
  const { isLoading, isError, details, getData } = useContext(TableContext);

  useEffect(() => {
    getData(INICIAL_API_URL);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  return (
    <div className="flex flex-col h-full w-full overflow-auto">
      <table className="w-full border-x border-b border-[var(--blue)]">
        <TableCaption />
        <thead className="hidden md:table-header sticky top-10 bg-[var(--column-header-bg)] h-14">
          <tr className=" text-lg font-semibold ">
            <ColumnsHeaders />
          </tr>
        </thead>
        <tbody>
          <TableContent />
        </tbody>
      </table>
      {details && <Details />}
    </div>
  );
};

export default Table;
