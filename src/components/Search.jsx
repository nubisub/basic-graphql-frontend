import React, { useState } from "react";
import { useLazyQuery, gql } from "@apollo/client";
import Link from "./Link";
import {
  Box,
  Button,
  Flex,
  Input,
  Square,
  Table,
  TableContainer,
  Tbody,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

const LINKS_PER_PAGE = 5;

const FEED_SEARCH_QUERY = gql`
  query FeedSearchQuery($filter: String!) {
    feed(filter: $filter) {
      id
      links {
        id
        url
        description
        createdAt
        postedBy {
          id
          name
        }
        votes {
          id
          user {
            id
          }
        }
      }
    }
  }
`;
const Search = () => {
  const [searchFilter, setSearchFilter] = useState("");
  const [executeSearch, { data }] = useLazyQuery(FEED_SEARCH_QUERY);
  return (
    <Square marginY={"12"} gap={"8"} flexDirection={"column"}>
      <Flex gap={"4"} flexDirection={"column"}>
        <Flex>
          <Input
            border={"1px solid teal"}
            _hover={{ borderColor: "teal" }}
            colorScheme={"teal"}
            placeholder={"Search"}
            type="text"
            w={"350px"}
            borderRightRadius={"0"}
            onChange={(e) => setSearchFilter(e.target.value)}
          />
          <Button
            colorScheme={"teal"}
            borderLeftRadius={"0"}
            preventDefault
            onClick={() =>
              executeSearch({
                variables: { filter: searchFilter },
              })
            }
          >
            <Search2Icon />
          </Button>
        </Flex>
      </Flex>
      <TableContainer p={"4"}>
        <Table minW={"xl"} variant="striped" colorScheme="teal">
          <Tbody>
            {data &&
              data.feed.links.map((link, index) => (
                <Link key={link.id} link={link} index={index} />
              ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Square>
  );
};

export default Search;
