import React, { Component } from 'react';
import ChatMessage from '../components/ChatMessage';
import TextField from '../components/TextField';
import SignOut from '../components/SignOut';

class ChatContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chats: [],
      message: ''
    }
    this.handleChatReceipt = this.handleChatReceipt.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
  }

  componentDidMount() {
    App.room = App.cable.subscriptions.create("ChatChannel", {
      received: function(data) {
        this.handleChatReceipt(data);
      },
      handleChatReceipt: this.handleChatReceipt
    })
  }

  handleChatReceipt(chat) {
    let key = (new Date).getTime()
    chat = Object.assign(chat, { key: key })
    this.setState({ chats: this.state.chats.concat(chat) })
    let chatWindow = document.getElementById('chatWindow');
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }

  handleClearForm() {
    this.setState({ message: '' })
  }

  handleFormSubmit(event) {
    event.preventDefault();
    let payload = JSON.stringify({
      message: this.state.message
    });
    fetch('/api/v1/messages.json', {
      credentials: 'same-origin',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: payload
    })
    .then((response) => {
      let { ok } = response;
      if (ok) {
        return response.json();
      }
    })
    .then((data) => {
      this.handleClearForm();
    })
  }

  handleMessageChange(event) {
    this.setState({ message: event.target.value })
  }

  render() {
    let chats = this.state.chats.map(chat => {
      return(
        <ChatMessage key={chat.key} handle={chat.handle} message={chat.message} />
      )
    });

    return(
      <div>
        <div className='chat' id='chatWindow'>
          {chats}
        </div>
        <form onSubmit={this.handleFormSubmit}>
          <TextField
            content={this.state.message}
            label='Message'
            name='message'
            handlerFunction={this.handleMessageChange}
          />
          <input type='submit' value='Chat'/>
        </form>
        <SignOut />
      </div>
    );
  }
}

export default ChatContainer;
