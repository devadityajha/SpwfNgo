// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}", // Yeh line add/modify karein
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Sora", "sans-serif"], // Default = Sora
        inter: ["Inter", "sans-serif"],
        cursive: ["cursive"],
        satisfy: ['"Satisfy"', "cursive"],
      },
    },
  },
  plugins: [],
};
