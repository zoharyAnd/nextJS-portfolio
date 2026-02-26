import Link from "next/link";
import { BLOG_ARTICLES, getLocalizedBlogArticle } from "@/app/lib/constants";
import { isSupportedLanguage } from "@/app/lib/i18n";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    lng: string;
  };
}

export default function BlogPage({ params }: PageProps) {
  if (!isSupportedLanguage(params.lng)) {
    notFound();
  }

  const lng = params.lng;
  const isFrench = lng === "fr";

  return (
    <main className="min-h-screen max-w-6xl mx-auto px-6 pt-28 pb-16">
      <Link
        href={`/${lng}`}
        className="inline-flex items-center text-sm font-medium text-slate-600 hover:text-slate-900 mb-4"
      >
        {isFrench ? "← Retour a l'accueil" : "← Back to home"}
      </Link>

      <div className="glass p-8 md:p-10 mb-8">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-500 mb-3">Blog</p>
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900">
          {isFrench ? "Articles interessants" : "Interesting articles"}
        </h1>
        <p className="text-slate-600 max-w-3xl">
          {isFrench
            ? "Notes sur le developpement web et mobile, la livraison produit et les pratiques d'ingenierie que j'applique sur des projets reels."
            : "Notes about web and mobile development, product delivery, and engineering practices I use in real projects."}
        </p>
      </div>

      <section className="grid gap-6 md:grid-cols-2">
        {BLOG_ARTICLES.map((article) => {
          const localizedArticle = getLocalizedBlogArticle(article, lng);

          return (
            <Link href={`/${lng}/blog/${article.slug}`} key={article.slug}>
              <article className="glass p-6 transition-transform duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-3 text-xs text-slate-500 mb-4">
                  <span>{localizedArticle.date}</span>
                  <span className="h-1 w-1 rounded-full bg-slate-400" />
                  <span>{localizedArticle.readTime}</span>
                </div>

                <h2 className="text-xl font-semibold text-slate-800 mb-3">{localizedArticle.title}</h2>
                <p className="text-slate-600 mb-5">{localizedArticle.summary}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {localizedArticle.tags.map((tag) => (
                    <span
                      key={`${localizedArticle.title}-${tag}`}
                      className="inline-flex items-center bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs border border-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="inline-flex items-center text-sm font-medium text-teal-700 hover:text-teal-900">
                  {isFrench ? "Lire l'article" : "Read article"}
                </p>
              </article>
            </Link>
          );
        })}
      </section>
    </main>
  );
}
