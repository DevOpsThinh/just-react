/**
 * Topic: Learning React
 * Student name: Nguyen Truong Thinh
 * Created At: 9/ 7 / 2021
 * Updated At: 10/ 7/ 2021: Uses Styled Component
 * Section: Web client with React
 */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { format } from 'date-fns';
import styled from 'styled-components';

///-----------------------------------------------------------///
///                     Component styles                     ///
///---------------------------------------------------------///
/**
 * Keep notes from extending wider than 800px
 * */
const StyledNote = styled.article`
  max-width: 800px;
  margin: 0 auto;
`;
/**
 * Style the note metadata
 */
const MetaData = styled.div`
  @media (min-width: 500px) {
    display: flex;
    align-items: top;
  }
`;

/**
 * Add some space between the avatar and meta info
 */
const MetaInfo = styled.div`
  padding-right: 1em;
`;

/**
 * Align 'User Actions' to the right on large screens
 */
const UserActions = styled.div`
  margin-left: auto;
`;

///-----------------------------------------------------------///
///                     Component function                   ///
///---------------------------------------------------------///
const Note = ({ note }) => {
  return (
    <StyledNote>
      <MetaData>
        <MetaInfo>
          <img
            src={note.author.avatar}
            alt={`${note.author.username} avatar`}
            height="50px"
          />
        </MetaInfo>
        <MetaInfo>
          <em>by</em> {note.author.username} <br />
          {format(new Date(note.createdAt), 'MMM dd, yyyy')}
        </MetaInfo>
        <UserActions>
            <em>Favorites:</em> {note.favoriteCount}
        </UserActions>
      </MetaData>
      <ReactMarkdown source={note.content} />
    </StyledNote>
  );
};

export default Note;
