/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#141416",
          "200": "#0d0d0d",
          "300": "rgba(20, 20, 22, 0.4)",
        },
        "accent-1": "#f37413",
        chocolate: {
          "100": "#d95c00",
          "200": "rgba(217, 92, 0, 0.09)",
        },
        whitesmoke: "#f5f5f5",
        darkslategray: {
          "100": "#434343",
          "200": "#3f3f3f",
          "300": "#353535",
          "400": "rgba(53, 53, 53, 0.4)",
          "500": "rgba(53, 53, 53, 0.5)",
        },
        dimgray: {
          "100": "#6f6f6f",
          "200": "#696969",
          "300": "#5c5c5c",
          "400": "rgba(105, 105, 105, 0.09)",
        },
        gainsboro: "#d9d9d9",
        "text-300": "#cfcfcf",
        black: "#000",
        darkgray: "#979797",
        darkorange: "rgba(243, 116, 19, 0.08)",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        mixed: "Mixed",
        nunito: "Nunito",
      },
      borderRadius: {
        "69xl": "88px",
        smi: "13px",
        "79xl": "98px",
      },
    },
    fontSize: {
      lg: "1.125rem",
      base: "1rem",
      xs: "0.75rem",
      "9xl": "1.75rem",
      "3xl": "1.375rem",
      "17xl": "2.25rem",
      "10xl": "1.813rem",
      sm: "0.875rem",
      "5xl": "1.5rem",
      lgi: "1.188rem",
      "29xl": "3rem",
      "19xl": "2.375rem",
      "3xs": "0.625rem",
      xl: "1.25rem",
      inherit: "inherit",
    },
    screens: {
      mq1500: {
        raw: "screen and (max-width: 1500px)",
      },
      mq1300: {
        raw: "screen and (max-width: 1300px)",
      },
      mq1275: {
        raw: "screen and (max-width: 1275px)",
      },
      lg: {
        max: "1200px",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
