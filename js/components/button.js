import React from 'react';

export class Button extends React.Component{
    render(){
        return (
            <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" onClick={this.props.onClick}>
                Send
            </button>
        )
    }
}