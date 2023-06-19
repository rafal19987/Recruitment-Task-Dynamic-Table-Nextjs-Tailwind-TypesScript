import NoData from '@/components/noData/NoData';

const DetailHeader = ({
  detail,
  detailField,
}: {
  detail: string | number | null;
  detailField: string;
}) => {
  return (
    <h4 className="flex gap-2 md:gap-0 flex-col md:flex-row">
      <span className="w-2/12 h-fit text-left md:pl-2 md:border-l border-[var(--green)] text-white">
        {detailField}:
      </span>
      <span className="w-3/4 text-[#A2A2A2]  md:pl-6">
        {detail ? detail : <NoData />}
      </span>
    </h4>
  );
};

export default DetailHeader;
