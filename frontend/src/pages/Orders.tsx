import * as React from "react";
import { Box, Container, Stack, StackDivider, Heading } from "@chakra-ui/react";
import { ProductCard } from "features/product_card";

export const Orders: React.FC = () => {
  return (
    <Box as="section" height="100vh" overflowY="auto">
      <Container pt={{ base: "8", lg: "12" }} pb={{ base: "12", lg: "24" }}>
        <Heading>Your Orders</Heading>
        <Box bg="bg-surface" py="4">
          <Stack divider={<StackDivider />} spacing="4">
            <ProductCard />
            <ProductCard />
            <Heading as="h3" size="md">
              October 2022
            </Heading>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <Heading as="h3" size="md">
              September 2022
            </Heading>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};
