import Banner from "@/app/ui/Banner";
import Skills from "@/app/ui/Skills";
import Timeline from "@/app/ui/Timeline";
import { isSupportedLanguage } from "@/app/lib/i18n";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    lng: string;
  };
}

export default function HomePage({ params }: PageProps) {
  if (!isSupportedLanguage(params.lng)) {
    notFound();
  }

  return (
    <>
      <Banner lng={params.lng} />
      <Skills lng={params.lng} />
      <Timeline lng={params.lng} />
    </>
  );
}
