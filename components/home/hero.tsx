"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { heroContent } from "@/data/en";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Hero() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center px-4">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-finance-100/60 via-background to-background dark:from-finance-900/30 dark:via-background dark:to-background" />

                {/* Abstract shapes for visual interest */}
                <div className="absolute right-0 top-1/4 w-72 h-72 bg-finance-200/30 dark:bg-finance-800/30 rounded-full blur-3xl" />
                <div className="absolute left-1/4 bottom-1/4 w-96 h-96 bg-finance-300/20 dark:bg-finance-700/20 rounded-full blur-3xl" />

                {/* Grid pattern overlay */}
                <div
                    className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                />
            </div>

            <div className="container relative z-10 pt-20 pb-16 md:pb-24">
                <div className="flex flex-col max-w-3xl mx-auto text-center">
                    <div
                        className={cn(
                            "space-y-6 transition-all duration-1000 ease-out transform",
                            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        )}
                    >
                        <div>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-balance">
                                {heroContent.heading}
                            </h1>
                            <p className="mt-3 text-xl md:text-2xl text-muted-foreground">
                                {heroContent.subheading}
                            </p>
                        </div>

                        <h2 className="relative inline-flex mx-auto text-xl sm:text-2xl md:text-3xl font-medium text-primary">
                            {heroContent.tagline}
                            <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-primary rounded-full"></span>
                        </h2>

                        <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
                            {heroContent.description}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                            <Button asChild size="lg" className="text-base">
                                <Link href={heroContent.ctaLink}>
                                    {heroContent.cta}
                                    <ChevronRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="text-base">
                                <Link href="/about">
                                    Learn More
                                </Link>
                            </Button>
                        </div>
                    </div>

                    {/* Scroll indicator */}
                    <div
                        className={cn(
                            "flex justify-center mt-16 transition-opacity duration-1000 delay-500",
                            isVisible ? "opacity-100" : "opacity-0"
                        )}
                    >
                        <div className="animate-bounce rounded-full border border-muted-foreground/20 p-2">
                            <ChevronRight size={24} className="rotate-90 text-muted-foreground/60" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}