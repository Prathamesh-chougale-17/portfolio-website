import { Metadata } from "next";
import en, { siteConfig } from "@/data/en";
import PersonalMessage from "@/components/vision/message";
import IndustryOutlook from "@/components/vision/outlook";
import VisionStatements from "@/components/vision/statements";
// import MissionSection from "@/components/vision/mission";

export const metadata: Metadata = {
  title: `Vision | ${siteConfig.name}`,
  description:
    "My perspective on the future of finance and leadership principles.",
};

export default function VisionPage() {
  return (
    <div className="flex flex-col">
      <PersonalMessage {...en.visionContent?.message} />
      <IndustryOutlook {...en.visionContent?.outlookSection} />
      <VisionStatements {...en.visionContent?.statementsSection} />
      {/* <MissionSection {...en.visionContent?.mission} /> */}
    </div>
  );
}
