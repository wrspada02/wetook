/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      keyframes: {
        ripple: {
          from: {
            transform: 'scale(.8)',
            opacity: '1',
          },
          to: {
            transform: 'scale(2.4)',
            opacity: '0',
          },
        },
        extendToBottom: {
          from: {
            transform: 'translateY(-20px)',
          },
          to: {
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        ripple: 'ripple 2s infinite ease-in-out',
        extendToBottom: 'extendToBottom 0.5s ease-in-out',
      },
    },
    screens: {
      mobile: {
        max: '767px',
      },
      tablet: {
        min: '768px',
        max: '1023px',
      },
      desktop: {
        min: '1024px',
        max: '1919px',
      },
      fullscreen: {
        min: '1920px',
      },
    },
    backgroundColor: {
      primary: '#323232',
      secondary: '#737373',
      green: '#29CB00',
      red: '#FF4A4A',
    },
    colors: {
      secondary: '#737373',
      white: '#FFFFFF',
    },
  },
  plugins: [],
};
