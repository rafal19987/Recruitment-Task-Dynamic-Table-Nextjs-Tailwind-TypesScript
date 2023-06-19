import Image from 'next/image';
import noDataIcon from '@/assets/noData.svg';

const NoData = () => {
  return <Image src={noDataIcon} alt="No Data" width={20} height={20} />;
};

export default NoData;
