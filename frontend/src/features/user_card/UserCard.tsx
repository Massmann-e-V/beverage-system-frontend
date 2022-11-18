import { Box, Button, Heading } from "@chakra-ui/react";
import * as React from "react";
import { HiPencilAlt } from "react-icons/hi";
import { CardContent, CardWithAvatar } from "./components";

export const UserCard = () => (
  <Box as="section" pt="20" pb="12" position="relative">
    <Box position="absolute" inset="0" height="32" bg="blue.600" />
    <CardWithAvatar
      maxW="xl"
      avatarProps={{
        name: "Michael Brauweiler",
      }}
      action={
        <Button size="sm" leftIcon={<HiPencilAlt />}>
          Edit
        </Button>
      }
    >
      <CardContent>
        <Heading size="lg" fontWeight="extrabold" letterSpacing="tight">
          Michael Brauweiler
        </Heading>
      </CardContent>
    </CardWithAvatar>
  </Box>
);
