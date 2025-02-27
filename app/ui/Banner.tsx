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
    <section id="about" className="relative w-screen flex items-center justify-center min-h-screen pt-40 lg:pt-0 pb-20 lg:pb-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 max-w-5xl gap-6 lg:gap-0">
        <div className="flex flex-col items-center justify-center w-full h-full lg:order-2">
          <div className="w-52 h-52 rounded-full overflow-hidden relative z-0">
            <Image src="/profile_late.jpeg" alt="profile" width={300} height={300} objectFit="cover" />
          </div>
        </div>
        <div className="relative bg-white bg-opacity-50 rounded-3xl p-8 text-stone-900 lg:order-1" dangerouslySetInnerHTML={{ __html: data }} />

      </div>
    </section>
  );
};

export default Banner;