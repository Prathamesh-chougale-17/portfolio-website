/**
 * English Language Content Configuration File
 *
 * This file contains all the text content for the website in English language.
 *
 * HOW TO USE:
 * 1. Modify the values but keep the structure intact to ensure the website renders correctly.
 * 2. All sections are organized by page (home, about, achievements, vision).
 * 3. When updating, make sure to:
 *    - Keep the JSON structure and property names unchanged
 *    - Update only the string values and array contents
 *    - Maintain proper nesting of objects
 *    - Preserve the exported 'enType' typing for type safety
 *
 * For icons, use component names from the UI library, like:
 * - BarChart, Globe, Lightbulb, Database, Shield, Scale, etc.
 *
 * IMAGES:
 * Images are referenced from the public folder using a simple path starting with "/".
 * For example:
 * - "/placeholder.svg" refers to "public/placeholder.svg"
 * - "/logo.png" would refer to "public/logo.png"
 * - "/images/photo.jpg" would refer to "public/images/photo.jpg"
 *
 * To add new images:
 * 1. Place your image files in the public folder or a subfolder
 * 2. Reference them with a path starting with "/" followed by the file name or subfolder path
 *
 * NOTE: After making changes, save the file and the website will automatically
 * update with your new content.
 */

import { enType } from "@/types";
const en: enType = {
  siteConfig: {
    title: "Director Template",
    description: "A template for directors",
    url: "https://urvee-ranade.vercel.app",
    name: "Urvee Ranade",
    github: "https://github.com/urveeranade",
    linkedin: "https://www.linkedin.com/in/urveeranade/",
    logo: "/placeholder.svg", // References public/placeholder.svg change to your image
  },
  navigation: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Achievements", href: "/achievements" },
    { name: "Vision", href: "/vision" },
  ],
  home: {
    heroContent: {
      heading: "Director Template",
      subheading: "A template for directors",
      tagline: "Shaping Financial Futures with Vision",
      description:
        "With over 20 years of experience in global finance, I specialize in creating resilient financial strategies that adapt to changing market dynamics while maintaining ethical standards.",
      cta: "Explore My Vision",
      ctaLink: "/vision",
    },
    highlightsContent: {
      title: "Areas of Expertise",
      description:
        "With decades of experience in global finance, I bring strategic insight and practical solutions to complex financial challenges.",
      highlights: [
        {
          title: "Strategic Leadership",
          description:
            "Guiding financial transformation with foresight and precision",
          icon: "BarChart",
          link: "/about",
          linkText: "My Approach",
        },
        {
          title: "Global Impact",
          description:
            "Delivering measurable results across international markets",
          icon: "Globe",
          link: "/achievements",
          linkText: "View Achievements",
        },
        {
          title: "Future Outlook",
          description: "Driving innovation and sustainable financial practices",
          icon: "Lightbulb",
          link: "/vision",
          linkText: "Read More",
        },
      ],
    },
    quoteContent: [
      "The data-driven leadership model presented offers a blueprint for the next generation of financial executives.",
    ],
  },
  aboutContent: {
    intro:
      "As a seasoned finance executive with a passion for strategic innovation, I've spent my career building financial frameworks that enable sustainable growth while navigating complex global challenges.",
    photo: "/placeholder.svg", // References public/placeholder.svg change to your image
    expertiseSection: {
      header: "Expertise",
      title: "Areas of Expertise",
      description:
        "My expertise spans a wide range of financial disciplines, allowing me to provide comprehensive solutions tailored to the unique needs of each organization.",
      expertise: [
        {
          area: "Financial Strategy",
          skills: [
            "Strategic Planning",
            "Risk Management",
            "Investment Analysis",
            "Portfolio Management",
          ],
        },
        {
          area: "Data Analytics",
          skills: [
            "Predictive Modeling",
            "Big Data Analysis",
            "Financial Forecasting",
            "Business Intelligence Tools",
          ],
        },
        {
          area: "Sustainable Finance",
          skills: [
            "ESG Integration",
            "Impact Investing",
            "Sustainable Development Goals (SDGs)",
            "Green Bonds and Financing",
          ],
        },
      ],
    },
    philosophy: {
      title: "Leadership Philosophy",
      yearExperience: "20+",
      content: "Years of Financial Leadership",
      header: "My Approach",
      quote:
        "Financial leadership in the modern age requires balancing precision with adaptability, tradition with innovation, and profit with purpose.",
      principles: [
        "Transparency in all financial communications",
        "Data-informed decision making",
        "Ethical considerations at every level",
        "Continuous learning and adaptation",
      ],
    },
    experience: {
      title: "Experience",
      description:
        "With over 20 years of experience in global finance, I specialize in creating resilient financial strategies that adapt to changing market dynamics while maintaining ethical standards.",
      experienceContent: [
        {
          title: "Global Finance Director",
          company: "Meridian Investments",
          period: "2018 - Present",
          description:
            "Leading strategic financial initiatives across multiple markets, overseeing a portfolio valued at $3.2B, and directing a team of 45 financial analysts and managers.",
        },
        {
          title: "Senior Financial Strategist",
          company: "AlphaVenture Partners",
          period: "2013 - 2018",
          description:
            "Developed and executed financial strategies for Fortune 500 clients, resulting in an average operational efficiency improvement of 23%.",
        },
        {
          title: "Financial Analyst",
          company: "Global Finance Solutions",
          period: "2003 - 2013",
          description:
            "Conducted in-depth market analysis and risk assessments, contributing to the successful launch of multiple investment products.",
        },
        {
          title: "Intern",
          company: "Finance Intern",
          period: "2002 - 2003",
          description:
            "Assisted in financial modeling and data analysis, gaining foundational experience in the finance industry.",
        },
      ],
    },
    profile: {
      intro:
        "I am a finance executive with over 20 years of experience in global finance, specializing in strategic leadership and sustainable investment.",
      image: "/placeholder.svg", // References public/placeholder.svg change to your image
      yearSince: 2003,
      para1:
        "With expertise spanning financial strategy, risk management, and digital transformation, I've guided organizations through periods of growth, market volatility, and technological disruption.",
      para2:
        "My approach combines data-driven insights with ethical considerations, ensuring that financial success supports broader purposes.",
      // below is the list of highlights which highlight the words in para1 to primary color. If you wanted to add more highlights, you can add them here.
      highlights: [
        "financial strategy",
        "risk management",
        "digital transformation",
      ],
    },
  },
  achievementsContent: {
    awardSection: {
      header: "Recognition",
      title: "Awards & Honors",
      description: "Professional recognition received throughout my career",
      awards: [
        {
          title: "Financial Innovator of the Year",
          organization: "Global Finance Forum",
          year: 2023,
          description:
            "Recognized for pioneering sustainable investment strategies that delivered both environmental impact and market-leading returns.",
        },
        {
          title: "Finance Leadership Excellence",
          organization: "International Business Awards",
          year: 2021,
          description:
            "Awarded for exemplary leadership during the global market volatility, maintaining portfolio stability while adapting to unprecedented conditions.",
        },
        {
          title: "Risk Management Pioneer",
          organization: "Risk Management Association",
          year: 2019,
          description:
            "Honored for developing an innovative risk assessment framework now adopted by multiple Fortune 500 companies.",
        },
      ],
    },
    metricSection: {
      header: "Impact",
      title: "Key Metrics",
      description:
        "Quantifiable achievements that reflect my commitment to excellence in financial leadership",
      metrics: [
        {
          metric: "$3.2B",
          description: "Portfolio value currently under strategic direction",
        },
        {
          metric: "23%",
          description: "Average operational efficiency improvement for clients",
        },
        {
          metric: "45+",
          description: "Financial analysts and managers mentored and led",
        },
        {
          metric: "17",
          description:
            "Countries with successfully implemented financial strategies",
        },
      ],
    },
    contributionSection: {
      header: "Major Projects",
      title: "Key Contributions",
      description:
        "Significant contributions to the field of finance and leadership",
      contributions: [
        {
          title: "Digital Transformation Initiative",
          year: "2020 - 2022",
          description:
            "Led a comprehensive financial systems overhaul, resulting in 31% increased efficiency and 17% cost reduction across operations.",
        },
        {
          title: "Sustainable Investment Framework",
          year: "2019 - Present",
          description:
            "Developed a proprietary ESG investment model that has outperformed traditional models by 4.2% while meeting strict sustainability criteria.",
        },
        {
          title: "Global Market Expansion",
          year: "2018 - 2020",
          description:
            "Orchestrated financial strategy for expansion into 7 new markets, with all achieving profitability within 18 months.",
        },
      ],
    },
    mediaMentionSection: {
      header: "Press",
      title: "Media Mentions",
      description: "Notable mentions in industry publications and press",
      mediaMentions: [
        {
          title: "Transforming Finance for a Sustainable Future",
          publication: "Financial Times",
          year: 2023,
          quote:
            "A visionary leader who is redefining the role of finance in the modern world.",
        },
        {
          title: "Navigating Market Volatility with Precision",
          publication: "Wall Street Journal",
          year: 2021,
          quote:
            "An expert strategist whose insights have guided organizations through turbulent times.",
        },
        {
          title: "The Future of Financial Leadership",
          publication: "Harvard Business Review",
          year: 2019,
          quote:
            "A thought leader in integrating technology and ethics into financial practices.",
        },
      ],
    },
  },
  visionContent: {
    message: {
      title: "A Personal Note",
      image: "/placeholder.svg", // References public/placeholder.svg change to your image
      quote: "The future belongs to those who can see it coming.",
      heading: "Vision",
      content:
        "Throughout my career, I've been driven by the belief that finance is not merely about numbers—it's about enabling positive transformation. The work we do as financial leaders shapes the future of organizations, communities, and ultimately, our global economy. My approach combines rigorous analysis with ethical considerations, ensuring that financial success supports broader purposes.",
      description:
        "I believe that the future of finance lies in our ability to adapt to rapid changes while maintaining a steadfast commitment to ethical practices. As we look ahead, I am excited about the possibilities that lie before us and the role we can play in shaping a more sustainable and equitable financial landscape.",
      description2:
        "My vision is to create financial systems that are not only efficient but also transparent and inclusive. I am committed to fostering an environment where all stakeholders can thrive, and where financial success is measured not just in profits, but in positive impact.",
    },
    outlookSection: {
      title: "Industry Outlook",
      description:
        "The future of financial leadership will be increasingly defined by our ability to harness vast amounts of data. Beyond simple analytics, this means developing sophisticated models that can identify patterns, predict trends, and quantify previously intangible factors.",
      outlook: [
        {
          title: "Data-Driven Finance",
          description:
            "The future of financial leadership will be increasingly defined by our ability to harness vast amounts of data. Beyond simple analytics, this means developing sophisticated models that can identify patterns, predict trends, and quantify previously intangible factors.",
          icon: "Database",
        },
        {
          title: "Ethical Investment",
          description:
            "The separation between profit and purpose is dissolving. Tomorrow's most successful financial strategies will integrate ESG considerations not as constraints but as catalysts for sustainable growth and risk mitigation.",
          icon: "Shield",
        },
        {
          title: "Adaptive Governance",
          description:
            "As regulatory landscapes evolve, financial governance must become more adaptable while maintaining consistent principles. This requires building systems that can quickly incorporate new requirements without disrupting operations.",
          icon: "Scale",
        },
      ],
    },
    statementsSection: {
      title: "Vision Statements",
      header: "Strategic Priorities",
      subTitle:
        "Core principles that guide my approach to financial leadership",
      statements: [
        {
          heading: "Transparent Systems",
          content:
            "I envision financial systems where transparency is built into the architecture—where stakeholders can access appropriate information without sacrificing security or competitive advantage.",
        },
        {
          heading: "Inclusive Growth",
          content:
            "Financial success should create value across all stakeholder groups. My vision includes financial models that quantify and optimize benefits not just for shareholders, but for employees, communities, and the environment.",
        },
        {
          heading: "Resilient Structures",
          content:
            "The organizations that thrive will be those that build financial resilience—the ability to withstand unexpected shocks while maintaining core operations and capitalizing on emerging opportunities.",
        },
      ],
    },
  },
};
export default en;
