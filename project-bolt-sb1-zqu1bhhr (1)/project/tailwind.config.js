/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      boxShadow: {
        'neon-cyan': '0 0 5px theme("colors.cyan.500"), 0 0 20px theme("colors.cyan.500")',
        'neon-purple': '0 0 5px theme("colors.purple.500"), 0 0 20px theme("colors.purple.500")',
        'neon-green': '0 0 5px theme("colors.green.500"), 0 0 20px theme("colors.green.500")',
      },
    },
  },
  plugins: [],
};