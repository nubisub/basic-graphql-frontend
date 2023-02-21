import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { FEED_QUERY } from "./LinkList";
import { Button, Flex, Input, Spacer, Square } from "@chakra-ui/react";

const LINKS_PER_PAGE = 5;
const CREATE_LINK_MUTATION = gql`
  mutation PostMutation($description: String!, $url: String!) {
    post(description: $description, url: $url) {
      id
      createdAt
      url
      description
    }
  }
`;

const CreateLink = () => {
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    description: "",
    url: "",
  });

  const [createLink] = useMutation(CREATE_LINK_MUTATION, {
    variables: {
      description: formState.description,
      url: formState.url,
    },
    update: (cache, { data: { post } }) => {
      const take = LINKS_PER_PAGE;
      const skip = 0;
      const orderBy = { createdAt: "desc" };

      const data = cache.readQuery({
        query: FEED_QUERY,
        variables: {
          take,
          skip,
          orderBy,
        },
      });

      cache.writeQuery({
        query: FEED_QUERY,
        data: {
          feed: {
            links: [post, ...data.feed.links],
          },
        },

        variables: {
          take,
          skip,
          orderBy,
        },
      });
    },
    onCompleted: () => {
      navigate("/");
    },
  });

  return (
    <Square marginY={"12"}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createLink();
        }}
      >
        <Flex w={"500px"} gap={"4"} flexDirection={"column"}>
          <Flex flexDirection={"column"} gap={"2"}>
            <span>Description</span>
            <Input
              className="mb2"
              value={formState.description}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  description: e.target.value,
                })
              }
              type="text"
              placeholder="A description for the link"
            />
            <span>Link</span>
            <Input
              value={formState.url}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  url: e.target.value,
                })
              }
              type="text"
              placeholder="The URL for the link"
            />
          </Flex>
          <Flex align={"end"}>
            <Spacer />
            <Button colorScheme={"teal"} type="submit">
              Submit
            </Button>
          </Flex>
        </Flex>
      </form>
    </Square>
  );
};

export default CreateLink;
