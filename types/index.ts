// Site Configuration
export interface SiteConfig {
  name?: string;
  logo?: string;
  title?: string;
  description?: string;
  url?: string;
  github?: string;
  linkedin?: string;
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
  header?: string;
  title?: string;
  quote?: string;
  yearExperience?: string;
  content?: string;
  principles?: string[];
}

// Expertise Section
export interface ExpertiseSection {
  title?: string;
  header?: string;
  description?: string;
  expertise?: ExpertiseItem[];
}

// Profile Section
export interface ProfileSection {
  intro?: string;
  image?: string;
  yearSince?: number;
  name?: string;
  para1?: string;
  para2?: string;
  highlights?: string[];
}
// About Section
export interface AboutSection {
  intro?: string;
  photo?: string;
  expertiseSection?: ExpertiseSection;
  philosophy?: PhilosophySection;
  profile?: ProfileSection;
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
  image?: string;
  quote?: string;
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

// Awards Section
export interface AwardsSection {
  title?: string;
  header?: string;
  description?: string;
  awards?: AwardItem[];
}

// Metrics Section
export interface MetricsSection {
  title?: string;
  header?: string;
  description?: string;
  metrics?: MetricItem[];
}

// contributions Section
export interface ContributionsSection {
  title?: string;
  header?: string;
  description?: string;
  contributions?: ContributionItem[];
}

// Media Mentions Section
export interface MediaMentionsSection {
  title?: string;
  header?: string;
  description?: string;
  mediaMentions?: MediaMentionItem[];
}

// Achievements Section
export interface AchievementsSection {
  awardSection?: AwardsSection;
  metricSection?: MetricsSection;
  contributionSection?: ContributionsSection;
  mediaMentionSection?: MediaMentionsSection;
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
