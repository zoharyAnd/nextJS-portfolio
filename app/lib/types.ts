export type LANG = 'fr' | 'en';

export type MenuItem = {
  text: string;
  link: string;
};

export interface Work {
  job: string;
  date: string;
  place: string;
  skills?: string[];
  logo?: string;
}

export interface Skills {
  name: string;
  percent: number;
  img: string;
}