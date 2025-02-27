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
    <section id="work" className="relative py-10 px-8 md:px-20 md:py-24">
      <h2 className="text-center text-3xl md:text-5xl font-bold text-white">
        {lng === 'fr' ? 'Parcours Professionnel' : 'Work Timeline'}
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
                  <p className="vertical-timeline-element-title !font-bold !m-0">
                    {timelineElement.job}
                  </p>
                  <p className="vertical-timeline-element-subtitle !m-0 !font-normal">{timelineElement.place}</p>
                  <div className="w-full flex flex-wrap mt-4">
                    {timelineElement.skills?.map((skill: string, iSkill: number) =>
                      <span
                        key={`skill${iSkill}`}
                        className="bg-gray-100 py-2 px-3 rounded-xl mr-2 mb-2 text-sm"
                      >{skill}</span>)
                    }
                  </div>
                  <p className="!font-normal text-sm text-slate-400">{timelineElement.date}</p>
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