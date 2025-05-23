import { Metadata } from "next";
import en from "@/data/en";
import AwardsTimeline from "@/components/achievements/awards-timeline";
import Metrics from "@/components/achievements/metrics";
import Contributions from "@/components/achievements/contributions";
import MediaMentions from "@/components/achievements/media-mentions";

export const metadata: Metadata = {
  title: `Achievements | ${en.siteConfig?.name}`,
  description: "Awards, key metrics, major contributions, and media mentions.",
};

export default function AchievementsPage() {
  return (
    <div className="flex flex-col">
      {en.achievementsContent?.metricSection && (
        <Metrics {...en.achievementsContent.metricSection} />
      )}
      {en.achievementsContent?.awardSection && (
        <AwardsTimeline {...en.achievementsContent.awardSection} />
      )}
      {en.achievementsContent?.contributionSection && (
        <Contributions {...en.achievementsContent.contributionSection} />
      )}
      {en.achievementsContent?.mediaMentionSection && (
        <MediaMentions {...en.achievementsContent.mediaMentionSection} />
      )}
    </div>
  );
}
