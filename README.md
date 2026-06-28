# Rotaract LIA - MAYON Theme Website

A premium, award-winning quality website for Rotaract LIA, featuring modern design, advanced animations, and complete responsiveness.

## Features

### 🎨 Design & Aesthetics
- **Premium Design Language**: Glassmorphism, aurora gradients, and glowing effects
- **Peacock-Inspired Color Palette**: Deep blues, emerald, cyan, teal, gold accents
- **Luxury Typography**: Playfair Display, Poppins, and Outfit fonts
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop
- **Dark Mode Support**: Seamless light/dark mode with smooth transitions

### ✨ Advanced Animations
- **Framer Motion**: Smooth page transitions, hover effects, scroll animations
- **GSAP**: Professional animation library integration
- **Lenis Smooth Scroll**: Buttery smooth scroll experience
- **AOS Animations**: Intersection observer-based reveal animations
- **Swiper.js**: Touch-friendly carousel components

### 📱 Sections Included
1. **Hero Section** - Full-screen landing with animated particles
2. **About** - Vision, mission, core values with glassmorphism cards
3. **Board Members** - Leadership showcase with flip animations
4. **Club Members** - Searchable and filterable member grid with pagination
5. **Projects** - Impact initiatives with category filtering
6. **Events** - Upcoming and past events timeline
7. **Achievements** - Awards and milestones timeline
8. **Gallery** - Masonry grid with lightbox
9. **Scrapbook** - Memory timeline with flip animations
10. **Posters & Newsletters** - Magazine-style showcase
11. **Testimonials** - Carousel with ratings
12. **Partners** - Sponsors and partner organizations
13. **FAQ** - Accordion-style questions
14. **Downloads** - Resources and documents
15. **Contact** - Form with EmailJS integration
16. **Footer** - Comprehensive site footer

### 🔧 Technical Stack
- **Framework**: Next.js 16 + React 19
- **Styling**: Tailwind CSS v4 + Custom CSS
- **Animations**: Framer Motion + GSAP
- **Scroll**: Lenis smooth scroll
- **Forms**: React Hook Form + Zod validation
- **Icons**: React Icons + Lucide React
- **Carousels**: Swiper.js
- **Theme**: next-themes for dark mode
- **3D (Optional)**: Three.js with React Three Fiber

### 🎯 Performance Targets
- Lighthouse Score: 100/100
- Performance: 100
- Accessibility: 100
- Best Practices: 100
- SEO: 100

### 📊 SEO Optimization
- Meta tags and OpenGraph cards
- Schema.org JSON-LD structured data
- Sitemap and robots.txt
- Canonical URLs
- Image alt attributes
- Semantic HTML
- Fast page load times

## Installation

### Prerequisites
- Node.js 18+
- pnpm (recommended) or npm

### Setup Steps

```bash
# 1. Install dependencies
pnpm install

# 2. Create environment variables (if needed)
cp .env.example .env.local

# 3. Run development server
pnpm dev

# 4. Open browser
# Visit http://localhost:3000
```

## Development

### Running the Dev Server
```bash
pnpm dev
```

### Building for Production
```bash
pnpm build
pnpm start
```

### Code Quality
```bash
# Linting
pnpm lint

# Type checking
pnpm type-check
```

## Project Structure

```
├── app/
│   ├── page.tsx              # Main landing page
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   ├── navigation/           # Navigation components
│   ├── sections/             # Page sections
│   ├── layout/               # Layout components
│   ├── ui/                   # Reusable UI components
│   └── providers/            # Context providers
├── public/
│   ├── hero-group-photo.png  # Hero background
│   ├── members/              # Member images
│   ├── projects/             # Project images
│   ├── gallery/              # Gallery images
│   └── testimonials/         # Testimonial images
├── lib/
│   └── utils.ts              # Utility functions
└── package.json              # Dependencies
```

## Key Components

### Providers
- **Lenis Smooth Scroll**: Enabled globally for smooth scrolling
- **next-themes**: Dark mode provider with system preference detection
- **Intersection Observer**: For lazy loading and animations

### Sections
Each section component uses:
- Framer Motion for animations
- React Intersection Observer for triggers
- Responsive grid layouts
- Glassmorphism effects
- Gradient overlays

## Color System

### Light Mode
- Background: #ffffff
- Foreground: #0a1929
- Primary: #2d7bce (Deep Blue)
- Secondary: #1b8a6b (Emerald)
- Accent: #d4af37 (Gold)

### Dark Mode
- Background: #0a1929
- Foreground: #f0f4f8
- Primary: #4da6ff (Light Blue)
- Secondary: #2ec4b6 (Teal)
- Accent: #d4af37 (Gold)

## Customization

### Changing Colors
Edit `/app/globals.css` CSS variables section:
```css
:root {
  --primary: #2d7bce;
  --secondary: #1b8a6b;
  --accent: #d4af37;
}
```

### Modifying Fonts
Update in `/app/layout.tsx`:
```tsx
import { Playfair_Display, Poppins, Outfit } from 'next/font/google'
```

### Adding New Sections
1. Create component in `/components/sections/`
2. Import in `/app/page.tsx`
3. Add to main content area

## Performance Optimization

- Image lazy loading via Intersection Observer
- Code splitting with dynamic imports
- CSS optimization with Tailwind
- Font optimization with Google Fonts
- Minified and optimized builds

## Accessibility

- WCAG 2.1 AA compliant
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader friendly
- High contrast colors

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

### Vercel (Recommended)
```bash
# Connect GitHub repository to Vercel
# Automatic deployments on push
```

### Alternative Platforms
- Netlify
- AWS Amplify
- GitHub Pages (with `next export`)

## Environment Variables

Create `.env.local`:
```env
# EmailJS Configuration (optional)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

# Site URL
NEXT_PUBLIC_SITE_URL=https://rotaractlia.org
```

## Analytics & Monitoring

- Integrated with Vercel Analytics
- Ready for Google Analytics
- Performance monitoring built-in

## Support & Maintenance

For issues, improvements, or feature requests:
1. Check existing documentation
2. Review component examples
3. Test in development mode
4. Submit feedback with details

## License

© 2024 Rotaract LIA. All rights reserved.

## Credits

- Design Inspiration: Modern luxury and award-winning websites
- Icons: Lucide React + React Icons
- Animations: Framer Motion + GSAP
- Framework: Next.js and React ecosystem

---

**Last Updated**: December 2024
**Version**: 1.0.0
