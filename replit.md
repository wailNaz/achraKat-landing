# Overview

AchraKat (أشرقت) is a modern Arabic e-commerce and partnership platform designed for the Saudi Arabian market. The application serves as a comprehensive shopping platform that connects customers with merchants while providing opportunities for business partnerships. The platform features a sophisticated landing page with sections for product showcasing, partner registration, customer testimonials, and contact forms, all optimized for Arabic (RTL) layout and cultural preferences.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The client-side is built using modern React with TypeScript, implementing a component-based architecture. The application uses Vite as the build tool and development server, providing fast hot module replacement and optimized builds. The UI is constructed using shadcn/ui components built on top of Radix UI primitives, ensuring accessibility and consistent design patterns.

**Key Frontend Decisions:**
- **React with TypeScript**: Chosen for type safety and better developer experience
- **Vite**: Selected over Create React App for faster development builds and better ESM support
- **shadcn/ui + Radix UI**: Provides accessible, customizable components with consistent design system
- **Tailwind CSS**: Enables rapid styling with utility-first approach and built-in responsive design
- **Framer Motion**: Added for smooth animations and transitions throughout the landing page
- **Wouter**: Lightweight client-side routing solution instead of React Router for smaller bundle size

## Backend Architecture
The server follows a traditional Express.js architecture with TypeScript support. The application implements a minimal API structure with placeholder routes, using an in-memory storage pattern that can be easily replaced with database integration.

**Key Backend Decisions:**
- **Express.js**: Mature, well-documented framework with extensive middleware ecosystem
- **TypeScript**: Provides type safety across the entire stack
- **Modular Route Structure**: Separates routing logic for better organization and maintainability
- **Storage Interface Pattern**: Abstracts data operations to allow easy database integration

## Data Storage Design
Currently implements an in-memory storage system with a clean interface that supports easy migration to PostgreSQL. The schema is defined using Drizzle ORM with Zod validation.

**Key Storage Decisions:**
- **Drizzle ORM**: Modern TypeScript-first ORM with excellent developer experience
- **PostgreSQL**: Prepared for production use with robust relational data handling
- **Zod Validation**: Ensures data integrity at the schema level
- **Interface Pattern**: Allows switching between memory and database storage without code changes

## Styling and Theming System
The application uses a comprehensive design system with CSS custom properties for theming, supporting both light and dark modes. The color palette is specifically chosen for the AchraKat brand with Arabic cultural considerations.

**Key Styling Decisions:**
- **CSS Custom Properties**: Enables dynamic theming and easy customization
- **Arabic Typography**: Google Fonts (Cairo, Tajawal) optimized for Arabic text rendering
- **RTL Layout Support**: Built-in right-to-left layout support for Arabic content
- **Responsive Design**: Mobile-first approach with consistent breakpoints

## Component Architecture
The application follows a structured component hierarchy with clear separation between UI components, page sections, and business logic components.

**Component Organization:**
- **UI Components**: Reusable, composable components in `/components/ui/`
- **Section Components**: Page-specific sections in `/components/sections/`
- **Custom Hooks**: Shared logic in `/hooks/`
- **Pages**: Top-level route components in `/pages/`

# External Dependencies

## Core Framework Dependencies
- **React 18**: Frontend framework with concurrent features
- **Express.js**: Backend web framework
- **TypeScript**: Type system for both frontend and backend
- **Vite**: Build tool and development server

## UI and Styling Dependencies
- **@radix-ui/***: Accessible UI primitives (accordion, avatar, dialog, dropdown, etc.)
- **Tailwind CSS**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **clsx & tailwind-merge**: Conditional CSS class handling
- **Framer Motion**: Animation library for React
- **Lucide React**: Icon library with consistent design

## Database and Validation
- **Drizzle ORM**: TypeScript ORM for database operations
- **@neondatabase/serverless**: Neon database driver for PostgreSQL
- **Zod**: Schema validation library
- **drizzle-zod**: Integration between Drizzle and Zod

## Data Fetching and State Management
- **@tanstack/react-query**: Server state management and caching
- **React Hook Form**: Form handling and validation
- **@hookform/resolvers**: Resolvers for form validation

## Development and Build Tools
- **tsx**: TypeScript execution for development
- **esbuild**: Fast JavaScript bundler for production builds
- **PostCSS & Autoprefixer**: CSS processing and vendor prefixing

## Additional Utilities
- **date-fns**: Date manipulation library
- **nanoid**: Unique ID generation
- **wouter**: Lightweight routing for React
- **cmdk**: Command palette component
- **embla-carousel-react**: Carousel/slider component

## Google Fonts Integration
- **Cairo & Tajawal**: Arabic-optimized font families loaded via Google Fonts CDN for proper Arabic text rendering and cultural appropriateness