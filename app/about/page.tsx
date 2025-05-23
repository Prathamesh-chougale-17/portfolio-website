import { Metadata } from "next";
import en from "@/data/en";
import Profile from "@/components/about/profile";
import Timeline from "@/components/about/timeline";
import Expertise from "@/components/about/expertise";
import Philosophy from "@/components/about/philosophy";

export const metadata: Metadata = {
  title: `About | ${en.siteConfig?.name}`,
  description: "Professional background, expertise, and leadership philosophy.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {en.aboutContent?.profile && (
        <Profile {...en.aboutContent.profile} name={en.siteConfig?.name} />
      )}
      {en.aboutContent?.experience && (
        <Timeline {...en.aboutContent.experience} />
      )}
      {en.aboutContent?.expertiseSection && (
        <Expertise {...en.aboutContent.expertiseSection} />
      )}
      {en.aboutContent?.philosophy && (
        <Philosophy {...en.aboutContent.philosophy} />
      )}
    </div>
  );
}
