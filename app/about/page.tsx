import { Metadata } from "next";
import { siteConfig } from "@/data/en";
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
            {/* 
<div className="relative pt-28 pb-10 bg-muted dark:bg-gray-900 overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-5 dark:opacity-10">
                    <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-primary/30 to-transparent rounded-bl-full"></div>
                    <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-primary/20 to-transparent rounded-tr-full"></div>
                </div>

                <div className="container relative z-10">
                    <div className="inline-block px-4 py-1 bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary/90 rounded-full text-sm font-medium mb-3">
                        My Journey
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground dark:text-white">About</h1>
                    <p className="text-xl text-muted-foreground dark:text-gray-300 mt-4 max-w-2xl">
                        Professional background, expertise, and leadership philosophy.
                    </p>
                </div>
            </div>
*/}
            <Profile />
            <Timeline />
            <Expertise />
            <Philosophy />
        </div>
    );
}