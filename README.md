# EmreVisuals

A modern, multilingual portfolio website for videography and creative visual storytelling.

![EmreVisuals](https://img.shields.io/badge/Status-Active-success)
![React](https://img.shields.io/badge/React-19.2.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue)

## Features

- **Multilingual Support**: Available in Dutch, English, French, German, Russian, and Turkish
- **Modern Design**: Dark theme with smooth animations using Framer Motion
- **Responsive**: Fully responsive design that works on all devices
- **Portfolio Gallery**: Filterable gallery with photos and videos
- **Contact Form**: Interactive contact form with email integration
- **Fast Performance**: Built with Vite for optimal loading speeds

## Tech Stack

- **React 19** - Modern UI library
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool
- **React Router** - Client-side routing
- **Framer Motion** - Smooth animations
- **i18next** - Internationalization
- **CSS3** - Custom styling with CSS variables

## Project Structure

```
emrevisuals/
├── public/
│   ├── photo/
│   │   └── car-shoots/
│   │       ├── nurburgring/
│   │       ├── rotterdam/
│   │       └── type-r/
│   └── video/
│       └── Turkey/
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   └── Header.css
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Home.css
│   │   ├── Portfolio.tsx
│   │   ├── Portfolio.css
│   │   ├── Contact.tsx
│   │   └── Contact.css
│   ├── i18n/
│   │   ├── index.ts
│   │   └── locales/
│   │       ├── nl.json
│   │       ├── en.json
│   │       ├── fr.json
│   │       ├── de.json
│   │       ├── ru.json
│   │       └── tr.json
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 20.19+ or 22.12+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd emrevisuals
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Adding Content

### Adding Photos

Place your images in the appropriate folder:
```
public/photo/car-shoots/[category]/your-image.jpg
```

Update the `mediaItems` array in `src/pages/Portfolio.tsx` to include your new photos.

### Adding Videos

Place your videos in:
```
public/video/[category]/your-video.mp4
```

Update the `mediaItems` array in `src/pages/Portfolio.tsx` to include your new videos.

## Customization

### Colors

Edit the CSS variables in `src/index.css`:
```css
:root {
  --bg-primary: #0a0a0a;
  --text-primary: #ffffff;
  /* ... more colors */
}
```

### Languages

To add or modify translations:
1. Navigate to `src/i18n/locales/`
2. Edit the appropriate language JSON file
3. Add new language files if needed
4. Update `src/i18n/index.ts` to include new languages

## Building for Production

```bash
npm run build
```

The build output will be in the `dist` folder, ready to be deployed to any static hosting service.

## Deployment

This site can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

All rights reserved © 2025 EmreVisuals

## Contact

For inquiries: info@emrevisuals.com

---

Made with passion and creativity ❤️
