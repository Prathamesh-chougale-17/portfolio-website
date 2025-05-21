import { Metadata } from "next";
import Hero from "@/components/home/hero";
import Highlights from "@/components/home/highlights";
import QuoteTicker from "@/components/home/quote-ticker";
import { en, siteConfig } from "@/data/en";

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.title}`,
  description: siteConfig.description,
};

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero {...en.home?.heroContent} />
      <Highlights {...en.home?.highlightsContent} />
      <QuoteTicker quoteContent={en.home?.quoteContent} />
    </div>
  );
}
