import { Metadata } from "next";
import { siteConfig } from "@/data/en";
import PersonalMessage from "@/components/vision/message";
import IndustryOutlook from "@/components/vision/outlook";
import VisionStatements from "@/components/vision/statements";
import MissionSection from "@/components/vision/mission";

export const metadata: Metadata = {
    title: `Vision | ${siteConfig.name}`,
    description: "My perspective on the future of finance and leadership principles.",
};

export default function VisionPage() {
    return (
        <div className="flex flex-col">
            {/* <div className="pt-28 pb-10 bg-muted">
                <div className="container">
                    <h1 className="text-4xl md:text-5xl font-bold">Vision</h1>
                    <p className="text-xl text-muted-foreground mt-4 max-w-2xl">
                        My perspective on the future of finance and guiding principles.
                    </p>
                </div>
            </div> */}

            <PersonalMessage />
            <IndustryOutlook />
            <VisionStatements />
            <MissionSection />
        </div>
    );
}