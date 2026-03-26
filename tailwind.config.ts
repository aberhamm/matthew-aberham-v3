import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        nhass: ['var(--font-nhass)'],
        sans: [
          'var(--font-nhass)',
          'var(--font-geist-sans)',
          'system-ui',
          'sans-serif',
        ],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        'muted-foreground': 'hsl(var(--muted-foreground) / 0.8)', // Increased opacity for better contrast
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        'accent-pop': {
          DEFAULT: 'hsl(var(--accent-pop))',
          foreground: 'hsl(var(--accent-pop-foreground))',
        },
      },
    },
  },
  plugins: [],
};

export default config;
