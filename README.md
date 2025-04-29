# shadcn/deck

A modern, component-based presentation deck system built with Next.js and shadcn UI components.

## Overview

shadcn/deck is a flexible presentation framework that allows you to create beautiful slide decks using React components. Perfect for:

- Technical presentations
- Product demos
- Conference talks
- Educational content

## Features

- 🧩 **Component-based slides** - Build presentations with reusable React components
- 🎨 **Multiple slide types** - Title, Code, Image, Grid, Quote, and more
- 📝 **Presenter notes** - Keep track of talking points for each slide
- 📱 **Responsive design** - Presentations look great on any device
- 🌙 **Dark mode support** - Presentations that work in any lighting condition
- ⌨️ **Keyboard navigation** - Easily move between slides
- 🖼️ **Fullscreen mode** - Immersive presentation experience

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/consentio/shadcn-deck.git
cd shadcn-deck
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) to see your presentation.

## Creating Slides

Slides are defined in `src/presentation/router.ts`. Each slide has:

- A unique ID
- A path for routing
- A component reference
- Presenter notes
- A title

Example slide definition:

```typescript
{
  id: '1',
  path: '/1',
  component: TitleSlide,
  notes: 'Welcome to the presentation!',
  title: 'My Awesome Presentation',
}
```

## Available Slide Components

- **TitleSlide** - Main title slide for your presentation
- **ComponentOverviewSlide** - Show component architecture
- **GridSlide** - Display content in a responsive grid
- **CodeSlide** - Share and highlight code examples
- **QuoteSlide** - Feature important quotes
- **ImageSlide** - Display images with captions
- **KeyFeaturesSlide** - Highlight key features or points
- **FullscreenSlide** - Create immersive full-screen content
- **ThankYouSlide** - End your presentation professionally

## Customization

You can create your own slide components by adding them to the `src/presentation/slides` directory and importing them in the router.

## Author

[Christopher Burns](https://x.com/burnedchris)

## License

MIT
