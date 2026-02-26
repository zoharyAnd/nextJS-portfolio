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

export interface BlogArticleSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface BlogArticleContent {
  title: string;
  summary: string;
  date: string;
  readTime: string;
  tags: string[];
  intro: string;
  sections: BlogArticleSection[];
  conclusion: string;
}

export interface BlogArticle {
  slug: string;
  en: BlogArticleContent;
  fr: BlogArticleContent;
}
