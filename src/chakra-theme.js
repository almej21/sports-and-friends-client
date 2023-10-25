import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    Tooltip: {
      // Customize the Tooltip component here
      baseStyle: {
        color: "#fff",
      },
    },
    Text: {
      baseStyle: {
        // color: "#fff",
      },
    },
    Box: {
      baseStyle: {
        display: "flex",
      },
    },
  },
});

export default theme;
