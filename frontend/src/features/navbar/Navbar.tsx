import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Container,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  HStack,
  IconButton,
  useBreakpointValue,
  useDisclosure,
  Heading,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import * as React from "react";
import { FiHelpCircle, FiSearch, FiSettings } from "react-icons/fi";
import { Sidebar, ToggleButton, ColorModeSwitcher } from "./components";

export const Navbar = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const { isOpen, onToggle, onClose } = useDisclosure();

  return (
    <Box as="nav" bg="bg-accent" color="on-accent">
      <Container py={{ base: "3", lg: "4" }}>
        <Flex justify="space-between">
          <HStack spacing="4">
            <Heading as="h1" size="md">
              Beverage System
            </Heading>
            {isDesktop && (
              <ButtonGroup variant="ghost-on-accent" spacing="1">
                <Link to="/">
                  <Button aria-current="page">Home</Button>
                </Link>
                <Link to="/orders">
                  <Button>Orders</Button>
                </Link>
              </ButtonGroup>
            )}
          </HStack>
          {isDesktop ? (
            <HStack spacing="4">
              <ButtonGroup variant="ghost-on-accent" spacing="1">
                <IconButton
                  icon={<FiSearch fontSize="1.25rem" />}
                  aria-label="Search"
                />
                <ColorModeSwitcher />
              </ButtonGroup>
              <Link to="/profile">
                <Avatar boxSize="10" name="K T" />
              </Link>
            </HStack>
          ) : (
            <>
              <ToggleButton
                isOpen={isOpen}
                aria-label="Open Menu"
                onClick={onToggle}
              />
              <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                isFullHeight
                preserveScrollBarGap
                // Only disabled for showcase
                trapFocus={false}
              >
                <DrawerOverlay />
                <DrawerContent>
                  <Sidebar />
                </DrawerContent>
              </Drawer>
            </>
          )}
        </Flex>
      </Container>
    </Box>
  );
};
