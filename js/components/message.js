import React from 'react';

export class Message extends React.Component{
    render(){
        return(
            <span className="mdl-list__item-primary-content">
            <i className="material-icons mdl-list__item-avatar">person</i>
            <span>
                {this.props.username}
            </span>
                <span className="mdl-list__item-text-body">
                    {this.props.text}
                </span>
            </span>
        )
    }
}
