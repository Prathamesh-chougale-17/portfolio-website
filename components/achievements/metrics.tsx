"use client";

import { MetricItem } from "@/types";
import React, { useEffect, useRef } from "react";

export default function Metrics({
  title,
  header,
  description,
  metrics,
}: {
  title?: string;
  header?: string;
  description?: string;
  metrics?: MetricItem[];
}) {
  const metricsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const counters =
              metricsRef.current?.querySelectorAll(".metric-value");
            counters?.forEach((counter) => {
              counter.classList.add("counting");
            });
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.25,
      }
    );

    if (metricsRef.current) {
      observer.observe(metricsRef.current);
    }

    return () => {
      if (metricsRef.current) {
        observer.unobserve(metricsRef.current);
      }
    };
  }, []);

  return (
    <section className="py-16 px-4 bg-background">
      <div className="text-center mb-12">
        <div className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-2">
          {header}
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          {title}
        </h2>
        <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
          {description}
        </p>
      </div>

      <div
        ref={metricsRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"
      >
        {metrics?.map((item, index) => (
          <div
            key={index}
            className="bg-card/50 dark:bg-white/10 rounded-xl p-6 text-center backdrop-blur-sm hover:bg-card/80 dark:hover:bg-white/15 transition-colors border border-border shadow-sm"
          >
            <div className="flex flex-col items-center justify-center h-full">
              <div
                className="metric-value text-4xl md:text-5xl font-bold mb-3 text-primary"
                data-value={item.metric}
              >
                {item.metric}
              </div>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
