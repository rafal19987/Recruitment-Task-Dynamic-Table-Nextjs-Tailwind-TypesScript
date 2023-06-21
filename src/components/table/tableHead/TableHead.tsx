import ColumnsHeaders from './columnsHeaders/ColumnsHeaders';

const TableHead = () => {
  return (
    <thead className="hidden md:table-header sticky top-14 bg-[var(--column-header-bg)] h-14">
      <tr className=" text-lg font-semibold ">
        <ColumnsHeaders />
      </tr>
    </thead>
  );
};

export default TableHead;
