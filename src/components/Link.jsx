import React from "react";
import { timeDifferenceForDate } from "../utils";
import { useMutation, gql } from "@apollo/client";
import { Box, Flex, Square, Tooltip } from "@chakra-ui/react";
import { ChevronUpIcon } from "@chakra-ui/icons";

const LINKS_PER_PAGE = 5;

const VOTE_MUTATION = gql`
  mutation VoteMutation($linkId: ID!) {
    vote(linkId: $linkId) {
      id
      link {
        id
        votes {
          id
          user {
            id
          }
        }
      }
      user {
        id
      }
    }
  }
`;
const Link = (props) => {
  const take = LINKS_PER_PAGE;
  const skip = 0;
  const orderBy = { createdAt: "desc" };
  const { link } = props;
  const [vote] = useMutation(VOTE_MUTATION, {
    variables: {
      linkId: link.id,
    },
    update: (cache, { data: { vote } }) => {
      const { feed } = cache.readQuery({
        query: FEED_QUERY,
        variables: {
          take,
          skip,
          orderBy,
        },
      });

      const updatedLinks = feed.links.map((feedLink) => {
        if (feedLink.id === link.id) {
          return {
            ...feedLink,
            votes: [...feedLink.votes, vote],
          };
        }
        return feedLink;
      });

      cache.writeQuery({
        query: FEED_QUERY,
        data: {
          feed: {
            links: updatedLinks,
          },
        },
        variables: {
          take,
          skip,
          orderBy,
        },
      });
    },
  });
  return (
    <Box>
      <Flex gap={2} flexDirection={"row"}>
        <span>{props.index + 1}.</span>
        <div style={{ cursor: "pointer" }} onClick={vote}>
          <Tooltip label="upvote">
            <ChevronUpIcon
              boxSize={6}
              _hover={{ color: "green.600" }}
              _active={{ color: "green.800" }}
            />
          </Tooltip>
        </div>
        <Flex gap={"2"} flexDirection={"column"}>
          <Box fontSize={{ base: "md" }} fontWeight={{ base: "semibold" }}>
            {link.description} ({link.url})
          </Box>
          {
            <div>
              {link.votes.length} votes | by{" "}
              {link.postedBy ? link.postedBy.name : "Unknown"}{" "}
              {timeDifferenceForDate(link.createdAt)}
            </div>
          }
        </Flex>
      </Flex>
    </Box>
  );
};

export default Link;
