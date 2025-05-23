# Director Template

A modern, responsive Next.js template designed for directors, executives, and professionals who want to showcase their profile, achievements, and vision.

## Features

- 🎨 Clean, professional design with light/dark mode
- 📱 Fully responsive across all devices
- 🚀 Built with Next.js 15, React 19, and TailwindCSS 4
- 🧩 Component-based architecture with reusable UI components
- 🌐 Multi-section layout: Home, About, Achievements, and Vision
- 🔄 Easy content customization via data files
- 🐳 Docker support for easy deployment

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- [pnpm](https://pnpm.io/) (recommended) or npm/yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Prathamesh-Chougale-17/director-template-2.git
cd director-template-2
```

2. Install dependencies:

```bash
pnpm install
```

3. Run the development server:

```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Customization

### Content Customization

Edit the data files to customize the content:

- `data/en.ts` - Contains all the text content for the website

### Theme Customization

- Modify `globals.css` and `components.json` to adjust the theme
- Use the built-in theme toggle to switch between light and dark modes

### Component Customization

All components are organized in the `components/` directory:

- `components/home/` - Hero section, highlights, and quote ticker
- `components/about/` - Profile, expertise, philosophy, and timeline
- `components/achievements/` - Awards, contributions, media mentions, and metrics
- `components/vision/` - Mission, statements, outlook, and messages
- `components/ui/` - Reusable UI components like buttons, cards, etc.

## Building for Production

To build the application for production:

```bash
pnpm build
```

To start the production server:

```bash
pnpm start
```

## Docker Deployment

This template includes Docker support for containerized deployment.

### Prerequisites for Docker Deployment

1. **Enable Standalone Output in Next.js Config**:

   Ensure that your `next.config.ts` file has the `output: "standalone"` option enabled:

   ```typescript
   // next.config.ts
   import type { NextConfig } from "next";

   const nextConfig: NextConfig = {
     /* config options here */
     output: "standalone",
   };

   export default nextConfig;
   ```

   This setting is critical for Docker deployment as it creates a standalone build that includes all dependencies.

### Building the Docker Image

```bash
docker build -t director-template .
```

### Running with Docker

```bash
docker run -p 3000:3000 director-template
```

### Using Docker Compose

```bash
docker-compose up
```

This will start the application on [http://localhost:3000](http://localhost:3000).

## Deployment Options

### Vercel (Recommended)

Vercel is the preferred platform for deploying Next.js applications, offering seamless integration and optimal performance.

#### Deployment Steps

1. **Fork the Repository**
   - Fork this repository to your GitHub account
   - Make your customizations (content, styling, etc.)
   - Commit your changes

2. **Connect to Vercel**
   - Create or log in to your [Vercel account](https://vercel.com/)
   - Click "Import Project" or "New Project"
   - Select your forked repository

3. **Configure Project**

   ```
   Project Name: your-project-name
   Framework: Next.js (auto-detected)
   Root Directory: ./
   Build Command: pnpm build
   ```

4. **Deploy**
   - Click "Deploy"
   - Vercel will build and deploy your site
   - You'll receive a deployment URL (e.g., <https://your-project.vercel.app>)

#### Custom Domain Setup

1. Go to your project dashboard in Vercel
2. Navigate to "Settings" → "Domains"
3. Add your custom domain and follow verification instructions

#### Continuous Deployment

After connecting your repository:

- Push to main branch → Updates production site
- Create pull requests → Generates preview deployments

#### Quick Deployment via CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to your account
vercel login

# Deploy from your project directory
vercel

# For production deployment
vercel --prod
```

### Other Platforms

You can deploy to any platform that supports Next.js applications:

- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Self-hosted with Docker

## Project Structure

```
director-template-2/
├── app/                   # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── about/             # About section
│   ├── achievements/      # Achievements section
│   └── vision/            # Vision section
├── components/            # React components
│   ├── home/              # Home page components
│   ├── about/             # About page components
│   ├── achievements/      # Achievements page components
│   ├── vision/            # Vision page components
│   ├── layout/            # Layout components
│   └── ui/                # Reusable UI components
├── data/                  # Content data files
├── lib/                   # Utility functions
├── public/                # Static assets
├── types/                 # TypeScript type definitions
├── Dockerfile             # Docker configuration
├── docker-compose.yml     # Docker Compose configuration
└── next.config.ts         # Next.js configuration
```

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [React](https://react.dev/) - UI library
- [TailwindCSS](https://tailwindcss.com/) - CSS framework
- [Radix UI](https://www.radix-ui.com/) - Headless UI components
- [Docker](https://www.docker.com/) - Containerization

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Design inspired by modern professional portfolios
- Icons from [Lucide React](https://lucide.dev/)
- UI components from [Radix UI](https://www.radix-ui.com/)
