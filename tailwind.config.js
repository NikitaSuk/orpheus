/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: true,
  },
  darkMode: ["class"], // Enable dark mode based on class
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Dark Mode Colors
        dark: {
          background: '#1B1E24',
          secondaryBackground: '#434343',
          main: '#4682B4',
          secondary: '#E5C875',
          accent: '#E57373',
        },
        // Light Mode Colors
        light: {
          background: '#EDEDED',
          secondaryBackground: '#F5F5DC',
          main: '#008080',
          secondary: '#4682B4',
          accent: '#228B22',
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        DEFAULT: "0.5rem", // Custom radius for links
      },
      spacing: {
        '0.5rem': '0.125rem',
        '2.25rem': '2.25rem',
        '2rem': '2rem',
      },
      backgroundColor: {
        'hover-nav': '#172554', // Custom hover color for nav links
      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontFamily: 'Sora, sans-serif',
              fontWeight: 'bold',
              fontSize: '40px',
            },
            h2: {
              fontFamily: 'Sora, sans-serif',
              fontWeight: 'bold',
              fontSize: '32px',
            },
            h3: {
              fontFamily: 'Sora, sans-serif',
              fontWeight: 'bold',
              fontSize: '26px',
            },
            h4: {
              fontFamily: 'Sora, sans-serif',
              fontWeight: 'regular',
              fontSize: '21px',
            },
            p: {
              fontFamily: 'Sora, sans-serif',
              fontWeight: 'regular',
              fontSize: '17px',
            },
          },
        },
      },
      keyframes: {
        slide: {
          '0%, 8%': {
            transform: 'translateY(0%)',
          },
          '10%, 18%': {
            transform: 'translateY(-100%)',
          },
          '20%, 28%': {
            transform: 'translateY(-200%)',
          },
          '30%, 38%': {
            transform: 'translateY(-300%)',
          },
          '40%, 48%': {
            transform: 'translateY(-400%)',
          },
          '50%, 58%': {
            transform: 'translateY(-300%)',
          },
          '60%, 68%': {
            transform: 'translateY(-400%)',
          },
          '70%, 78%': {
            transform: 'translateY(-300%)',
          },
          '80%, 88%': {
            transform: 'translateY(-200%)',
          },
          '90%, 98%': {
            transform: 'translateY(-100%)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        slide: "slide 20s ease-in-out infinite",
      },
      animationDelay: {
        "0s": "0s",
        "2s": "2000ms",
        "4s": "4000ms",
        "6s": "6000ms",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("tailwindcss-animate"),
    require("daisyui"),
  ],
  daisyui: {
    themes: [
      {
        dark: {
          "primary": "#87CEEB", // Main color
          "secondary": "#DAA520", // Secondary color
          "accent": "#DC143C", // Accent color
          "neutral": "#0D0D0D", // Background
          "base-100": "#434343", // Secondary background
        },
      },
      {
        light: {
          "primary": "#008080", // Main color
          "secondary": "#4682B4", // Secondary color
          "accent": "#228B22", // Accent color
          "neutral": "#F5F5DC", // Background
          "base-100": "#EDEDED", // Secondary background
        },
      },
    ],
  },
};
