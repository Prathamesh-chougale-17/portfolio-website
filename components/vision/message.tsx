import React from "react";
import Image from "next/image";
import { visionContent } from "@/data/en";

export default function PersonalMessage() {
    return (
        <section className="section-padding bg-background px-4 py-24">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <div className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-2">
                            Vision
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold">
                            {visionContent.message.title}
                        </h2>

                        <div className="space-y-4 text-pretty">
                            <p className="text-lg text-foreground/90">
                                {visionContent.message.content}
                            </p>
                            <p className="text-lg text-foreground/90">
                                My vision for the future of finance centers on three key pillars: data-driven decision making,
                                ethical considerations, and adaptive systems that can respond to rapidly changing environments.
                            </p>
                            <p className="text-lg text-foreground/90">
                                I believe that by combining technical expertise with humanitarian values,
                                we can build financial frameworks that not only generate returns but also contribute positively to society.
                            </p>
                        </div>
                    </div>

                    {/* Visual element */}
                    <div className="relative group max-w-md mx-auto lg:max-w-full">
                        <div className="aspect-[16/9] rounded-2xl overflow-hidden relative shadow-xl transition-transform duration-300 hover:scale-[1.02] border border-border">
                            <Image
                                src="/placeholder.svg"
                                alt="Vision representation"
                                width={600}
                                height={340}
                                className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-105"
                                priority
                            />

                            {/* Overlay with gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent flex items-end p-8">
                                <p className="text-foreground text-xl font-medium drop-shadow-lg">
                                    &quot;The future belongs to those who can see it coming.&quot;
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}