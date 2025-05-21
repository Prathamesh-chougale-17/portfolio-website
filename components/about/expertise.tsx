"use client";

import React, { useState } from "react";
import {
  LineChart,
  ShieldAlert,
  Users,
  Laptop,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ExpertiseItem } from "@/types";

// Map of expertise areas to icons
const iconMap = {
  "Financial Strategy": <LineChart className="w-6 h-6" />,
  "Risk Management": <ShieldAlert className="w-6 h-6" />,
  Leadership: <Users className="w-6 h-6" />,
  "Digital Transformation": <Laptop className="w-6 h-6" />,
};

export default function Expertise({
  expertise,
}: {
  expertise?: ExpertiseItem[];
}) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="section-padding bg-background dark:bg-gray-950 px-4">
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-1 bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary/90 rounded-full text-sm font-medium mb-2">
          Expertise
        </div>
        <h2 className="text-3xl md:text-4xl font-bold dark:text-white">
          Areas of Specialization
        </h2>
        <p className="text-lg text-muted-foreground dark:text-gray-300 mt-4 max-w-2xl mx-auto">
          Core competencies and specialized skills developed throughout my
          career
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Tab Navigation */}
        <div className="lg:col-span-1">
          <div className="space-y-2 lg:sticky lg:top-24">
            {expertise?.map((area, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={cn(
                  "w-full text-left p-4 rounded-lg flex items-center justify-between group transition-all",
                  activeTab === index
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-card dark:bg-gray-800 hover:bg-muted dark:hover:bg-gray-700"
                )}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={cn(
                      "p-2 rounded-md",
                      activeTab === index
                        ? "bg-primary-foreground/20 text-primary-foreground"
                        : "bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary/90"
                    )}
                  >
                    {iconMap[area.area as keyof typeof iconMap]}
                  </div>
                  <span className="font-medium dark:text-gray-100">
                    {area.area}
                  </span>
                </div>
                <ChevronRight
                  className={cn(
                    "w-5 h-5 transition-transform",
                    activeTab === index
                      ? "transform rotate-90"
                      : "text-muted-foreground dark:text-gray-400 group-hover:translate-x-1"
                  )}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="lg:col-span-4 bg-card dark:bg-gray-800 rounded-xl shadow-sm dark:shadow-gray-900/10 overflow-hidden">
          {expertise?.map((area, index) => (
            <div
              key={index}
              className={cn(
                "transition-all p-8 h-full",
                activeTab === index
                  ? "block opacity-100 animate-fade-up"
                  : "hidden opacity-0"
              )}
            >
              <h3 className="text-2xl font-semibold mb-6 dark:text-white">
                {area.area}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {area?.skills?.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-start gap-3 p-4 rounded-lg border dark:border-gray-700 bg-card dark:bg-gray-800/50 hover:bg-muted dark:hover:bg-gray-700 transition-colors"
                  >
                    <div className="bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary/90 p-2 rounded-md">
                      <ChevronRight className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium dark:text-white">{skill}</h4>
                      <p className="text-sm text-muted-foreground dark:text-gray-400 mt-1">
                        {getSkillDescription(skill)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Helper function to generate descriptions for skills
function getSkillDescription(skill: string): string {
  const descriptions: Record<string, string> = {
    "Long-term Planning":
      "Developing sustainable financial roadmaps that align with organizational vision",
    "Growth Modeling":
      "Creating sophisticated models to forecast and drive strategic expansion",
    "Market Analysis":
      "Evaluating market trends and competitive landscapes to identify opportunities",
    "Capital Allocation":
      "Optimizing distribution of resources to maximize return on investment",
    "Compliance Systems":
      "Designing robust frameworks to ensure regulatory adherence",
    "Regulatory Navigation":
      "Guiding organizations through complex and evolving financial regulations",
    "Crisis Mitigation":
      "Developing strategies to minimize impact during market volatility",
    "Scenario Planning":
      "Preparing for multiple futures to ensure organizational resilience",
    "Team Development":
      "Building and nurturing high-performing financial teams",
    "Cross-functional Collaboration":
      "Working across departments to align financial strategy with broader goals",
    "Executive Advising":
      "Providing strategic counsel to C-suite and board members",
    "Change Management":
      "Guiding organizations through financial transformations",
    "Fintech Integration":
      "Incorporating innovative financial technologies into traditional systems",
    "Data-driven Decision Making":
      "Using analytics to inform strategic financial choices",
    "Process Automation":
      "Streamlining operations through targeted technological solutions",
    "AI Implementation":
      "Leveraging artificial intelligence to enhance financial insights",
  };

  return (
    descriptions[skill] ||
    "Specialized expertise in this critical financial domain"
  );
}
