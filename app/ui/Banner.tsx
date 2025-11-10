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
    <section id="about" className="relative flex items-center justify-center min-h-[80vh] md:min-h-[90vh] pt-28 pb-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 w-full max-w-6xl px-6">
        <div className="order-2 lg:order-1">
          <div className="glass p-8">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
              <span className="bg-gradient-to-r from-teal-500 via-indigo-500 to-fuchsia-500 bg-clip-text text-transparent">Zohary Andrianome</span>
            </h1>
            <div className="prose prose-slate max-w-none leading-relaxed" dangerouslySetInnerHTML={{ __html: data }} />

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                className="inline-flex items-center justify-center text-white bg-teal-600 hover:bg-teal-700 transition-colors font-medium rounded-full text-sm px-5 py-2.5 shadow-md"
                title="resume"
                target="_blank"
                href={lng === 'fr'
                  ? 'https://portfolio-zohary.s3.eu-west-3.amazonaws.com/ZoharyAndrianome-Resume-Fr.pdf'
                  : 'https://portfolio-zohary.s3.eu-west-3.amazonaws.com/ZoharyAndrianome-Resume-En.pdf'}
              >
                {lng === 'fr' ? 'Télécharger le CV' : 'Download Resume'}
              </a>
              <a
                href="#work"
                className="inline-flex items-center justify-center rounded-full border border-slate-300/70 bg-white/70 backdrop-blur px-5 py-2.5 text-sm text-slate-700 hover:bg-white transition shadow-sm"
              >
                {lng === 'fr' ? 'Parcours' : 'Experience'}
              </a>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 flex items-center justify-center">
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-teal-400 to-fuchsia-500 blur opacity-30"></div>
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden ring-2 ring-white/60 shadow-xl">
              <Image src="/profile_late.jpeg" alt="profile" width={512} height={512} style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Banner;
