import React from "react";
import Link from "next/link";
import { navigation, siteConfig } from "@/data/en";
import { Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-muted py-12 border-t px-4">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <Link href="/" className="text-2xl font-medium flex items-center gap-2">
                            <span className="inline-block w-6 h-6 rounded-full bg-primary"></span>
                            <span>{siteConfig.name.split(" ")[0]}</span>
                        </Link>
                        <p className="text-muted-foreground max-w-xs">
                            {siteConfig.description}
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a
                                href="#"
                                className="text-muted-foreground hover:text-primary transition-colors"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={20} />
                            </a>
                            <a
                                href="#"
                                className="text-muted-foreground hover:text-primary transition-colors"
                                aria-label="Twitter"
                            >
                                <Twitter size={20} />
                            </a>
                            <a
                                href="mailto:contact@example.com"
                                className="text-muted-foreground hover:text-primary transition-colors"
                                aria-label="Email"
                            >
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="space-y-4">
                        <h4 className="text-base font-medium">Navigation</h4>
                        <nav className="flex flex-col space-y-2">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h4 className="text-base font-medium">Contact</h4>
                        <address className="not-italic text-muted-foreground space-y-2">
                            <p>Meridian Investments</p>
                            <p>Financial District</p>
                            <p>New York, NY 10004</p>
                            <p className="pt-2">
                                <a
                                    href="mailto:contact@example.com"
                                    className="hover:text-primary transition-colors"
                                >
                                    contact@example.com
                                </a>
                            </p>
                        </address>
                    </div>
                </div>

                <div className="border-t border-border mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
                    <p>© {currentYear} {siteConfig.name}. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}