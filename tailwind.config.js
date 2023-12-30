/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      keyframes: {
        ripple: {
          from: {
            transform: "scale(.8)",
            opacity: "1"
          },
          to: {
            transform: "scale(2.4)",
            opacity: "0"
          },
        }
      },
      animation: {
        ripple: "ripple 2s infinite ease-in-out",
      }
    },
  },
  plugins: [],
}

