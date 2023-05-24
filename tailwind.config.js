/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./instructor.html","./course.html"],
  theme: {
    extend: {
      colors:{
        'main' : '#F66962',
        'main-hover': 'rgb(247 65 56)',
      },
    },
    
  },
  plugins: [],
}

