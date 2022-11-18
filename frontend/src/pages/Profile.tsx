import * as React from "react";
import {
  Box,
  Container,
  Card,
  CardBody,
  CardHeader,
  Stack,
  Text,
  Divider,
  ButtonGroup,
  Button,
  CardFooter,
  Heading,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { UserCard } from "features/user_card/UserCard";
import { ProductCard } from "features/product_card";

export const Profile: React.FC = () => {
  return (
    <Box as="section" height="100vh" overflowY="auto">
      <UserCard />
      <Container pb={{ base: "12", lg: "24" }}>
        <Stack spacing="4">
          <Card>
            <CardHeader>
              <Heading size="md">Your balance</Heading>
            </CardHeader>
            <CardBody>
              <Text fontSize="6xl">450.95 EUR</Text>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme="blue" size="sm">
                  Transfer now
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <Link to="/orders">
                <Heading size="md">Recent activity</Heading>
              </Link>
            </CardHeader>
            <CardBody>
              <Stack spacing="4">
                <ProductCard />
                <ProductCard />
                <ProductCard />
              </Stack>
            </CardBody>
          </Card>
        </Stack>
      </Container>
    </Box>
  );
};
