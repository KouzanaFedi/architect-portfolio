/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "arch-regular": ["IBM Plex Sans", "sans-serif"],
        "arch-fancy": ["PT Sans", "sans-serif"],
      },
      colors: {
        "arch-black": "#171513",
        "arch-orange": "#ff700a",
        "arch-gray": "#eaebe6",
      },
      boxShadow: {
        top: "0px -3px 5px 0px rgba(0, 0, 0, .75)",
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
      },
      // transitionTimingFunction: {
      //   "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
      // },
    },
  },
  plugins: [],
};
