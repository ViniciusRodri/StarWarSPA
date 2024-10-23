/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      blue: "#1fb6ff",
      white: "#ffffff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
      // Cores inspiradas em Star Wars
      darkSide: "#000000",
      logo: "#FFE81F",
      jediBlue: "#1E90FF", // Luke Skywalker Lightsaber
      sithRed: "#B22222", // Darth Vader Lightsaber
      rebelOrange: "#FFA500", // X-Wing
      empireGray: "#708090", // Stormtrooper Armor
      yodaGreen: "#8FBC8F", // Mestre Yoda
      leiaWhite: "#F8F8FF", // Princesa Leia
      chewieBrown: "#A52A2A", // Chewbacca
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
      starwars: ["Orbriton", "sans-serif"],
    },
  },
  extend: {
    width: {
      big: "132rem",
    },
  },

  plugins: [],
};
