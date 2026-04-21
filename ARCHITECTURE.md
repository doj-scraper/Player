# Architecture Overview

This document describes the architecture of the React + TypeScript + Vite application.

## Tech Stack

- **Frontend Framework**: React 18+
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Package Manager**: npm
- **Deployment**: Vercel

## Project Structure

```
├── public/                 # Static assets
│   └── vite.svg
├── src/                    # Source code
│   ├── assets/             # Images, icons, etc.
│   │   └── react.svg
│   ├── components/         # Reusable UI components
│   ├── App.tsx            # Main application component
│   ├── index.css          # Global styles
│   └── main.tsx           # Entry point
├── .gitignore             # Git ignore configuration
├── index.html             # HTML template
├── package-lock.json      # Lock file for dependencies
├── package.json           # Project metadata and scripts
├── postcss.config.js      # PostCSS configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## Key Components

### Build System
- Uses Vite for fast development and optimized builds
- Leverages ES modules for faster hot module replacement
- Includes TypeScript compilation and type checking
- Integrates Tailwind CSS for utility-first styling

### Development Workflow
- Hot Module Replacement (HMR) during development
- Type checking with TypeScript
- Linting and formatting with ESLint and Prettier
- Production builds with code splitting and optimization

### Styling Approach
- Tailwind CSS for utility-first styling
- Component-focused styling approach
- Responsive design utilities built-in
- Custom theme configuration in `tailwind.config.js`

## Deployment Configuration

The project is configured for deployment on Vercel:
- Automatic deployments from Git
- Optimized builds with Vite
- Proper handling of static assets
- Environment variable support