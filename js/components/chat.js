import React from 'react';
import {Message} from "./message";
import {Input} from "./input";
import {Button} from "./button";

export default class Chat extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        socket: new WebSocket("ws://" + window.location.host),
        messages: []
    };
    let self = this;
    this.state.socket.onmessage = function (message) {
        let data = JSON.parse(message.data);
        Object.keys(data).forEach(function (key) {
            self.setState({messages: [...self.state.messages, data[key]]});
        });
    };
  }

  sendMessage(){
    this.state.socket.send($('textarea').val())
  }


  render() {
    return (
        <div>
          <ul className="mdl-list">
              {this.state.messages.map(item =>
                <Message username={item.username} text={item.text}/>
              )}

          </ul>
          <Input/>
          <Button onClick={this.sendMessage.bind(this)}/>
        </div>
    )
  }
}