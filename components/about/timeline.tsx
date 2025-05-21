"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ExperienceSection } from "@/types";

export default function Timeline({
  title,
  description,
  experienceContent,
}: ExperienceSection) {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            entry.target.classList.remove("opacity-0");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    const timelineItems = document.querySelectorAll(".timeline-item");
    timelineItems.forEach((item) => {
      observer.observe(item);
    });

    return () => {
      timelineItems.forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section className="section-padding bg-muted dark:bg-gray-900 px-4 py-12 md:py-16">
      <div className="text-center mb-10 md:mb-12">
        <div className="inline-block px-4 py-1 bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary/90 rounded-full text-sm font-medium mb-2">
          {title}
        </div>
        {/* <h2 className="text-3xl md:text-4xl font-bold dark:text-white">
          {des}
        </h2> */}
        <p className="text-lg text-muted-foreground dark:text-gray-300 mt-4 max-w-2xl mx-auto">
          {description}
        </p>
      </div>

      <div ref={timelineRef} className="max-w-6xl mx-auto">
        {/* Timeline navigation dots */}
        <div className="hidden md:flex justify-between items-center mb-8 relative">
          <div className="absolute left-0 right-0 h-1 bg-border dark:bg-gray-700"></div>
          {experienceContent?.map((_, index) => (
            <div
              key={`dot-${index}`}
              className={cn(
                "w-5 h-5 rounded-full border-3 border-background dark:border-gray-900 z-10 cursor-pointer transition-all duration-300",
                activeCard === index || activeCard === null
                  ? "bg-primary scale-110"
                  : "bg-primary/50 hover:bg-primary/80"
              )}
              onClick={() => setActiveCard(index)}
            />
          ))}
        </div>

        {/* Desktop horizontal timeline */}
        <div className="hidden md:grid grid-cols-4 gap-4">
          {experienceContent?.map((item, index) => (
            <div
              key={`desktop-${index}`}
              className={cn(
                "timeline-item opacity-0 transition-all duration-500",
                "bg-card dark:bg-gray-800 shadow-sm hover:shadow-md dark:shadow-gray-900/10 p-5 rounded-lg",
                "transform hover:-translate-y-1",
                activeCard === index || activeCard === null
                  ? "opacity-100"
                  : "opacity-60"
              )}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <span className="text-sm font-medium text-primary/80 dark:text-primary/70 mb-1 block">
                {item.period}
              </span>
              <h3 className="text-lg font-semibold dark:text-white">
                {item.title}
              </h3>
              <p className="text-muted-foreground dark:text-gray-400 text-sm">
                {item.company}
              </p>
              <p className="mt-2 text-sm dark:text-gray-300 line-clamp-4">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile vertical timeline (preserves original design for mobile) */}
        <div className="md:hidden relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-border dark:bg-gray-700"></div>

          {experienceContent?.map((item, index) => (
            <div
              key={`mobile-${index}`}
              className="timeline-item opacity-0 relative mb-10 transition-all duration-500 pl-10"
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 transform -translate-x-1/2 w-5 h-5 rounded-full border-3 border-background dark:border-gray-900 bg-primary"></div>

              {/* Content */}
              <div className="bg-card dark:bg-gray-800 shadow-sm dark:shadow-gray-900/10 p-5 rounded-lg">
                <span className="text-sm font-medium text-primary/80 dark:text-primary/70 mb-1 block">
                  {item.period}
                </span>
                <h3 className="text-xl font-semibold dark:text-white">
                  {item.title}
                </h3>
                <p className="text-muted-foreground dark:text-gray-400 text-sm mt-1">
                  {item.company}
                </p>
                <p className="mt-3 dark:text-gray-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
