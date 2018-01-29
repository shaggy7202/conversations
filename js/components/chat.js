import React from 'react';
import {Message} from "./message";
import {Input} from "./input";
import {Button} from "./button";

export default class Chat extends React.Component {
    constructor(props) {
    super(props);
    this.state = {socket: new WebSocket("ws://" + window.location.host)};
  }

  sendMessage(){
    this.state.socket.send($('textarea').val())
  }

  createMessages(){
    let messages = [];
    for (let message in window.props.messages){
      messages.append(<Message message={message}/>)
    }
    return messages
  }

  render() {
    return (
        <div>
          <ul className="mdl-list">
              {this.createMessages()}
          </ul>
          <Input/>
          <Button onClick={this.sendMessage.bind(this)}/>
        </div>
    )
  }
}