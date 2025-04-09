import React from "react";
import Image from "next/image";
import { aboutContent } from "@/data/en";

export default function Profile() {
    return (
        <section className="section-padding bg-background dark:bg-gray-950 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="relative">
                    <div className="relative aspect-square overflow-hidden rounded-2xl shadow-xl dark:shadow-gray-900/30">
                        <Image
                            src="/placeholder.svg"
                            alt={`Portrait of ${aboutContent.intro.split(" ")[0]}`}
                            width={600}
                            height={600}
                            className="object-cover dark:opacity-90"
                            priority
                        />
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute -z-10 -bottom-6 -right-6 w-24 h-24 bg-primary/10 dark:bg-primary/20 rounded-2xl"></div>
                    <div className="absolute -z-10 -top-6 -left-6 w-32 h-32 bg-primary/5 dark:bg-primary/10 rounded-2xl"></div>
                </div>

                <div className="space-y-6">
                    <div className="inline-block px-4 py-1 bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary/90 rounded-full text-sm font-medium mb-2">
                        About Me
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold dark:text-white">Professional Background</h2>

                    <div className="space-y-4 text-lg text-pretty dark:text-gray-300">
                        <p>{aboutContent.intro}</p>
                        <p>
                            With expertise spanning financial strategy, risk management, and digital transformation,
                            I&apos;ve guided organizations through periods of growth, market volatility, and technological disruption.
                        </p>
                        <p>
                            My approach combines rigorous analysis with strategic foresight, always keeping the human
                            impact of financial decisions at the forefront of my work.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}