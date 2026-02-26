import { ReactNode } from "react";
import { notFound } from "next/navigation";
import Navbar from "@/app/ui/Navbar";
import { isSupportedLanguage, SUPPORTED_LANGUAGES } from "@/app/lib/i18n";

interface LayoutProps {
  children: ReactNode;
  params: {
    lng: string;
  };
}

export function generateStaticParams() {
  return SUPPORTED_LANGUAGES.map((lng) => ({ lng }));
}

export default function LocaleLayout({ children, params }: LayoutProps) {
  if (!isSupportedLanguage(params.lng)) {
    notFound();
  }

  return (
    <>
      <Navbar lng={params.lng} />
      <main className="min-h-screen">{children}</main>
    </>
  );
}
