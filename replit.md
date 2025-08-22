# Artist Portfolio Website

## Overview

This is a full-stack artist portfolio and e-commerce website built with React, TypeScript, Express.js, and PostgreSQL. The application showcases minimalist artwork with a focus on modern design aesthetics, featuring a yellow/warm color palette. It includes sections for browsing artwork, purchasing pieces, viewing past works, artist services for other creatives, and contact information. The site supports both original artwork sales and print reproductions, with a complete shopping cart and checkout experience.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The frontend is built with **React 18** and **TypeScript**, using **Vite** as the build tool. The application follows a modern component-based architecture with:

- **UI Framework**: shadcn/ui components built on Radix UI primitives for accessibility and consistency
- **Styling**: Tailwind CSS with custom design tokens and CSS variables for theming
- **Routing**: React Router for client-side navigation with dedicated pages for different sections
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Form Handling**: React Hook Form with Zod validation for type-safe form processing

The design system uses a warm, minimalist aesthetic with yellow accents (`--primary: 48 100% 67%`) and neutral backgrounds, implemented through CSS custom properties for consistent theming.

### Backend Architecture
The backend uses **Express.js** with **TypeScript** in ESM format, providing:

- **API Layer**: RESTful API endpoints with `/api` prefix for clean separation
- **Storage Interface**: Modular storage system with `IStorage` interface, currently implemented with in-memory storage (`MemStorage`) but designed for easy database integration
- **Middleware**: Request logging, JSON parsing, and error handling middleware
- **Development Setup**: Vite integration for HMR during development, with separate production build process

### Data Storage Solutions
The application is architected for **PostgreSQL** integration using:

- **ORM**: Drizzle ORM for type-safe database operations and migrations
- **Schema Management**: Centralized schema definitions in TypeScript with Zod validation
- **Current Implementation**: Memory-based storage for development, with full database configuration ready
- **Migration System**: Drizzle Kit for database schema management and version control

### Database Schema
The initial schema includes:
- **Users table**: Basic user management with username/password authentication
- **Extensible Design**: Schema structure ready for artwork, orders, and inventory management

### Authentication and Authorization
The foundation is laid for session-based authentication using:
- **Session Storage**: PostgreSQL session store with `connect-pg-simple`
- **User Management**: Basic user model with secure password handling
- **Scalable Design**: Architecture supports role-based access control for artist/customer distinction

## External Dependencies

### Core Framework Dependencies
- **@neondatabase/serverless**: PostgreSQL serverless driver for database connectivity
- **drizzle-orm**: Type-safe ORM for database operations and query building
- **drizzle-zod**: Integration between Drizzle schema and Zod validation

### UI and Design Dependencies
- **@radix-ui/***: Comprehensive set of accessible UI primitives (dialogs, dropdowns, forms, etc.)
- **tailwindcss**: Utility-first CSS framework for responsive design
- **class-variance-authority**: Type-safe utility for managing component variants
- **lucide-react**: Modern icon library with consistent design language

### Development and Build Tools
- **vite**: Fast build tool with HMR support and optimized production builds
- **tsx**: TypeScript execution engine for development server
- **esbuild**: High-performance bundler for production builds

### State Management and Forms
- **@tanstack/react-query**: Server state management with caching and synchronization
- **react-hook-form**: Performant form library with minimal re-renders
- **@hookform/resolvers**: Integration between React Hook Form and validation libraries

### Additional Utilities
- **date-fns**: Comprehensive date manipulation library
- **embla-carousel-react**: Touch-friendly carousel component for artwork galleries
- **cmdk**: Command palette component for enhanced user experience