import * as React from "react";
import { Box, Container, SimpleGrid } from "@chakra-ui/react";
import { StatCard } from "features/stat_card/";

export const Home: React.FC = () => {
  const stats = [
    {
      label: "Orders",
      value: "71,887",
      delta: { value: "320", isUpwardsTrend: true },
    },
    {
      label: "Beer consumption",
      value: "87%",
      delta: { value: "2.3%", isUpwardsTrend: true },
    },
    {
      label: "Water consumption",
      value: "12.87%",
      delta: { value: "0.1%", isUpwardsTrend: false },
    },
  ];
  return (
    <Box as="section" height="100vh" overflowY="auto">
      <Container pt={{ base: "8", lg: "12" }} pb={{ base: "12", lg: "24" }}>
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={{ base: "5", md: "6" }}>
          {stats.map((stat, id) => (
            <StatCard key={id} {...stat} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};
