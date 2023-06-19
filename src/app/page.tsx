import { TableContextProvider } from '@/context/TableContext/TableContext';
import Table from '@/components/table/Table';

export default function Home() {
  return (
    <main className="flex flex-col w-full h-full items-center">
      <div className="flex flex-col items-center justify-center w-full h-fit ">
        <h1 className="text-2xl font-bold">Books are awasome!</h1>
        <h2 className="text-xl text-center">
          Let`s find out something about them
        </h2>
      </div>
      <div className="flex grow justify-center w-full h-full mt-4">
        <TableContextProvider>
          <Table />
        </TableContextProvider>
      </div>
    </main>
  );
}
