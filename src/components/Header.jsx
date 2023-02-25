import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Square,
  Spacer,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

const Header = () => {
  const navigate = useNavigate();
  return (
    <Flex>
      <Flex
        as="nav"
        align="center"
        bg="white"
        borderBottom="1px"
        borderColor="gray.300"
        w="100%"
        px={4}
        color="gray.700"
      >
        <Link to="/">
          <Box
            fontWeight={"bold"}
            p={4}
            _hover={{
              background: "white",
              color: "gray.900",
            }}
          >
            Hacker News
          </Box>
        </Link>
        <Link to="/">
          <Box
            p={4}
            _hover={{
              background: "white",
              color: "gray.900",
            }}
          >
            New
          </Box>
        </Link>
        <Link to="/top">
          <Box
            p={4}
            _hover={{
              background: "white",
              color: "gray.900",
            }}
          >
            Top
          </Box>
        </Link>
        <Link to="/create">
          <Box
            p={4}
            _hover={{
              background: "white",
              color: "gray.900",
            }}
          >
            Submit
          </Box>
        </Link>
        <Link to="/search">
          <Box
            p={4}
            _hover={{
              background: "white",
              color: "gray.900",
            }}
          >
            Search
          </Box>
        </Link>
        <Spacer />

        <Flex gap={"2"}>
          <Link to={"/signup"}>
            <Button border={"1px solid teal"} backgroundColor={"white"}>
              Sign Up
            </Button>
          </Link>
          <Link to={"/signin"}>
            <Button colorScheme="teal">Sign In</Button>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
