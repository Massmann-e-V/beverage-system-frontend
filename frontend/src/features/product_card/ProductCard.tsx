import * as React from "react";
import {
  Box,
  BoxProps,
  Stack,
  Avatar,
  HStack,
  Text,
  Card,
} from "@chakra-ui/react";

const fakeProducts = [
  {
    name: "Augustiner",
    image:
      "https://d2sochvv0rudri.cloudfront.net/brewery_logos/4938/augustiner-br-u-25626a1d.jpeg",
    price: 0.8,
  },
  {
    name: "Tegernseer",
    image:
      "https://hopfenseidank.de/wp-content/uploads/2022/02/Tegernseer-Hell_Produktbild_front.jpg",
    price: 0.8,
  },
  {
    name: "Club Mate",
    image:
      "https://ankorstore.imgix.net/products/images/73911-47c48676498599.jpg",
    price: 0.8,
  },
];

export const ProductCard = (props: BoxProps) => {
  const product = fakeProducts[Math.floor(Math.random() * fakeProducts.length)];
  return (
    <Card minH="60px">
      <Stack key={product.name} fontSize="sm" px="4" spacing="4">
        <Stack direction="row" justify="space-between" spacing="4">
          <HStack spacing="3">
            <Avatar src={product.image} boxSize={{ base: "12", sm: "14" }} />
            <Box>
              <Text fontSize="lg" fontWeight="medium" color="emphasized">
                {product.name}
              </Text>

              <Text fontSize="xs" color="muted">
                3 minutes ago
              </Text>
            </Box>
          </HStack>
          <Text colorScheme="red" fontSize="xl">
            - {product.price.toFixed(2)} €
          </Text>
        </Stack>
      </Stack>
    </Card>
  );
};
