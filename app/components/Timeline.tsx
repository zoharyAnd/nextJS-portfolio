"use client";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { useInView } from "react-intersection-observer";
import 'react-vertical-timeline-component/style.min.css';
import Image from 'next/image';

interface Work {
  job: string;
  date: string;
  place: string;
  skills?: string[];
  logo?: string;
}

const Timeline = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Ensures it triggers only once
  });

  const timelineEn: Work[] = [
    {
      job: 'Web Application developer',
      date: 'June 2022 - Current',
      place: 'Exponent.ch - Switzerland - Freelance',
      skills: ['NextJs', 'Typescript', 'Python', 'GraphQL', 'ERPNext', 'Frappe', 'Docker', 'Playwright'],
      logo: 'exponent.svg'
    },
    {
      job: 'Consultant, Web Developer',
      date: 'December 2020 - Current',
      place: 'Maasil Inc - Antananarivo, Madagascar',
      skills: ['NestJS', "ReactJS", 'NodeJS', 'Typescript'],
      logo: "maasil.jpg"
    },
    {
      job: 'ReactJs & AngularJS Developer',
      date: 'October 2021 - July 2023',
      place: 'Astek - Antananarivo, Madagascar',
      logo: 'astek_madagascar.jpeg'
    },
    {
      job: 'ReactJs & NodeJs Developer - Remote Freelancer',
      date: 'May 2021 - July 2021',
      place: 'ESA - Antananarivo, Madagascar',
      skills: ['ReactJS', 'NodeJs', 'Express'],
      logo: 'esa.jpeg'
    },
    {
      job: 'NextJs Developer - Remote',
      date: 'April 2021 - December 2021',
      place: 'Opcadia - Lyon, France',
      logo: 'optedif.jpg'
    },
    {
      job: 'VueJs Developer - Part time',
      date: 'November 2020',
      place: 'Inforce Madagascar, Antananarivo',
    },
    {
      job: 'Frontend Developer - Remote',
      date: 'July 2020 - November 2020',
      place: 'Esokia Web Agency, Mauritius',
      logo: 'esokia.jpeg'
    },
    {
      job: 'ReactJs Developer - Remote',
      date: 'May 2020 - September 2020',
      place: 'Datadict Ltd, Paris, France',
      logo: 'datadict.jpeg'
    },
    {
      job: 'Web Developer and Designer - Remote',
      date: 'Avril 2020 - September 2020',
      place: 'Sedeco Ltd, Mauritius',
      logo: 'sedeco.jpeg'
    },
    {
      job: 'Front-end Developer - Internship',
      date: 'December 2018 - August 2019',
      place: 'Esokia Web Agency, Mauritius',
      logo: 'esokia.jpeg'
    },
  ];

  return (
    <section id="work" className="relative py-20 px-8 md:px-20 md:py-24" style={{ backgroundColor: '#f7f7f7bf' }}>
      <h2 className="text-center text-xl md:text-2xl font-medium mb-20">Work Timeline</h2>

      <div className="relative" ref={ref}>
        <VerticalTimeline animate={inView}>
          {timelineEn.map((timelineElement: Work) => (
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
              <p className="!font-normal text-sm text-slate-400">{timelineElement.date}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>

    </section>
  );
};

export default Timeline;