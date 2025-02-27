"use client";

import { useState } from 'react';
import Banner from '@/app/ui/Banner'
import Navbar from '@/app/ui/Navbar'
import Skills from '@/app/ui/Skills'
import Timeline from '@/app/ui/Timeline'
import { LANG } from '@/app/lib/types';

export default function Home() {
  const [lng, setLng] = useState<LANG>('en');

  return (
    <>
      <Navbar lng={lng} setLng={setLng} />
      <main className="min-h-screen">
        <Banner lng={lng} />
        <Skills lng={lng} />
        <Timeline lng={lng} />
      </main>
    </>
  )
}
