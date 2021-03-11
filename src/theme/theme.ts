import { ChakraTheme, extendTheme } from "@chakra-ui/react";

export const theme: ChakraTheme = extendTheme({
  colors: {
    transparent: "transparent",
    black: "#000",
    white: "#fff",
    grey: {
      300: "#DFDFE1",
      400: "#a8a8a8",
      500: "#8F8D8D",
    },
    red: {
      300: "#EE737D",
      danger: "#D11A2A",
      error: "#E53E3E",
    },
    background: "#EBEEF4",
    table: {
      header: "#F7FAFC",
      white: "#fff",
    },
  },
  styles: {
    global: {
      "html, body": {
        lineHeight: "tall",
        bg: "background",
      },
    },
  },
});
