/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        "Inknut":"Inknut Antiqua, serif",
        "Manrope" : "Manrope, sans-serif",
        "Inter" : "Inter, serif",
        "Roboto" :  "Roboto, sans-serif",
        "Poppins" : "Poppins, serif",
      },
      letterSpacing: {
        extra: '0.6rem'
      },
      screens: {
        sm: '640px',  // Custom small breakpoint
        md: '768px',
        lg:'1024px',  // Custom medium breakpoint
        xl: '1280px', // Custom extra-large breakpoint
      },
    },
  },
  plugins: [],
};
