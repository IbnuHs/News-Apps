/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        blueTransparent:
          "linear-gradient(0deg, rgba(0,30,90,0.8800770308123249) 0%, rgba(0,30,90,0.468312324929972) 100%)",
        blueTransparentHover:
          "linear-gradient(0deg, rgba(0,30,90,0.8800770308123249) 0%, rgba(0,30,90,0) 100%)",
      },
      aspectRatio: {
        "4/3": "4 / 3",
      },
    },
    keyframes: {
      textgone: {
        "0%": { color: "rgba(240, 248, 255, 0)" },
        "100%": { color: "#001E5A" },
      },
    },
    animation: { textGone: "textgone ease-in-out" },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      Sora: ["Sora", "sans-serif"],
      zila: ["Zilla Slab", "serif"],
      protest: ["Protest Revolution", "sans-serif"],
    },
  },
  plugins: [require("flowbite/plugin", "@tailwindcss/line-clamp")],
});
