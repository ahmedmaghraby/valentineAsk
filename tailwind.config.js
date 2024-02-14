/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',

  theme: {
    extend: {
      colors: {
        boxdark: '#24303F',
        'boxdark-2': '#1A222C',
        strokedark: '#2E3A47',
        bodydark: '#AEB7C0',
        bodydark1: '#DEE4EE',
        bodydark2: '#8A99AF',

        success: {
          DEFAULT: '#077d55',
          light: '#ddf5f0',
        },
        danger: {
          DEFAULT: '#d91f11',
          light: '#fff5f5',
        },
        warning: {
          DEFAULT: '#f5c518',
          light: '#fff9ed',
          'dark-light': 'rgba(226,160,63,.15)',
          800: '#f4cc3b',
          700: '#f4d354',
          600: '#f4d96a',
          500: '#f5e07f',
          400: '#f5e693',
          300: '#f6eba7',
          200: '#f8f1bb',
          100: '#faf6cf',
        },
      },

      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
        Almarai: ['Almarai', 'sans-serif'],
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-invert-headings': theme('colors.white.dark'),
            '--tw-prose-invert-links': theme('colors.white.dark'),
            h1: { fontSize: '2.429rem', marginBottom: '0.5rem', marginTop: '0.25rem' },
            h2: { fontSize: '1.929rem', marginBottom: '0.5rem', marginTop: '0.25rem' },
            h3: { fontSize: '1.571rem', marginBottom: '0.5rem', marginTop: '0.25rem' },
            h4: { fontSize: '1.286rem', marginBottom: '0.5rem', marginTop: '0.25rem' },
            h5: { fontSize: '1rem', marginBottom: '0.5rem', marginTop: '0.25rem' },
            h6: { fontSize: '0.625rem', marginBottom: '0.5rem', marginTop: '0.25rem' },
            p: { fontSize: '1rem', marginBottom: '0.5rem', marginTop: '0.25rem' },
            li: { margin: 0 },
            img: { margin: 0 },
          },
        },
      }),
    },
  },
}
