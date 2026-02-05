# Leatile Mosimanyana Portfolio

## Overview

This is a personal portfolio website for Leatile Mosimanyana, a BSc (Hons) Computer Systems & Software Engineering graduate from Botswana. The application showcases professional experience, projects, skills, and provides a contact form for potential clients or employers.

The portfolio is a full-stack TypeScript application with a React frontend and Express backend, featuring sections for About, Timeline, Services, Skills, GitHub Stats, Projects, Testimonials, Blog, and Contact.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack Query for server state, React Context for theme and language
- **Styling**: TailwindCSS with CSS variables for theming, shadcn/ui component library
- **Build Tool**: Vite with React plugin

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **API Pattern**: RESTful endpoints under `/api` prefix
- **Development**: tsx for TypeScript execution, Vite middleware for HMR in development
- **Production**: esbuild bundles server code, static files served from dist

### Data Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` - contains users and contacts tables
- **Validation**: Zod schemas generated from Drizzle schemas using drizzle-zod
- **Storage**: Currently uses in-memory storage (`MemStorage` class), designed to be replaced with database storage

### Key Design Patterns
- **Shared Schema**: Database schemas and types defined in `/shared` directory, accessible to both client and server
- **Path Aliases**: `@/` maps to client source, `@shared/` maps to shared directory
- **Component Structure**: Feature components in `/client/src/components`, UI primitives in `/client/src/components/ui`
- **Internationalization**: Custom language context supporting English and Setswana translations

### Project Structure
```
├── client/           # React frontend
│   ├── src/
│   │   ├── components/   # Feature and UI components
│   │   ├── hooks/        # Custom React hooks
│   │   ├── lib/          # Utilities and query client
│   │   └── pages/        # Route pages
├── server/           # Express backend
│   ├── index.ts      # Server entry point
│   ├── routes.ts     # API route definitions
│   ├── storage.ts    # Data storage interface
│   └── vite.ts       # Vite dev server setup
├── shared/           # Shared types and schemas
│   └── schema.ts     # Drizzle database schema
└── migrations/       # Database migrations
```

## External Dependencies

### Database
- **PostgreSQL**: Primary database (Neon serverless driver configured)
- **Drizzle Kit**: Database migrations via `db:push` command
- **DATABASE_URL**: Required environment variable for database connection

### UI Component Library
- **shadcn/ui**: Pre-built accessible components using Radix UI primitives
- **Radix UI**: Comprehensive set of unstyled, accessible UI primitives
- **Lucide React**: Icon library
- **react-icons**: Additional icon sets (e.g., SiLinkedin)

### Frontend Libraries
- **TanStack Query**: Data fetching and caching
- **React Hook Form**: Form handling with Zod resolver
- **date-fns**: Date formatting utilities
- **class-variance-authority**: Component variant management
- **embla-carousel-react**: Carousel functionality
- **vaul**: Drawer component
- **cmdk**: Command palette component

### Backend Libraries
- **connect-pg-simple**: PostgreSQL session store (available for future session management)
- **express**: Web framework
- **zod**: Runtime validation

### Development Tools
- **Vite**: Build tool and dev server
- **esbuild**: Production server bundling
- **TypeScript**: Type checking across the stack
- **Replit plugins**: Runtime error overlay and cartographer for development