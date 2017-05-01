import React from 'react';

const ChatMessage = ({ handle, message }) => {
  return(
    <p>
      <strong>{handle}: </strong>
      {message}
    </p>
  );
};

export default ChatMessage;
