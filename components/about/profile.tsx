import React from "react";
import Image from "next/image";
export default function Profile({
  intro,
  image,
  yearSince,
  name,
  para1,
  para2,
  highlights,
}: {
  intro?: string;
  image?: string;
  yearSince?: number;
  name?: string;
  para1?: string;
  para2?: string;
  highlights?: string[];
}) {
  return (
    <section className="section-padding py-24 bg-gradient-to-b from-background to-background/60 dark:from-gray-950 dark:to-gray-950/95 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center animate-fade-in">
          {image && (
            <div className="relative md:col-span-4 order-2 md:order-1">
              <div className="relative aspect-square overflow-hidden rounded-2xl shadow-2xl dark:shadow-gray-900/30 border border-gray-100/20 dark:border-gray-800/30">
                <Image
                  src={image}
                  alt={`Portrait of ${name?.split(" ")[0]}`}
                  width={600}
                  height={600}
                  className="object-cover dark:opacity-90 transition-all duration-300 hover:scale-[1.02]"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-60 dark:opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-900/90 to-transparent"></div>
              </div>
              {/* Enhanced decorative elements */}
              <div className="absolute -z-10 -bottom-8 -right-8 w-32 h-32 bg-primary/10 dark:bg-primary/20 rounded-3xl rotate-6 blur-sm"></div>
              <div className="absolute -z-10 -top-8 -left-8 w-40 h-40 bg-primary/5 dark:bg-primary/10 rounded-3xl -rotate-6 blur-sm"></div>
              {/* Professional badge */}
              {yearSince && (
                <div className="absolute bottom-6 right-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-primary dark:text-primary/90 px-4 py-2 rounded-full text-sm font-semibold shadow-lg transition-transform hover:scale-105">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                    Since {yearSince}
                  </span>
                </div>
              )}
            </div>
          )}

          <div className="space-y-8 md:col-span-8 order-1 md:order-2 animate-fade-up">
            <div>
              <div className="inline-block px-4 py-1.5 bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary/90 rounded-full text-sm font-medium mb-3 shadow-sm backdrop-blur-sm">
                About Me
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold dark:text-white tracking-tight">
                Professional <span className="text-primary">Background</span>
              </h2>
            </div>

            <div className="space-y-5 text-lg text-pretty dark:text-gray-300">
              <p className="leading-relaxed">{intro}</p>
              {para1 && (
                <p className="leading-relaxed">
                  {highlights?.length
                    ? para1
                        .split(new RegExp(`(${highlights.join("|")})`, "i"))
                        .map((part, i) =>
                          highlights.some(
                            (h) => h.toLowerCase() === part.toLowerCase()
                          ) ? (
                            <span
                              key={i}
                              className="font-medium text-primary/90"
                            >
                              {part}
                            </span>
                          ) : (
                            part
                          )
                        )
                    : para1}
                </p>
              )}
              <p className="leading-relaxed">{para2}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
