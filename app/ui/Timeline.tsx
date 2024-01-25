"use client";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { useInView } from "react-intersection-observer";
import 'react-vertical-timeline-component/style.min.css';
import Image from 'next/image';
import { LANG, Work } from '@/app/lib/types';
import { useMemo } from 'react';
import { TIMELINE_EN, TIMELINE_FR } from '../lib/constants';

interface Props {
  lng: LANG
}

const Timeline = ({ lng }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Ensures it triggers only once
  });

  const timelineData: Work[] = useMemo(() => {
    switch (lng) {
      case 'fr':
        return TIMELINE_FR;
      default:
        return TIMELINE_EN;
    }
  }, [lng]);

  return (
    <section id="work" className="relative py-20 px-8 md:px-20 md:py-24" style={{ backgroundColor: '#f7f7f7bf' }}>
      <h2 className="text-center text-xl md:text-2xl font-medium mb-20 text-slate-700">
        {lng === 'fr' ? 'Parcours Professionnel' : 'Work Timeline'}
      </h2>

      <div className="relative" ref={ref}>
        <VerticalTimeline animate={inView}>
          {timelineData.map((timelineElement: Work) => (
            <VerticalTimelineElement
              key={timelineElement.date}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: 'rgb(255, 255, 255)',
                color: 'rgb(0, 0, 0)',
                boxShadow: '0px 2px 16px #d7d7d7'
              }}
              contentArrowStyle={{
                borderRight: '7px solid  rgb(255, 255, 255)',
              }}
              icon={timelineElement.logo ? <Image src={`/timeline/${timelineElement.logo}`} alt={timelineElement.place} fill /> : <></>}
              // date={timelineElement.date}
              iconStyle={{ background: 'rgb(247, 247, 247)', color: '#fff' }}
              visible
            >
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
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>

    </section>
  );
};

export default Timeline;