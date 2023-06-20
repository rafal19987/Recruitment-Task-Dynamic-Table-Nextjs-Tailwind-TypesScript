import BreadCrumb from './breadcrumb/BreadCrumb';

const TableCaption = () => {
  return (
    <caption className="sticky top-0 text-left min-h-max w-full bg-[var(--blue)]">
      <BreadCrumb />
    </caption>
  );
};

export default TableCaption;
