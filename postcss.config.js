import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import purgecss from '@fullhuman/postcss-purgecss';

const contentPaths = [
  './index.html',
  './src/**/*.{html,js,jsx,ts,tsx}',
  './src/components/Footer/Footer.{css,jsx}',
  './src/components/NavBar/NavBar.{css,jsx}',
  './src/pages/LandingPage/LandingPage.{css,jsx}',
  './src/pages/UserLogin/UserLoginPage.{css,jsx}',
  './src/App.{jsx,css}',
  './src/index.css',
  './src/main.jsx',
  './src/tailwind.css'
];

const safelist = [
  'bg-red-500',
  'text-center',
  'hover:bg-blue-500',
  'md:text-right',
  'custom-class',
  /^bg-/,
  /^text-/
];

export default {
  plugins: [
    tailwindcss,
    autoprefixer,
    purgecss({
      content: contentPaths,
      safelist,
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
    })
  ]
};