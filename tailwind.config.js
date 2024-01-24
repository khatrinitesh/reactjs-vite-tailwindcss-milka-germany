/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        congenial: ["Congenial"],
        congenialLight: ["CongenialLight"],
        congenialulight: ["CongenialULight"],
      },
      colors: {
        cyan: "#29b6ec",
        darkblue: "#382b5d",
        indigo: "#3b2774",
        lightpurple: "#efe9ff",
        lightblue: "rgba(59, 39, 116, .5)",
        lightpruple1: "#efe9ff",
        linkcolorsidebar: "#58478c",
      },
    },
  },
  plugins: [],
};
