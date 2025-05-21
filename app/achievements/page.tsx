import { Metadata } from "next";
import en, { siteConfig } from "@/data/en";
import AwardsTimeline from "@/components/achievements/awards-timeline";
import Metrics from "@/components/achievements/metrics";
import Contributions from "@/components/achievements/contributions";
import MediaMentions from "@/components/achievements/media-mentions";

export const metadata: Metadata = {
  title: `Achievements | ${siteConfig.name}`,
  description: "Awards, key metrics, major contributions, and media mentions.",
};

export default function AchievementsPage() {
  return (
    <div className="flex flex-col">
      <Metrics metrics={en.achievementsContent?.metrics} />
      <AwardsTimeline awards={en.achievementsContent?.awards} />
      <Contributions contributions={en.achievementsContent?.contributions} />
      <MediaMentions mediaMentions={en.achievementsContent?.mediaMentions} />
    </div>
  );
}
