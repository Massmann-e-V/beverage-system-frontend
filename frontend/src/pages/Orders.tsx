import * as React from "react";
import {
  Box,
  BoxProps,
  Container,
  SimpleGrid,
  useColorModeValue,
  Stack,
  Button,
  Avatar,
  HStack,
  Badge,
  StackDivider,
  AvatarBadge,
  Heading,
  Text,
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

export const Orders: React.FC = () => {
  const Card = (props: BoxProps) => {
    const product =
      fakeProducts[Math.floor(Math.random() * fakeProducts.length)];
    return (
      <Stack key={product.name} fontSize="sm" px="4" spacing="4">
        <Stack direction="row" justify="space-between" spacing="4">
          <HStack spacing="3">
            <Avatar src={product.image} boxSize={{ base: "12", sm: "14" }} />
            <Box>
              <Text fontSize="lg" fontWeight="medium" color="emphasized">
                {product.name}
              </Text>

              <Badge colorScheme="red" size="sm">
                - {product.price.toFixed(2)} €
              </Badge>
            </Box>
          </HStack>
          <Text color="muted">3 minutes ago</Text>
        </Stack>
      </Stack>
    );
  };
  return (
    <Box as="section" height="100vh" overflowY="auto">
      <Container pt={{ base: "8", lg: "12" }} pb={{ base: "12", lg: "24" }}>
        <Heading>Your Orders</Heading>
        <Box bg="bg-surface" py="4">
          <Stack divider={<StackDivider />} spacing="4">
            <Card />
            <Card />
            <Heading as="h3" size="md">
              October 2022
            </Heading>
            <Card />
            <Card />
            <Card />
            <Card />
            <Heading as="h3" size="md">
              September 2022
            </Heading>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};
