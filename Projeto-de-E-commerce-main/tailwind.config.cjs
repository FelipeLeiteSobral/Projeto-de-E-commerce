/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      center: true,
      padding: '1rem',
    },
    extend: {
      colors:{
        rorange: "#f6ab13",
        rblue:"#4d92f9",
        rbluelight:"#b8d3fd",
        rwhite:"#ccdbdc",
        rwhitelight:"#ebf1f1",
        rblack:"#595959",
        rblackdark:"#333333",
      },
      fontFamily:{
        poppins:["Poppins", "sans-serif"],
        graduate: ['Graduate', 'cursive'],
        gemunu: ['Gemunu Libre', 'sans-serif'],
        barlow: ['Barlow', 'sans-serif'],
      }

    },
  },
  plugins: [],
  screens:{
    xs:"480px",
    ss:"620px",
    sm:"768px",
    md:"1060px",
    lg:"1200px",
    xl:"1700px",
  }
}