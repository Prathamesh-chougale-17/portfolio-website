import { Metadata } from "next";
import en, { siteConfig } from "@/data/en";
import Profile from "@/components/about/profile";
import Timeline from "@/components/about/timeline";
import Expertise from "@/components/about/expertise";
import Philosophy from "@/components/about/philosophy";

export const metadata: Metadata = {
  title: `About | ${siteConfig.name}`,
  description: "Professional background, expertise, and leadership philosophy.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <Profile />
      <Timeline {...en.aboutContent?.experience} />
      <Expertise expertise={en.aboutContent?.expertise} />
      <Philosophy philosophy={en.aboutContent?.philosophy} />
    </div>
  );
}
