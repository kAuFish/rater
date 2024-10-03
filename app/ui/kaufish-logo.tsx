import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';

export default function GarchompLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <Image
       src="/gchomp_240x240.png"
       width={240}
       height={240}
       className="h-12 w-12"
       alt="Screenshots of the dashboard project showing desktop version" />
      <p className="text-[40px]">kAuFish Online!
      </p>
    </div>
  );
}
