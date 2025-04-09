"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { BarChart, Globe, Lightbulb, ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { highlightsContent } from "@/data/en";
import { cn } from "@/lib/utils";

// Map of icon names to components
const iconMap = {
    BarChart: BarChart,
    Globe: Globe,
    Lightbulb: Lightbulb,
};

export default function Highlights() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate-fade-up");
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

        const cards = document.querySelectorAll(".highlight-card");
        cards.forEach((card) => {
            observer.observe(card);
        });

        return () => {
            cards.forEach((card) => {
                observer.unobserve(card);
            });
        };
    }, []);

    return (
        <section ref={sectionRef} className="section-padding bg-muted dark:bg-muted/50 px-4">
            <div className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Areas of Expertise</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    With decades of experience in global finance, I bring strategic insight and practical solutions to complex financial challenges.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {highlightsContent.map((item, index) => {
                    const IconComponent = iconMap[item.icon as keyof typeof iconMap];

                    return (
                        <Card
                            key={index}
                            className={cn(
                                "highlight-card opacity-0 transition-all duration-500 shadow-md cursor-pointer hover:shadow-lg",
                                "hover:translate-y-[-5px] transition-transform",
                                "dark:shadow-slate-900/30 dark:hover:shadow-slate-900/40"
                            )}

                        >
                            <CardHeader className="pb-2">
                                <div className="w-12 h-12 flex items-center justify-center rounded-md bg-primary/10 text-primary dark:bg-primary/20 mb-4">
                                    {IconComponent && <IconComponent size={24} />}
                                </div>
                                <CardTitle className="text-xl">{item.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{item.description}</p>
                            </CardContent>
                            <CardFooter>
                                <Link
                                    href={item.link}
                                    className="inline-flex items-center text-primary hover:text-primary/80 text-sm font-medium"
                                >
                                    {item.linkText}
                                    <ArrowRight className="ml-1 h-4 w-4" />
                                </Link>
                            </CardFooter>
                        </Card>
                    );
                })}
            </div>
        </section>
    );
}