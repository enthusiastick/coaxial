import React from 'react';

const ChatMessage = ({ color, handle, message }) => {
  const colorStyle = { color: color }
  return(
    <p>
      <strong style={colorStyle}>{handle}: </strong>
      {message}
    </p>
  );
};

export default ChatMessage;
