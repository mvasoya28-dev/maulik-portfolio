# Maulik Vasoya - SEO Portfolio Website

A modern, responsive Next.js portfolio website showcasing SEO consulting projects and expertise.

## Features

- 🎨 **Dark/Light Theme Toggle** - Seamless theme switching with persistent preferences
- 📱 **Fully Responsive** - Mobile-first design with Tailwind CSS
- ✨ **Smooth Animations** - Framer Motion animations for enhanced user experience
- 🖼️ **Animated Images** - All images feature smooth fade-in and hover effects
- 📄 **Three Main Pages**:
  - Landing Page (`/`) - Professional profile and expertise
  - Projects Page (`/projects`) - Project showcase grid
  - Project Info Page (`/projects-info`) - Detailed project information

## Tech Stack

- **Next.js 14** - React framework with TypeScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **next-themes** - Theme management

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Add project images to `public/images/`:
   - `flipkart-seller-hub.jpg`
   - `aum-pharmacy.jpg`
   - `shopsy.jpg`

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── components/
│   ├── AnimatedImage.tsx    # Reusable animated image component
│   ├── Navbar.tsx           # Navigation bar component
│   └── ThemeToggle.tsx      # Dark/light theme toggle
├── data/
│   ├── projects.ts          # Project data
│   ├── skills.ts            # Skills data
│   └── tools.ts             # Tools data
├── pages/
│   ├── _app.tsx             # App wrapper with theme provider
│   ├── index.tsx            # Landing page
│   ├── projects.tsx         # Projects listing page
│   └── projects-info.tsx    # Individual project details
├── public/
│   └── images/              # Project images directory
├── styles/
│   └── globals.css          # Global styles with Tailwind
└── types/
    └── index.ts             # TypeScript type definitions
```

## Adding Images

Place your project images in the `public/images/` directory with the following names:
- `flipkart-seller-hub.jpg` - For Flipkart Seller Hub project
- `aum-pharmacy.jpg` - For AUM Pharmacy project
- `shopsy.jpg` - For Shopsy project

## Customization

### Adding New Projects

Edit `data/projects.ts` to add new projects. Each project should follow the `Project` interface defined in `types/index.ts`.

### Modifying Theme Colors

Edit `tailwind.config.ts` to customize the color scheme for both light and dark modes.

### Adjusting Animations

Modify animation variants in individual page components or update `AnimatedImage.tsx` for global image animations.

## Build for Production

```bash
npm run build
npm start
```

## Contact

- Email: mvasoya28@gmail.com
- Phone: +91 7900006467

