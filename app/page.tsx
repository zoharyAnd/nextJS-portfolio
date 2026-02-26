import { redirect } from "next/navigation";
import { DEFAULT_LANGUAGE } from "@/app/lib/i18n";

export default function Home() {
  redirect(`/${DEFAULT_LANGUAGE}`);
}
