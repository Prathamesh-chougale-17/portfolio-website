"use client";

import React, { useEffect, useState } from "react";
import { Quote } from "lucide-react";
import { achievementsContent } from "@/data/en";
import { cn } from "@/lib/utils";
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

export default function MediaMentions() {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);

    const totalSlides = achievementsContent.mediaMentions.length;

    // Update current index when carousel changes
    useEffect(() => {
        if (!api) return;

        const onChange = () => {
            setCurrent(api.selectedScrollSnap());
        };

        api.on("select", onChange);
        return () => { api.off("select", onChange); };
    }, [api]);

    return (
        <section className="section-padding px-4">
            <div className="text-center mb-16">
                <div className="inline-block px-4 py-1 bg-primary/10 dark:bg-white/20 rounded-full text-sm font-medium mb-2">
                    Press
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Media Mentions</h2>
                <p className="text-lg text-gray-600 dark:text-white/80 mt-4 max-w-2xl mx-auto">
                    Notable mentions in industry publications and press
                </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
                {/* Carousel wrapper */}
                <div className="rounded-xl bg-gray-100/80 dark:bg-white/10 backdrop-blur-sm p-8 md:p-12 relative shadow-md">
                    {/* Quotes icon */}
                    <Quote className="absolute top-6 left-6 w-8 h-8 text-gray-400 dark:text-white/20" />
                    <Quote className="absolute bottom-6 right-6 w-8 h-8 text-gray-400 dark:text-white/20 transform rotate-180" />

                    <Carousel
                        setApi={setApi}
                        opts={{
                            loop: true,
                            align: "center"
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="min-h-[250px]">
                            {achievementsContent.mediaMentions.map((mention, index) => (
                                <CarouselItem key={index} className="flex items-center justify-center">
                                    <div className="text-center">
                                        <blockquote className="mb-6 text-xl md:text-2xl italic text-gray-800 dark:text-white">
                                            &quot;{mention.quote}&quot;
                                        </blockquote>
                                        <div className="space-y-1">
                                            <h4 className="font-semibold text-lg text-gray-900 dark:text-white">{mention.title}</h4>
                                            <p className="text-gray-600 dark:text-white/70">{mention.publication}, {mention.year}</p>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        <div className="flex justify-center items-center space-x-4">
                            <CarouselPrevious className="border border-gray-300 dark:border-white/20 hover:bg-gray-200 dark:hover:bg-white/10 absolute transform-none text-gray-800 dark:text-white" variant="ghost" />
                            <div className="flex items-center space-x-2">
                                {Array.from({ length: totalSlides }).map((_, index) => (
                                    <button key={index} className={cn("w-2 h-2 rounded-full transition-all", index === current ? "bg-primary dark:bg-white w-6" : "bg-gray-300 dark:bg-white/40 hover:bg-gray-400 dark:hover:bg-white/60")} onClick={() => api?.scrollTo(index)} aria-label={`Go to slide ${index + 1}`} />
                                ))}
                            </div>
                            <CarouselNext className="border border-gray-300 dark:border-white/20 hover:bg-gray-200 dark:hover:bg-white/10 absolute transform-none text-gray-800 dark:text-white" variant="ghost" />
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    );
}