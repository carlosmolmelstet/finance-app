export const globalStyles = {
  colors: {
    gray: {
      700: "#1f2733",
    },
  },
  styles: {
    global: () => ({
      body: {
        bg: "gray.800",
        fontFamily: "'Roboto', sans-serif",
      },
      html: {
        fontFamily: "'Roboto', sans-serif",
      },
      ".chart_tooltip": {
        bg: "gray.900 !important",
      },
      ".apexcharts-legend-text": {
        color: "gray.400 !important",
      },
    }),
  },
};
