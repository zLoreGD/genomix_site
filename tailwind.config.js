/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      fontFamily:{
        benzin: ['Benzin', 'sans-serif'],
        inter: ['Inter','sans-serif'],
      },
      clipPath: {
            'button-curve': 'polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)',
            'tech-clip': 'polygon(0 15%, 100% 0%, 100% 100%, 0 100%)',
      },
      colors: {
        'text-primary': '#000000',       
        'background': '#272727',         
        'block-gray': '#434343',         
        'accent-1': '#C0FF12',           
        'accent-2': '#EEFFBF',           
        'text-secondary': '#FFFFFF',     
      },
    },
  },
  
  plugins: [
    require('tailwind-clip-path'),
  ],
}

