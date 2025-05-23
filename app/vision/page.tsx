import { Metadata } from "next";
import en from "@/data/en";
import PersonalMessage from "@/components/vision/message";
import IndustryOutlook from "@/components/vision/outlook";
import VisionStatements from "@/components/vision/statements";
// import MissionSection from "@/components/vision/mission";

export const metadata: Metadata = {
  title: `Vision | ${en.siteConfig?.name}`,
  description:
    "My perspective on the future of finance and leadership principles.",
};

export default function VisionPage() {
  return (
    <div className="flex flex-col">
      {en.visionContent?.message && (
        <PersonalMessage {...en.visionContent.message} />
      )}
      {en.visionContent?.outlookSection && (
        <IndustryOutlook {...en.visionContent.outlookSection} />
      )}
      {en.visionContent?.statementsSection && (
        <VisionStatements {...en.visionContent.statementsSection} />
      )}
      {/* {en.visionContent && <MissionSection {...en.visionContent.mission} />} */}
    </div>
  );
}
