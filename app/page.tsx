import { Metadata } from "next";
import Hero from "@/components/home/hero";
import Highlights from "@/components/home/highlights";
import QuoteTicker from "@/components/home/quote-ticker";
import en from "@/data/en";

export const metadata: Metadata = {
  title: `${en.siteConfig?.name} | ${en.siteConfig?.title}`,
  description: en.siteConfig?.description,
};

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {en.home?.heroContent && <Hero {...en.home.heroContent} />}
      {en.home?.highlightsContent && (
        <Highlights {...en.home.highlightsContent} />
      )}
      {en.home?.quoteContent && (
        <QuoteTicker quoteContent={en.home.quoteContent} />
      )}
    </div>
  );
}
