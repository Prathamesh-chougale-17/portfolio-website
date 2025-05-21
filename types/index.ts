// Site Configuration
export interface SiteConfig {
  name?: string;
  title?: string;
  description?: string;
  url?: string;
}

// Navigation Item
export interface NavigationItem {
  name: string;
  href?: string;
}

// Hero Section
export interface HeroContent {
  heading?: string;
  subheading?: string;
  tagline?: string;
  description?: string;
  cta?: string;
  ctaLink?: string;
}

// Highlights Item
export interface HighlightItem {
  title?: string;
  description?: string;
  icon?: string;
  link?: string;
  linkText?: string;
}

// Home Section
export interface HomeSection {
  heroContent?: HeroContent;
  highlightsContent?: {
    title?: string;
    description?: string;
    highlights?: HighlightItem[];
  };
  quoteContent?: string[];
}

// Expertise Item
export interface ExpertiseItem {
  area?: string;
  skills?: string[];
}

// Philosophy Section
export interface PhilosophySection {
  title?: string;
  quote?: string;
  principles?: string[];
}

// About Section
export interface AboutSection {
  intro?: string;
  photo?: string;
  expertise?: ExpertiseItem[];
  philosophy?: PhilosophySection;
  experience?: ExperienceSection;
}

// Experience Item
export interface ExperienceItem {
  title?: string;
  company?: string;
  period?: string;
  description?: string;
}

// Message Section
export interface MessageSection {
  title?: string;
  heading?: string;
  description?: string;
  description2?: string;
  content?: string;
}

// Outlook Item
export interface OutlookItem {
  title?: string;
  description?: string;
  icon?: string;
}

// Statement Item
export interface StatementItem {
  heading?: string;
  content?: string;
}

// Outlook Section
export interface OutlookSection {
  title?: string;
  description?: string;
  outlook?: OutlookItem[];
}

// statements Section
export interface StatementsSection {
  title?: string;
  subTitle?: string;
  header?: string;
  statements?: StatementItem[];
}

// Vision Section
export interface VisionSection {
  message?: MessageSection;
  outlookSection?: OutlookSection;
  statementsSection?: StatementsSection;
  mission?: string;
}

// Award Item
export interface AwardItem {
  title?: string;
  organization?: string;
  year?: number;
  description?: string;
}

// Metric Item
export interface MetricItem {
  metric?: string;
  description?: string;
}

// Contribution Item
export interface ContributionItem {
  title?: string;
  year?: string;
  description?: string;
}

// Media Mention Item
export interface MediaMentionItem {
  title?: string;
  publication?: string;
  year?: number;
  quote?: string;
}

// Achievements Section
export interface AchievementsSection {
  awards?: AwardItem[];
  metrics?: MetricItem[];
  contributions?: ContributionItem[];
  mediaMentions?: MediaMentionItem[];
}

// Experience Section
export interface ExperienceSection {
  title?: string;
  description?: string;
  experienceContent?: ExperienceItem[];
}

// Main Content Type
export interface enType {
  siteConfig?: SiteConfig;
  navigation?: NavigationItem[];
  home?: HomeSection;
  aboutContent?: AboutSection;
  visionContent?: VisionSection;
  achievementsContent?: AchievementsSection;
}
