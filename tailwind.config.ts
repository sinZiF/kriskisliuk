import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      's': '320px',
      'l': '425px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'white': '#FFFFFF',
        'main-red': '#C21615',
        'color-white': '#F5F5F5',
        'about': '#EFEAE7',
        'title-color': '#828282',
        'footer-color': '#4C4C4C'
      },
      btn: {
        'border-radius': '15px',
        'border': '2px solid red'
      },
      minHeight: {
        120: '30rem'
      },
      maxWidth: {
        120: '30rem'
      }
    },
  },
  plugins: [],
}
export default config
