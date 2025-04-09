"use client";

import React, { useEffect, useRef } from "react";
import { experienceContent } from "@/data/en";
import { cn } from "@/lib/utils";

export default function Timeline() {
    const timelineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate-slide-in");
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
        <section className="section-padding bg-muted dark:bg-gray-900 px-4">
            <div className="text-center mb-16">
                <div className="inline-block px-4 py-1 bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary/90 rounded-full text-sm font-medium mb-2">
                    Experience
                </div>
                <h2 className="text-3xl md:text-4xl font-bold dark:text-white">Professional Journey</h2>
                <p className="text-lg text-muted-foreground dark:text-gray-300 mt-4 max-w-2xl mx-auto">
                    A timeline of key positions and achievements throughout my career
                </p>
            </div>

            <div ref={timelineRef} className="relative max-w-3xl mx-auto">
                {/* Timeline line */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-border dark:bg-gray-700"></div>

                {experienceContent.map((item, index) => (
                    <div
                        key={index}
                        className={cn(
                            "timeline-item opacity-0 relative mb-12 md:mb-20 transition-all duration-500",
                            "flex flex-col md:flex-row md:even:flex-row-reverse"
                        )}
                        style={{ transitionDelay: `${index * 200}ms` }}
                    >
                        {/* Timeline dot */}
                        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 rounded-full border-4 border-background dark:border-gray-900 bg-primary"></div>

                        {/* Content */}
                        <div className={cn(
                            "pl-10 md:pl-0 pt-1 md:pt-0",
                            "md:w-1/2",
                            index % 2 === 0
                                ? "md:pr-12 md:text-right"
                                : "md:pl-12 md:text-left"
                        )}>
                            <div className="bg-card dark:bg-gray-800 shadow-sm dark:shadow-gray-900/10 p-6 rounded-lg">
                                <span className="text-sm font-medium text-primary/80 dark:text-primary/70 mb-1 block">
                                    {item.period}
                                </span>
                                <h3 className="text-xl font-semibold dark:text-white">{item.title}</h3>
                                <p className="text-muted-foreground dark:text-gray-400 text-sm mt-1">{item.company}</p>
                                <p className="mt-3 dark:text-gray-300">{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}