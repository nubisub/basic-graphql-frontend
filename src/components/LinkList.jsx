import React from "react";
import Link from "./Link.jsx";
import { useQuery, gql } from "@apollo/client";

const FEED_QUERY = gql`
  {
    feed {
      links {
        id
        createdAt
        url
        description
      }
    }
  }
`;

const LinkList = () => {
  const { data } = useQuery(FEED_QUERY);
  const linksToRender = [
    {
      id: "link-id-1",
      description: "Prisma gives you a powerful database toolkit 😎",
      url: "https://prisma.io",
    },
    {
      id: "link-id-2",
      description: "The best GraphQL client",
      url: "https://www.apollographql.com/docs/react/",
    },
  ];

  return (
    <div>
      {/*{linksToRender.map((link) => (*/}
      {/*  <Link key={link.id} link={link} />*/}
      {/*))}*/}
      {data && (
        <>
          {data.feed.links.map((link) => (
            <Link key={link.id} link={link} />
          ))}
        </>
      )}
    </div>
  );
};
export default LinkList;
