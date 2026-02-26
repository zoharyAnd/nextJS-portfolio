import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_ARTICLES, getLocalizedBlogArticle } from "@/app/lib/constants";
import { isSupportedLanguage, SUPPORTED_LANGUAGES } from "@/app/lib/i18n";

interface PageProps {
  params: {
    lng: string;
    slug: string;
  };
}

const getArticleBySlug = (slug: string) => {
  return BLOG_ARTICLES.find((article) => article.slug === slug);
};

export function generateStaticParams() {
  return SUPPORTED_LANGUAGES.flatMap((lng) =>
    BLOG_ARTICLES.map((article) => ({ lng, slug: article.slug }))
  );
}

export function generateMetadata({ params }: PageProps): Metadata {
  if (!isSupportedLanguage(params.lng)) {
    return {
      title: "Article Not Found | Zohary Andrianome",
      description: "The requested blog article does not exist."
    };
  }

  const article = getArticleBySlug(params.slug);

  if (!article) {
    return {
      title: "Article Not Found | Zohary Andrianome",
      description: "The requested blog article does not exist."
    };
  }

  const lng = params.lng;
  const localizedArticle = getLocalizedBlogArticle(article, lng);

  return {
    title: `${localizedArticle.title} | Zohary Andrianome`,
    description: localizedArticle.summary
  };
}

export default function BlogArticlePage({ params }: PageProps) {
  if (!isSupportedLanguage(params.lng)) {
    notFound();
  }

  const lng = params.lng;
  const article = getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  const localizedArticle = getLocalizedBlogArticle(article, lng);

  return (
    <main className="min-h-screen max-w-4xl mx-auto px-6 pt-24 pb-16">
      <Link
        href={`/${lng}/blog`}
        className="inline-flex items-center text-sm font-medium text-slate-600 hover:text-slate-900 mb-6"
      >
        {lng === "fr" ? "← Retour au blog" : "← Back to blog"}
      </Link>

      <article className="glass p-8 md:p-10">
        <header className="mb-10">
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mb-4">
            <span>{localizedArticle.date}</span>
            <span className="h-1 w-1 rounded-full bg-slate-400" />
            <span>{localizedArticle.readTime}</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-slate-900 mb-5">
            {localizedArticle.title}
          </h1>

          <p className="text-lg leading-8 text-slate-700">{localizedArticle.intro}</p>

          <div className="flex flex-wrap gap-2 mt-6">
            {localizedArticle.tags.map((tag) => (
              <span
                key={`${article.slug}-${tag}`}
                className="inline-flex items-center bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs border border-slate-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="space-y-10">
          {localizedArticle.sections.map((section) => (
            <section key={`${article.slug}-${section.heading}`}>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                {section.heading}
              </h2>

              <div className="space-y-4">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-slate-700 leading-8">
                    {paragraph}
                  </p>
                ))}
              </div>

              {section.bullets && (
                <ul className="mt-5 grid gap-2">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="text-slate-700 leading-7 flex items-start">
                      <span className="text-teal-600 mr-2">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        <footer className="mt-12 p-6 rounded-2xl border border-white/60 bg-gray-100">
          <h3 className="text-xl font-semibold text-slate-900 mb-3">
            {lng === "fr" ? "Note finale" : "Final Note"}
          </h3>
          <p className="text-slate-700 leading-8">{localizedArticle.conclusion}</p>
        </footer>
      </article>
    </main>
  );
}
