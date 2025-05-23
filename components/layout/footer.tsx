import React from "react";
import en from "@/data/en";
import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-muted pb-6 border-t px-4">
      <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
        <p>
          © {currentYear} {en.siteConfig?.name}. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <a
            href={en.siteConfig?.linkedin || "#"}
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          {en.siteConfig?.github && (
            <a
              href={en.siteConfig?.github}
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <Github size={20} />
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
