import { extendTheme } from "@chakra-ui/react";
import { styles } from "./styles";

const overrides = {
  config: {
    initialColorMode: "light",
    useSystemColorMode: true,
  },
  colors: {},
  styles,
  components: {},
  breakpoints: {
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1536px",
  },
};

export default extendTheme(overrides);
