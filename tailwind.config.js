/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./instructor.html",
    "./course.html",
    "./instructor_details.html",
    "./course_video.html",
    "./video.html",
    "./blog.html",
    "./login.html",
    "./signup.html",
    "./blog_details.html"],
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

