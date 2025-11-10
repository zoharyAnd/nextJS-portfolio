"use client";

import { LANG, Work } from '@/app/lib/types';
import { Fragment, useMemo } from 'react';
import { TIMELINE_EN, TIMELINE_FR } from '../lib/constants';

interface Props {
  lng: LANG
}

const Timeline = ({ lng }: Props) => {
  const timelineData: Work[] = useMemo(() => {
    switch (lng) {
      case 'fr':
        return TIMELINE_FR;
      default:
        return TIMELINE_EN;
    }
  }, [lng]);

  const timelineChunks = useMemo(() => {
    const size = 2;

    return Array.from({ length: Math.ceil(timelineData.length / size) }, (_, i) =>
      timelineData.slice(i * size, i * size + size)
    );
  }, [timelineData]);

  return (
    <section id="work" className="relative py-14 px-6 md:px-10">
      <h2 className="text-center text-3xl md:text-4xl font-extrabold mb-8">
        <span className="bg-gradient-to-r from-teal-500 via-indigo-500 to-fuchsia-500 bg-clip-text text-transparent">
          {lng === 'fr' ? 'Parcours Professionnel' : 'Experience'}
        </span>
      </h2>

      <div className="design-section">
        <div className="timeline">
          {timelineChunks.map((chunk: Work[], iChunk: number) => (
            <Fragment key={`chunk${iChunk}`}>
              <div className="timeline-empty"></div>
              <div className="timeline-middle">
                <div className="timeline-circle"></div>
              </div>
              {chunk.map((timelineElement: Work) => (
                <div key={timelineElement.date} className="timeline-component timeline-content">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="!font-semibold !m-0 text-slate-800">
                        {timelineElement.job}
                      </p>
                      <p className="!m-0 !font-normal text-slate-600">{timelineElement.place}</p>
                    </div>
                    <span className="inline-flex items-center text-xs rounded-full bg-slate-900/80 text-white px-2 py-1 shadow-sm whitespace-nowrap">{timelineElement.date}</span>
                  </div>
                  <div className="w-full flex flex-wrap mt-4">
                    {timelineElement.skills?.map((skill: string, iSkill: number) => (
                      <span
                        key={`skill${iSkill}`}
                        className="bg-slate-100 border border-slate-200 py-1.5 px-2.5 rounded-xl mr-2 mb-2 text-xs text-slate-600"
                      >{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
              <div className="timeline-middle">
                <div className="timeline-circle"></div>
              </div>
              <div className="timeline-empty">
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
