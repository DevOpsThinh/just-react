/**
 * Topic: Learning React
 * Student name: Nguyen Truong Thinh
 * Created At: 9/ 7 / 2021
 * Updated At: 10/ 7/ 2021: Refactoring: Remove <Header>, <Navigation> instances.
 * Section: Web client with React
 */
import React from 'react';
import { useQuery, gql } from '@apollo/client';

import Button from '../components/Button';
import NoteFeed from '../components/NoteFeed';

///----------------------------------------------------------------------///
///                            Query an API                             ///
///--------------------------------------------------------------------///

// Our GraphQL query, stored as a variable
const GET_NOTES = gql`
  query NoteFeed($cursor: String) {
    noteFeed(cursor: $cursor) {
      cursor
      hasNextPage
      notes {
        id
        createdAt
        content
        favoriteCount
        author {
          username
          id
          avatar
        }
      }
    }
  }
`;

///----------------------------------------------------------------------///
///                         Component function                          ///
///--------------------------------------------------------------------///

const Home = () => {
  // Query hook
  const { data, loading, error, fetchMore } = useQuery(GET_NOTES);
  // If the data is loading, display a loading message
  if (loading) {
    return <p>Loading...</p>;
  }
  // If there is an error fetching the data, display an error message
  if (error) {
    return <p>Error!</p>;
  }
  // If the data is successful, display the data in our UI
  return (
    <React.Fragment>
      <NoteFeed notes={data.noteFeed.notes} />
      {data.noteFeed.hasNextPage && (
        <Button
          onClick={() =>
            fetchMore({
              variables: {
                cursor: data.noteFeed.cursor,
              },
              updateQuery: (previousResult, { fetchMoreResult }) => {
                return {
                  noteFeed: {
                    cursor: fetchMoreResult.noteFeed.cursor,
                    hasNextPage: fetchMoreResult.noteFeed.hasNextPage,
                    // combine the new results and the old
                    notes: [
                      ...previousResult.noteFeed.notes,
                      ...fetchMoreResult.noteFeed.notes,
                    ],
                    __typename: 'noteFeed',
                  },
                };
              },
            })
          }
        >
          Load more
        </Button>
      )}
    </React.Fragment>
  );
};

export default Home;
