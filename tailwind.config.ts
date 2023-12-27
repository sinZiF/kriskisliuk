import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
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
        'main-red': '#C21615',
        'color-white': '#F5F5F5',
        'about': '#EFEAE7',
        'title-color': '#828282'
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
