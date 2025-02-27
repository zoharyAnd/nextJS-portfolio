"use client";

import Image from 'next/image';
import { LANG } from '@/app/lib/types';
import { useMemo } from 'react';
import { BANNER_EN, BANNER_FR } from '../lib/constants';

interface Props {
  lng: LANG;
}
const Banner = ({ lng }: Props) => {
  const data = useMemo(() => {
    switch (lng) {
      case 'fr':
        return BANNER_FR;
      default:
        return BANNER_EN;
    }
  }, [lng]);

  return (
    <section id="about" className="relative w-screen flex items-center justify-center h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 max-w-5xl">
        <div className="relative bg-white bg-opacity-50 rounded-3xl p-8 text-stone-900" dangerouslySetInnerHTML={{ __html: data }} />
        <div className="flex flex-col items-center justify-center w-full h-full">
          <div className="w-52 h-52 rounded-full overflow-hidden relative z-0">
            <Image src="/profile_late.jpeg" alt="profile" width={300} height={300} objectFit="cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;