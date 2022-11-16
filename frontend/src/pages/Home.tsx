import * as React from "react";
import { Box, Container } from "@chakra-ui/react";

export const Home: React.FC = () => {
  return (
    <Box as="section" height="100vh" overflowY="auto">
      <Container
        pt={{ base: "8", lg: "12" }}
        pb={{ base: "12", lg: "24" }}
      ></Container>
    </Box>
  );
};
