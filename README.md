# [Shadcn Table](https://table.sadmn.com)

This is a shadcn table with server-side sorting, filtering, and pagination. It is bootstrapped with `create-t3-app`.

[![Shadcn Table](./public/images/screenshot.png)](https://table.sadmn.com)

> **Warning**
> This project is still in development and is not ready for production use.
>
> It uses new technologies (ppr, react compiler) which are subject to change and may break your application.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org)
- **Styling:** [Tailwind CSS](https://tailwindcss.com)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com)
- **Table package:** [TanStack/react-table](https://tanstack.com/table/latest)
- **Database:** [Neon](https://neon.tech)
- **ORM:** [Drizzle ORM](https://orm.drizzle.team)
- **Validation:** [Zod](https://zod.dev)

## Features

- [x] Server-side pagination, sorting, and filtering (via `useDataTable` hook)
- [x] Customizable columns (`dataTable` and `columns` props)
- [x] Dynamic debounced search filters, and faceted filters (`filterFields` prop)
- [x] Dynamic `Data-Table-Toolbar` with search, filters, and actions
- [x] Optional `Notion` like advanced filtering (`enableAdvancedFilter` prop)
- [x] Optional `Linear` like floating bar on row selection (`floatingBar` prop)

## Running Locally

1. Clone the repository

   ```bash
   git clone https://github.com/sadmann7/shadcn-table
   ```

2. Install dependencies using pnpm

   ```bash
   pnpm install
   ```

3. Copy the `.env.example` to `.env` and update the variables.

   ```bash
   cp .env.example .env
   ```

4. (Optional) Run database using docker-compose.yml file

   ```bash
   docker compose up
   ```

5. Push the database schema

   ```bash
   pnpm run db:push
   ```

6. Seed the database

   ```bash
   pnpm run db:seed
   ```

7. Start the development server

   ```bash
   pnpm run dev
   ```

## Build your own Table

1. Copy the following folders and files into your project (configured with ) at the exact specific locations

   - `src/components/data-table`
   - `src/db/index.ts`
   - `src/hooks`
   - `src/lib`
   - `src/types`

   Also install the required shadcn components and other required packages with the following commands:

   ```bash
   pnpm dlx shadcn@latest init

   pnpm dlx shadcn@latest add badge button calendar checkbox command dialog dropdown-menu form input label popover select separator skeleton sonner table toggle-group tooltip drawer

   pnpm add drizzle-orm postgres @tanstack/react-table zod @t3-oss/env-nextjs
   pnpm add -D drizzle-kit dotenv-cli pg tsx
   ```

2. Configure your Environment Variables
   Then set up the Database URL, for this example, we're using PlanetScale MySQL2 Database. Our schemas will also be made using this.

3. Database Actions: For this you can use any ORM of your choice, but for the sake of this particular example, we're using [Drizzle ORM](https://orm.drizzle.team) and [Neon](https://neon.tech/).

   As an example, lets use the `tasks` table.

   - Create the Table Schema at `@/db/schema.ts`
   - Create the associated zod validations `@/lib/validations/tasks.ts` file

4. Setting up the Table

   - **Create Files**: Create `page.tsx` and, if needed, `layout.tsx` in your app directory.
   - **Copy Directories**: Copy `./_components` and `./_lib` directories into your project.
   - **Update Queries/Mutations**: Modify `./_lib/queries.ts`, and `./_lib/actions.ts` to match your database operations.
   - **Update Floating Bar**: Update `./_components/tasks-table-floating-bar.tsx` to match your table's actions (optional).
   - **Define Table Columns**: Update `./_components/tasks-table-columns.tsx` to define column headers, actions, searchable and filterable columns.
   - **Setup Data Fetching**: In `./page.tsx`, define `getTasksPromise`, `getTaskCountByStatus`, and `getTaskCountByPriority`.
   - **Fetch Data**: In `./_components/tasks-table.tsx`, consume the `getTasksPromise` promise using the `React.use` hook. The promise is passed to trigger the `suspense` boundary.
   - **Memoize Table Columns**: In `./_components/tasks-table.tsx`, memoize columns defined in `./_components/tasks-table-columns.tsx` using `React.useMemo` hook to prevent unnecessary re-renders.
   - **Use Data Table Hook**: In `./_components/tasks-table.tsx`, call `./hooks/useTasksTable.tsx` hook to handle server-side pagination, sorting, and filtering.
   - **Remove Tasks Table Provider**: Make sure to remove the provider from `./components/tasks-table-provider.tsx`. The provider is used to showcase some additional features like floating bar and advanced filters.

## Codebase Overview

Watch the codebase overview video on [YouTube](https://www.youtube.com/watch?v=BsvjF5Y6-C8&t=1s).

Consider subscribing to Kavin Desi Valli's [YouTube channel](https://www.youtube.com/@livecode247) for more videos.

## How do I deploy this?

Follow the deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.


# **Tech Stack Summary**

## **Core Technologies**

### **Next.js (v15.1.6)**

* Purpose: A React framework for building server-rendered applications  
* Features Used:  
* App Router (modern routing system)  
* Server Components (RSC)  
* Server-side rendering (SSR)  
* API routes  
* File-based routing

### **React (v19.0.0)**

* Purpose: JavaScript library for building user interfaces  
* Features Used:  
* Functional components  
* React Hooks (useState, useEffect, useMemo)  
* Suspense for loading states  
* Server Components

### **TypeScript**

* Purpose: Strongly-typed JavaScript superset  
* Features Used:  
* Type interfaces for components and data  
* Type safety for database schema  
* Strict type checking  
* Type inference

## **Database & Data Management**

### **PostgreSQL**

* Purpose: Relational database system  
* Features Used:  
* Tables for storing structured data  
* Relationships between data entities

### **Drizzle ORM (v0.40.0)**

* Purpose: TypeScript ORM for SQL databases  
* Features Used:  
* Schema definition with type safety  
* Query building  
* Migrations  
* Database seeding  
* Type inference for database entities

## **UI Components & Styling**

### **Shadcn UI**

* Purpose: Component library built on Radix UI primitives  
* Features Used:  
* Pre-built accessible components  
* Customizable design system  
* Component composition

### **Radix UI**

* Purpose: Unstyled, accessible UI primitives  
* Components Used:  
* Dialog  
* Dropdown Menu  
* Checkbox  
* Select  
* Popover  
* Toggle  
* Tooltip  
* Separator

### **Tailwind CSS (v4.0.12)**

* Purpose: Utility-first CSS framework  
* Features Used:  
* Responsive design utilities  
* Component styling  
* Dark mode support  
* Animation utilities

### **Tailwind Merge & Class Variance Authority**

* Purpose: Tools for managing Tailwind class names  
* Features Used:  
* Conditional class application  
* Component variants  
* Class name merging

## **Data Table & Advanced UI**

### **TanStack Table (v8.20.6)**

* Purpose: Headless UI for building powerful tables  
* Features Used:  
* Sorting  
* Filtering  
* Pagination  
* Row selection  
* Column visibility  
* Column pinning

### **DND Kit**

* Purpose: Drag and drop toolkit for React  
* Features Used:  
* Sortable elements  
* Drag and drop functionality  
* Modifiers for drag behavior

## **Form Handling & Validation**

### **React Hook Form (v7.54.2)**

* Purpose: Form state management and validation  
* Features Used:  
* Form validation  
* Form state management  
* Error handling

### **Zod (v3.24.1)**

* Purpose: TypeScript-first schema validation  
* Features Used:  
* Form validation  
* API input validation  
* Type inference from schemas

## **Additional Libraries**

### **Date-fns (v4.1.0)**

* Purpose: Date manipulation library  
* Features Used:  
* Date formatting  
* Date calculations  
* Date range handling

### **Lucide React (v0.482.0)**

* Purpose: Icon library  
* Features Used:  
* UI icons  
* Customizable icon components

### **Next Themes (v0.4.4)**

* Purpose: Theme management for Next.js  
* Features Used:  
* Dark/light mode switching  
* Theme persistence

### **Sonner (v2.0.0)**

* Purpose: Toast notifications  
* Features Used:  
* User feedback notifications  
* Success/error messages

### **NUQS (v2.3.1)**

* Purpose: URL state management  
* Features Used:  
* Serializing state to URL parameters  
* Parsing URL parameters into state

## **Development Tools**

### **Biome (v1.9.4)**

* Purpose: JavaScript/TypeScript linter and formatter  
* Features Used:  
* Code linting  
* Code formatting  
* Code quality checks

### **PNPM (v9.15.4)**

* Purpose: Fast, disk-space efficient package manager  
* Features Used:  
* Dependency management  
* Script running

## **Project Architecture**

The project follows a modern Next.js App Router structure with:

1. src/app/ \- Contains page components and routing  
2. src/components/ \- Reusable UI components  
   1. data-table/ \- Advanced table components  
   2. ui/ \- Shadcn UI components  
   3. layouts/ \- Layout components  
3. src/db/ \- Database schema and utilities  
4. src/lib/ \- Utility functions and helpers  
5. src/hooks/ \- Custom React hooks  
6. src/types/ \- TypeScript type definitions  
7. src/styles/ \- Global styles

## **Application Features**

The application appears to be a task management system with:

1. Data Table \- Advanced table for displaying and managing tasks  
2. Filtering \- Complex filtering capabilities for tasks  
3. Sorting \- Sorting tasks by various properties  
4. CRUD Operations \- Creating, reading, updating, and deleting tasks  
5. Feature Flags \- Toggling features like advanced table and floating bar  
6. Date Range Picking \- Filtering tasks by date ranges  
7. Responsive Design \- Mobile-friendly UI

This tech stack represents a modern, type-safe, and component-based approach to web development, focusing on performance, accessibility, and developer experience.

## **Add new column**
Now I have a good understanding of the project structure. Let's add a new column called "dueDate" to the tasks table. This will involve several steps:

1. Update the database schema
2. Update the validation schemas
3. Update the form components
4. Update the table columns
5. Update the actions