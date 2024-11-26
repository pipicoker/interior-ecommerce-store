/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg': "url('./Images/hero-bg.jpg')",
        'summer1-bg': "url('./Images/summer1.jpg')",
        'summer2-bg': "url('./Images/summer2.jpg')",
      },
      colors: {
        'blac': '#000000',
        'blac2': '#1E1E1E',
        'graay': '#D0D0D0',
        'pry': '#DC6601',
        'whitee': '#FFFFFF',
        'background': ' #F5F5F5'
      }
    },
    fontFamily: {
      'manrope': ['Manrope']
    }
  },
  plugins: [],
}
