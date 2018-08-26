import * as React from 'react';
const s =  require('./button.scss');

interface IButtonProps {
   readonly text: String;
   readonly className?: String;
}

export class Button extends React.Component<IButtonProps> {
    render(): JSX.Element {
        return <button className={`${s.btn} ${s.green} ${this.props.className}`}>{this.props.text}</button>
    }
}