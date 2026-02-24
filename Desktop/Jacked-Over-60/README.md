# Jacked Over 60

A science-based training app for masters athletes (60+). This app tracks readiness, prescribes training intensity, and manages workout programming for optimal recovery and strength gains.

## Features

- **Readiness Assessment**: Pre-session check-in (sleep, soreness, motivation) that prescribes training intensity
- **Training Weeks**: Access to periodized workout programs (weeks 25-37)
- **Conditioning & Accessories**: Specialized routines for cardiovascular fitness and accessory training
- **Dark/Light Theme**: Toggle between dark and light modes
- **Responsive Design**: Mobile-first interface

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/okvaa/Jacked-Over-60.git
cd Jacked-Over-60
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

## Project Structure

```
src/
  ├── main.tsx           # Entry point
  ├── App.tsx            # Main application component
  ├── JO60Menu.tsx       # Main menu interface
  └── JO60Readiness.tsx  # Readiness check-in form
```

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **CSS-in-JS** - Inline styles for theming

## Features in Development

- Week-specific workout trackers
- Progress dashboard
- Body composition tracking
- Supplement/injection logging

## License

MIT
