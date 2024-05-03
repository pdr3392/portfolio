import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      Raleway: ['Raleway', 'sans-serif'],
    },
    extend: {
      colors: {
        bg: '#090E16',
        glow: '#1b1835',
        herolayer: '#7B4AE2',
        navbar: '#0f1120',
        parsed: '#643eb9',
        divider: '#201a3f',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
