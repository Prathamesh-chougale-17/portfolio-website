"use client";

import React, { useState, useEffect } from "react";
import { Quote } from "lucide-react";
import { quoteContent } from "@/data/en";
import { cn } from "@/lib/utils";

export default function QuoteTicker() {
    const [activeQuote, setActiveQuote] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(true);

            setTimeout(() => {
                setActiveQuote((prev) => (prev + 1) % quoteContent.length);
                setIsAnimating(false);
            }, 500);
        }, 8000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-16 px-4">
            <div className="max-w-4xl">
                <div className="text-center relative min-h-[150px] flex items-center justify-center">
                    <Quote className="text-black/10 dark:text-white/10 absolute left-0 top-0 w-16 h-16" />

                    <blockquote className="relative z-10">
                        <p
                            className={cn(
                                "text-xl md:text-2xl lg:text-3xl font-medium transition-all duration-500",
                                isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
                            )}
                        >
                            {quoteContent[activeQuote]}
                        </p>

                        <div className="mt-8 flex justify-center space-x-2">
                            {quoteContent.map((_, index) => (
                                <button
                                    key={index}
                                    className={cn(
                                        "w-2 h-2 rounded-full transition-all",
                                        index === activeQuote
                                            ? "bg-black dark:bg-white/90 w-6"
                                            : "bg-black/40 hover:bg-white/60 dark:bg-white/30 dark:hover:bg-white/50"
                                    )}
                                    onClick={() => {
                                        setIsAnimating(true);
                                        setTimeout(() => {
                                            setActiveQuote(index);
                                            setIsAnimating(false);
                                        }, 500);
                                    }}
                                    aria-label={`View quote ${index + 1}`}
                                />
                            ))}
                        </div>
                    </blockquote>

                    <Quote className="text-black/10 dark:text-white/10 absolute right-0 bottom-0 w-16 h-16 transform rotate-180" />
                </div>
            </div>
        </section>
    );
}