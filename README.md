# Ganesh's Portfolio

🔗 **Live Link:** [ganesh-myportfolio.vercel.app](https://ganesh-myportfolio.vercel.app/)

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Showcasing my skills in software development, databases, cloud infrastructure, and full-stack development.

## 🚀 Features

- **Modern Design**: Built with shadcn/ui components and Tailwind CSS for a clean, professional look
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: Framer Motion powered animations for engaging user experience
- **Dark Mode Support**: Theme switching with next-themes
- **Form Handling**: React Hook Form with Zod validation
- **Email Integration**: EmailJS for contact form submissions
- **Data Fetching**: TanStack React Query for efficient API calls
- **Routing**: React Router for navigation
- **Charts & Visualization**: Recharts for data visualization
- **Type-Safe**: Full TypeScript support
- **GitHub Integration**: React GitHub Calendar component

## 🛠️ Tech Stack

### Frontend Framework
- **React** (v18.3) - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Lightning-fast build tool
- **React Router** (v6.30) - Client-side routing

### UI & Styling
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icons
- **Next-themes** - Theme management

### Form & Validation
- **React Hook Form** - Efficient form state management
- **Zod** - TypeScript-first schema validation
- **@hookform/resolvers** - Form validation resolvers

### Data & Communication
- **TanStack React Query** - Server state management
- **EmailJS** - Email service integration
- **Recharts** - React charting library
- **React GitHub Calendar** - GitHub activity visualization

### Development Tools
- **ESLint** - Code quality
- **TypeScript ESLint** - TypeScript linting
- **Vitest** - Unit testing framework
- **Tailwind CSS** - Styling system
- **PostCSS** - CSS processing

## 📦 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd My-Portfolio
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173` (or the port shown in your terminal).

### Building

Build for production:
```bash
npm run build
```

Build in development mode:
```bash
npm run build:dev
```

### Deployment

Deploy to GitHub Pages:
```bash
npm run deploy
```

This uses gh-pages to deploy the `dist` folder to your GitHub Pages.

## 📋 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with hot module reloading |
| `npm run build` | Build optimized production bundle |
| `npm run build:dev` | Build in development mode with source maps |
| `npm run lint` | Run ESLint to check code quality |
| `npm run preview` | Preview production build locally |
| `npm run test` | Run tests once |
| `npm run test:watch` | Run tests in watch mode |
| `npm run deploy` | Deploy to GitHub Pages |

## 📁 Project Structure

```
src/
├── components/        # Reusable React components
├── pages/            # Page components (Index, NotFound)
├── hooks/            # Custom React hooks
├── lib/              # Utility functions and helpers
├── App.tsx           # Main application component
├── main.tsx          # Application entry point
├── App.css           # Global styles
└── index.css         # Base styles
```

## 🎨 UI Components

The project uses shadcn/ui components including:
- Accordion, Alert Dialog, Avatar, Checkbox
- Dialog, Dropdown Menu, Forms, Hover Card
- Navigation Menu, Popover, Progress, Select
- Slider, Tabs, Toast/Toaster, Toggle
- And many more...

## 🔧 Configuration

- **Vite Config**: `vite.config.ts`
- **TypeScript Config**: `tsconfig.json` (for app) and `tsconfig.node.json` (for dev)
- **Tailwind Config**: `tailwind.config.ts`
- **ESLint Config**: `eslint.config.js`
- **PostCSS Config**: `postcss.config.js`
- **Vitest Config**: `vitest.config.ts`

## 📧 Contact

For inquiries or feedback, please use the contact form on the portfolio website.

## 📄 License

This project is open source and available under the MIT License.

---

Built with ❤️ by Ganesh
