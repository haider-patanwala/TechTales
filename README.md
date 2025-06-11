# TechTales

TechTales is a modern web application built with Next.js, Tailwind CSS, and powered by Contentstack CMS for content management.

## Tech Stack

This project uses the following technologies:

- **[Next.js](https://nextjs.org)** - React framework for production
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS framework
- **[Contentstack](https://www.contentstack.com)** - Headless CMS for content management
- **[TypeScript](https://www.typescriptlang.org)** - Type-safe JavaScript
- **[Biome](https://biomejs.dev)** - Fast formatter and linter

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) (version 18 or later) and [Bun](https://bun.sh/) installed on your machine.

### Installation

1. Clone the repository:

```bash
git clone <your-repository-url>
cd TechTales
```

2. Install dependencies:

```bash
bun install
```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add your Contentstack credentials:

```env
# Contentstack Configuration
CONTENTSTACK_API_KEY=your_api_key_here
CONTENTSTACK_DELIVERY_TOKEN=your_delivery_token_here
CONTENTSTACK_ENVIRONMENT=your_environment_here
```

### Running the Application

#### Development Mode

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

#### Production Build

```bash
bun run build
bun run start
```

#### Preview Build

```bash
bun run preview
```

### Additional Scripts

- `bun run typecheck` - Run TypeScript type checking
- `bun run check` - Run Biome linter and formatter checks
- `bun run check:write` - Auto-fix linting and formatting issues
- `bun run check:unsafe` - Apply unsafe auto-fixes

## Project Structure

```
src/
├── app/          # Next.js app directory
├── components/   # Reusable UI components
├── lib/          # Utility functions and configurations
└── styles/       # Global styles and Tailwind configurations
```

## Contentstack Setup

This project uses Contentstack as a headless CMS. To set up content:

1. Create a Contentstack account at [contentstack.com](https://www.contentstack.com)
2. Create a new stack
3. Get your API Key, Delivery Token, and Environment from the stack settings
4. Add these credentials to your `.env.local` file

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Learn about utility-first CSS
- [Contentstack Documentation](https://www.contentstack.com/docs) - Learn about headless CMS

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Deployment

This Next.js application can be deployed on various platforms:

- **[Vercel](https://vercel.com)** (Recommended) - Zero-configuration deployment
- **[Netlify](https://netlify.com)** - JAMstack deployment platform
- **[AWS](https://aws.amazon.com)** - Cloud deployment with various services

For Vercel deployment, simply connect your GitHub repository and Vercel will automatically deploy your application.
