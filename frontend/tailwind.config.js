module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#3b82f6',
          DEFAULT: '#1d4ed8',
          dark: '#1e3a8a',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
