import { Metadata } from "next";
import { siteConfig } from "@/data/en";
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
            {/* <div className="pt-28 pb-10 bg-muted">
                <div className="container">
                    <h1 className="text-4xl md:text-5xl font-bold">Achievements</h1>
                    <p className="text-xl text-muted-foreground mt-4 max-w-2xl">
                        Recognition, impact metrics, and major contributions throughout my career.
                    </p>
                </div>
            </div> */}

            <Metrics />
            <AwardsTimeline />
            <Contributions />
            <MediaMentions />
        </div>
    );
}