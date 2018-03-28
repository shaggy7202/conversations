import React from 'react';

export class Message extends React.Component{
    render(){
        return(
            <li className="mdl-list__item mdl-list__item--two-line">
                <span className="mdl-list__item-primary-content">
                    <span>
                        {this.props.username}
                    </span>
                    <span className="mdl-list__item-sub-title">
                        {this.props.text}
                    </span>
                </span>
            </li>
        )
    }
}
