"use client";

import React, { useEffect, useRef } from "react";
import { Lightbulb, Sparkles, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContributionItem } from "@/types";

// Map for contribution icons
const iconMap = [
  <Lightbulb key="Lightbulb" className="w-6 h-6" />,
  <Sparkles key="Sparkles" className="w-6 h-6" />,
  <Globe key="Globe" className="w-6 h-6" />,
];

export default function Contributions({
  contributions,
}: {
  contributions?: ContributionItem[];
}) {
  const contributionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".contribution-card");
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("animate-fade-up");
                card.classList.remove("opacity-0");
              }, index * 150);
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

    if (contributionsRef.current) {
      observer.observe(contributionsRef.current);
    }

    return () => {
      if (contributionsRef.current) {
        observer.unobserve(contributionsRef.current);
      }
    };
  }, []);

  return (
    <section className="section-padding bg-secondary/10 px-4">
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-2">
          Major Projects
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Key Contributions
        </h2>
        <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
          Significant initiatives and projects with lasting impact
        </p>
      </div>

      <div
        ref={contributionsRef}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {contributions?.map((contribution, index) => (
          <Card
            key={index}
            className="contribution-card opacity-0 transition-all duration-500 border-border shadow-lg hover:shadow-xl bg-card/80 backdrop-blur-sm"
          >
            <CardHeader className="pb-2">
              <div className="w-12 h-12 flex items-center justify-center rounded-md bg-primary/10 text-primary mb-4">
                {iconMap[index % iconMap.length]}
              </div>
              <CardTitle className="text-foreground">
                {contribution.title}
              </CardTitle>
              <p className="text-sm text-primary">{contribution.year}</p>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                {contribution.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
