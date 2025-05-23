import React from "react";
import { Check } from "lucide-react";
import { PhilosophySection } from "@/types";

export default function Philosophy({
  header,
  title,
  quote,
  yearExperience,
  content,
  principles,
}: PhilosophySection) {
  return (
    <section className="section-padding dark:bg-gray-950 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <div className="inline-block px-4 py-1 bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary/90 rounded-full text-sm font-medium mb-2">
            {header}
          </div>

          <h2 className="text-3xl md:text-4xl font-bold dark:text-white">
            {title}
          </h2>

          <blockquote className="text-xl italic border-l-4 border-primary/30 dark:border-primary/40 pl-6 my-6 dark:text-gray-300">
            &quot;{quote}&quot;
          </blockquote>

          {principles && (
            <div className="space-y-4 mt-8">
              {principles?.map((principle, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary/90 rounded-full p-1 mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <p className="dark:text-gray-300">{principle}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Visual element */}
        <div className="relative aspect-square lg:aspect-auto">
          <div className="absolute inset-0 bg-primary/5 dark:bg-primary/10 rounded-2xl overflow-hidden">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>

          {/* Abstract shapes */}
          <div className="absolute w-1/2 h-1/2 right-1/4 top-1/4 bg-gradient-to-br from-primary/10 dark:from-primary/20 to-transparent rounded-full blur-2xl"></div>
          <div className="absolute w-1/3 h-1/3 left-1/4 bottom-1/4 bg-gradient-to-tr from-primary/20 dark:from-primary/30 to-transparent rounded-full blur-3xl"></div>

          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center p-12">
            <div className="text-center">
              <div className="text-5xl md:text-7xl font-bold mb-4 text-foreground dark:text-white">
                {yearExperience}
              </div>
              <p className="text-xl text-muted-foreground dark:text-gray-300">
                {content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
