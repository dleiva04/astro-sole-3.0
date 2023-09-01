import preline from 'preline/plugin.js';


export default {
  content: [
    './public/**/*.astro',
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    'node_modules/preline/dist/*.js',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        jost: [
          'Jost'  
        ],
      },
    },
  },
  plugins: [preline],
};
