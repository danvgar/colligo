import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { roboto } from '@/components/fonts';

export default function ColligoLogo() {
  return (
    <div
      className={`${roboto.className} flex flex-row items-center leading-none text-white`}
    >
      <ArrowTopRightOnSquareIcon className="h-12 w-12" />
      <p className="text-[42px]">colligo</p>
    </div>
  );
}

