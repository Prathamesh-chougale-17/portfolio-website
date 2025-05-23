import React from "react";

export default function MissionSection() {
  return (
    <section className="py-24 bg-muted px-4">
      <div className="container max-w-5xl">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-2">
            Purpose
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">Mission Statement</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            The guiding purpose that drives my professional endeavors
          </p>
        </div>

        <div className="relative py-16 px-8 md:px-16 bg-card/60 rounded-xl shadow-sm">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-primary"></div>
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-primary"></div>

          <blockquote className="text-center">
            {/* <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-pretty leading-relaxed">
              {visionContent.mission}
            </p> */}
          </blockquote>
        </div>

        {/* Additional content */}
        {/* <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="p-6 bg-card rounded-xl shadow-sm border border-border hover:border-primary/50 transition-colors">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl font-bold text-primary">01</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Transform</h3>
                        <p className="text-muted-foreground">
                            Evolving financial leadership from a control function to a catalyst for positive change.
                        </p>
                    </div>

                    <div className="p-6 bg-card rounded-xl shadow-sm border border-border hover:border-primary/50 transition-colors">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl font-bold text-primary">02</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Balance</h3>
                        <p className="text-muted-foreground">
                            Harmonizing financial performance with ethical considerations and social impact.
                        </p>
                    </div>

                    <div className="p-6 bg-card rounded-xl shadow-sm border border-border hover:border-primary/50 transition-colors">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl font-bold text-primary">03</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Innovate</h3>
                        <p className="text-muted-foreground">
                            Pioneering new approaches to financial systems that address emerging global challenges.
                        </p>
                    </div>
                </div> */}
      </div>
    </section>
  );
}
