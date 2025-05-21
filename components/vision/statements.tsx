"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { StatementsSection } from "@/types";

export default function VisionStatements({
  header,
  title,
  subTitle,
  statements,
}: StatementsSection) {
  const [activeStatement, setActiveStatement] = useState(0);

  return (
    <section className="py-24 px-4 bg-muted">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-primary/10 rounded-full text-sm font-medium mb-2 text-primary">
            {header}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            {subTitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left navigation */}
          <div className="lg:col-span-4">
            <div className="space-y-4">
              {statements?.map((statement, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStatement(index)}
                  className={cn(
                    "w-full text-left p-6 rounded-lg transition-all duration-300",
                    "border border-border hover:border-primary/50",
                    activeStatement === index
                      ? "bg-primary/10 border-primary"
                      : "bg-card hover:bg-accent"
                  )}
                >
                  <h3 className="text-xl font-medium">{statement.heading}</h3>
                </button>
              ))}
            </div>
          </div>

          {/* Right content */}
          <div className="lg:col-span-8">
            <div className="bg-card/60 backdrop-blur-sm rounded-xl p-8 md:p-12 h-full border border-border shadow-sm">
              {statements?.map((statement, index) => (
                <div
                  key={index}
                  className={cn(
                    "transition-all duration-500",
                    activeStatement === index
                      ? "opacity-100"
                      : "opacity-0 hidden"
                  )}
                >
                  <h3 className="text-3xl font-bold mb-6">
                    {statement.heading}
                  </h3>
                  <div className="w-20 h-1 bg-primary mb-8"></div>
                  <p className="text-xl">{statement.content}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
                    <div className="bg-accent/50 rounded-lg p-6 border border-border">
                      <h4 className="text-lg font-medium mb-3">Key Benefit</h4>
                      <p className="text-muted-foreground">
                        {getKeyBenefit(statement.heading ?? "")}
                      </p>
                    </div>
                    <div className="bg-accent/50 rounded-lg p-6 border border-border">
                      <h4 className="text-lg font-medium mb-3">
                        Implementation
                      </h4>
                      <p className="text-muted-foreground">
                        {getImplementationStrategy(statement.heading ?? "")}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Helper functions for additional content
function getKeyBenefit(heading: string): string {
  const benefits: Record<string, string> = {
    "Transparent Systems":
      "Increased stakeholder trust, reduced information asymmetry, and better risk assessment capabilities.",
    "Inclusive Growth":
      "Enhanced organizational resilience, stronger community relationships, and more sustainable long-term performance.",
    "Resilient Structures":
      "Ability to withstand market volatility, capitalize on emerging opportunities, and maintain operational continuity.",
  };

  return (
    benefits[heading] ||
    "Strategic advantage through principled financial leadership."
  );
}

function getImplementationStrategy(heading: string): string {
  const strategies: Record<string, string> = {
    "Transparent Systems":
      "Integration of blockchain technology, standardized reporting frameworks, and stakeholder communication platforms.",
    "Inclusive Growth":
      "Triple bottom line accounting, community investment programs, and equitable governance structures.",
    "Resilient Structures":
      "Stress testing protocols, diversified resource allocation, and adaptive management frameworks.",
  };

  return (
    strategies[heading] ||
    "Methodical implementation through strategic planning and cross-functional collaboration."
  );
}
