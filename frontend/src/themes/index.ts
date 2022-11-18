import { extendTheme } from "@chakra-ui/react";
import { styles } from "./styles";

import Card from "./components/card";

const overrides = {
  config: {
    initialColorMode: "light",
    useSystemColorMode: true,
  },
  colors: {},
  components: { Card },
  styles,
  breakpoints: {
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1536px",
  },
};

export default extendTheme(overrides);
