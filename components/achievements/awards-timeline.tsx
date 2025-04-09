"use client";

import React, { useEffect, useRef } from "react";
import { Award } from "lucide-react";
import { achievementsContent } from "@/data/en";
import { cn } from "@/lib/utils";

export default function AwardsTimeline() {
    const timelineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const items = entry.target.querySelectorAll(".award-item");
                        items.forEach((item, index) => {
                            setTimeout(() => {
                                item.classList.add("animate-fade-up");
                                item.classList.remove("opacity-0");
                            }, index * 200);
                        });
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

        if (timelineRef.current) {
            observer.observe(timelineRef.current);
        }

        return () => {
            if (timelineRef.current) {
                observer.unobserve(timelineRef.current);
            }
        };
    }, []);

    return (
        <section className="section-padding bg-background px-4">
            <div className="text-center mb-16">
                <div className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-2">
                    Recognition
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Awards & Honors</h2>
                <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
                    Professional recognition received throughout my career
                </p>
            </div>

            <div
                ref={timelineRef}
                className="relative max-w-4xl mx-auto"
            >
                {/* Timeline line */}
                <div className="absolute left-12 md:left-1/2 top-0 bottom-0 w-1 bg-border"></div>

                {achievementsContent.awards.map((award, index) => (
                    <div
                        key={index}
                        className={cn(
                            "award-item opacity-0 transition-all duration-500 relative mb-12 md:mb-20",
                            "flex flex-col md:flex-row md:even:flex-row-reverse"
                        )}
                    >
                        {/* Timeline dot */}
                        <div className="absolute left-12 md:left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-background border-4 border-primary flex items-center justify-center z-10">
                            <Award className="w-5 h-5 text-primary" />
                        </div>

                        {/* Year */}
                        <div
                            className={cn(
                                "absolute left-0 top-0 w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold",
                                "md:static md:bg-transparent md:w-auto md:h-auto",
                                index % 2 === 0
                                    ? "md:text-right md:pr-12 md:w-1/2"
                                    : "md:text-left md:pl-12 md:w-1/2"
                            )}
                        >
                            {award.year}
                        </div>

                        {/* Content */}
                        <div
                            className={cn(
                                "pl-24 md:pl-0 pt-0 md:pt-0",
                                "md:w-1/2",
                                index % 2 === 0
                                    ? "md:pl-12 md:text-left"
                                    : "md:pr-12 md:text-right"
                            )}
                        >
                            <div className="bg-card shadow-sm p-6 rounded-lg border border-border hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-semibold text-foreground">{award.title}</h3>
                                <p className="text-primary text-sm mt-1">{award.organization}</p>
                                <p className="mt-3 text-muted-foreground">{award.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}