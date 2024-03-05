/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens:{
      'menu':{'max': '1000px'},
      'ipad':{'max': '768px'},
      'phone':{'max': '468px'},
    }
  },
  plugins: [],
}

