import React from 'react';

export class Input extends React.Component{
    render(){
        return (
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <textarea className="mdl-textfield__input" type="text" rows= "3" id="schools"/>
                <label className="mdl-textfield__label">Message</label>
            </div>
        )
    }
}