import { tableHeaders } from '@/constants/constants';

const ColumnsHeaders = () => {
  return (
    <>
      {tableHeaders.map((header: string) => (
        <td key={header} className=" text-left tracking-wider text-white p-4">
          {header}
        </td>
      ))}
    </>
  );
};

export default ColumnsHeaders;
