"use client";

import React, { useEffect, useRef } from "react";
import { Database, Shield, Scale } from "lucide-react";
import { OutlookSection } from "@/types";

// Map of outlook icons
const iconMap = {
  Database: <Database className="w-8 h-8" />,
  Shield: <Shield className="w-8 h-8" />,
  Scale: <Scale className="w-8 h-8" />,
};

export default function IndustryOutlook({
  outlook,
  description,
  title,
}: OutlookSection) {
  const outlookRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll(".outlook-item");
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

    if (outlookRef.current) {
      observer.observe(outlookRef.current);
    }

    return () => {
      if (outlookRef.current) {
        observer.unobserve(outlookRef.current);
      }
    };
  }, []);

  return (
    <section className="section-padding bg-background px-4 py-24">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-2">
            The Future
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div
          ref={outlookRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8"
        >
          {outlook?.map((item, index) => {
            const IconComponent = iconMap[item.icon as keyof typeof iconMap];

            return (
              <div
                key={index}
                className="outlook-item opacity-0 transition-all duration-500 bg-card rounded-xl p-8 shadow-md border border-border hover:border-primary/50 hover:shadow-lg flex flex-col justify-between h-full"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div>
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
                    {IconComponent}
                  </div>

                  <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>

                <div className="mt-6">
                  <div className="w-12 h-1 bg-primary rounded"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
