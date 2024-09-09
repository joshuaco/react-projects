/** @type {import('tailwindcss').Config} */
import { plugin } from 'postcss';
import colors from 'tailwindcss/colors';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',

    // Path to Tremor module
    './node_modules/@tremor/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {},
  plugins: []
};
