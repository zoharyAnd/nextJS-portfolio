"use client";

import Image from 'next/image';
import { LANG } from '@/app/lib/types';
import { useMemo } from 'react';

interface Props {
  lng: LANG;
}
const Banner = ({ lng }: Props) => {
  const data = useMemo(() => {
    switch (lng) {
      case 'fr':
        return `
          <p class="py-4">
            Développeuse web et mobile motivée, je suis en quête d'un parcours constructif et enrichissant. Mon objectif principal est de constamment monter en compétences et accumuler le plus d'expérience tout en produisant un travail minutieux et de bonne qualité.
          </p>
          <p>
            Je suis spécialisée dans le dévelopement UI,<br /> la construction d'APIs basées sur les Frameworks JS (NodeJS, NestJS), <br /> l'implémentation de tests (front et back) et la configuration de pipelines/CI pour s'assurer du bon fonctionnement des tests, build... et s'assurer que les meilleures pratiques sont respectées.
          </p>
        `

      default:
        return `
          <p class="py-4">
            I am a motivated web and mobile application developer, striving for a constructive journey. My objectives are to constantly nurture new skills and gather experiences, meanwhile producing meticulous and great-quality of work.
          </p>
          <p>
            My specialties are building UI interfaces,<br /> building APIs to later use them in frontend interfaces, <br /> and implementing tests and pipelines to ensure good practices are respected.
          </p>
        `;
    }
  }, [lng]);

  return (
    <section id="about" className="relative w-screen flex items-center justify-center" style={{ height: 'calc(100vh - 69px)' }}>
      <Image src="/banner-bg.png" fill alt="banner" className="hidden lg:block" />
      <Image src="/small-banner-bg.png" fill alt="banner" className="block lg:hidden" />
      <div className="flex flex-col items-center justify-center max-w-2xl text-gray-500 md:-mt-8">
        <div className="w-40 h-40 rounded-full overflow-hidden relative z-0">
          <Image src="/profile-avatar.jpeg" alt="profile" width={200} height={200} objectFit="cover" />
        </div>
        <div className="relative text-center bg-[#fcf6ef] lg:bg-transparent rounded-xl mt-8 ld:mt-0 p-8 lg:py-0" dangerouslySetInnerHTML={{ __html: data }} />
      </div>
    </section>
  );
};

export default Banner;