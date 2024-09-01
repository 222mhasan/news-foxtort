/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'footer-image': "url('https://i.postimg.cc/XJ3dvqmP/pexels-elijahsad-3473569.jpg')",
        'login-image': "url('https://i.postimg.cc/vmmdYCG6/pexels-chaitaastic-5338522.jpg')"
      },
      fontFamily: {
        poppins: '"Poppins", "sans-serif"',
        grayQo: '"Grey Qo", "cursive"',
        pacifico: '"Pacifico", "cursive"',
        sourceCodePro: '"Source Code Pro", "monospace"'
      },
    },

  },
  plugins: [
    require('daisyui'),
  ]
}