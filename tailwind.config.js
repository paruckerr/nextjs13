module.exports = {
  content: ["app/**/*.{js,ts,jsx,tsx}", "ui/**/*.{js,ts,jsx,tsx}"],
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "base", // only generate global styles
      strategy: "class", // only generate classes
    }),
  ],
  theme: {
    extend: {},
  },
};
