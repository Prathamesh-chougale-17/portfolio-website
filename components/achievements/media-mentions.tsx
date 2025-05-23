"use client";

import React, { useEffect, useState } from "react";
import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MediaMentionItem } from "@/types";

export default function MediaMentions({
  title,
  description,
  header,
  mediaMentions,
}: {
  title?: string;
  description?: string;
  header?: string;
  mediaMentions?: MediaMentionItem[];
}) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const totalSlides = mediaMentions?.length ?? 0;

  // Update current index when carousel changes
  useEffect(() => {
    if (!api) return;

    const onChange = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onChange);
    return () => {
      api.off("select", onChange);
    };
  }, [api]);

  return (
    <section className="section-padding px-4 bg-background">
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-1 bg-primary/10 rounded-full text-sm font-medium text-primary mb-2">
          {header}
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          {title}
        </h2>
        <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
          {description}
        </p>
      </div>

      {mediaMentions && (
        <div className="relative max-w-4xl mx-auto">
          {/* Carousel wrapper */}
          <div className="rounded-xl bg-card/50 dark:bg-white/5 backdrop-blur-sm p-8 md:p-12 relative shadow-md border border-border">
            {/* Quotes icon */}
            <Quote className="absolute top-6 left-6 w-8 h-8 text-muted-foreground/30" />
            <Quote className="absolute bottom-6 right-6 w-8 h-8 text-muted-foreground/30 transform rotate-180" />

            <Carousel
              setApi={setApi}
              opts={{
                loop: true,
                align: "center",
              }}
              className="w-full"
            >
              <CarouselContent className="min-h-[250px]">
                {mediaMentions?.map((mention, index) => (
                  <CarouselItem
                    key={index}
                    className="flex items-center justify-center"
                  >
                    <div className="text-center">
                      <blockquote className="mb-6 text-xl md:text-2xl italic text-foreground">
                        &quot;{mention.quote}&quot;
                      </blockquote>
                      <div className="space-y-1">
                        <h4 className="font-semibold text-lg text-foreground">
                          {mention.title}
                        </h4>
                        <p className="text-muted-foreground">
                          {mention.publication}, {mention.year}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <div className="flex justify-center items-center space-x-4">
                <CarouselPrevious
                  className="border border-border hover:bg-accent absolute transform-none text-foreground"
                  variant="ghost"
                />
                <div className="flex items-center space-x-2">
                  {Array.from({ length: totalSlides }).map((_, index) => (
                    <button
                      key={index}
                      className={cn(
                        "w-2 h-2 rounded-full transition-all",
                        index === current
                          ? "bg-primary w-6"
                          : "bg-muted hover:bg-muted-foreground/50"
                      )}
                      onClick={() => api?.scrollTo(index)}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
                <CarouselNext
                  className="border border-border hover:bg-accent absolute transform-none text-foreground"
                  variant="ghost"
                />
              </div>
            </Carousel>
          </div>
        </div>
      )}
    </section>
  );
}
