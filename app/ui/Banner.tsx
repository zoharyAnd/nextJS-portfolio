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
    <section id="about" className="relative w-screen flex items-center justify-center" style={{ height: 'calc(100vh - 69px)' }}>
      <Image src="/banner-bg.png" fill alt="banner" className="hidden lg:block" />
      <Image src="/small-banner-bg.png" fill alt="banner" className="block lg:hidden" />
      <div className="flex flex-col items-center justify-center max-w-3xl text-gray-500 md:-mt-8">
        <div className="w-40 h-40 rounded-full overflow-hidden relative z-0">
          <Image src="/profile-avatar.jpeg" alt="profile" width={200} height={200} objectFit="cover" />
        </div>
        <div className="relative text-center bg-[#fcf6ef] lg:bg-transparent rounded-xl mt-8 ld:mt-0 p-8 lg:py-0" dangerouslySetInnerHTML={{ __html: data }} />
      </div>
    </section>
  );
};

export default Banner;