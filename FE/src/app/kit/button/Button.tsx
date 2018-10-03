import * as React from 'react';
import './button.scss';

export enum ButtonColors {
    green = 'green', 
    red = 'red',
    cian = 'cian'
}

export enum ButtonStyle {
    rectangle,
    circle
}

interface IButtonProps {
   readonly text: String;
   readonly className?: String;
   readonly color?: ButtonColors;
}

export class Button extends React.Component<IButtonProps> {
    render(): JSX.Element {
        const colorClass = this.props.color || 'green';
        const passedClasses = this.props.className || '';
        
        return <button className={`btn ${colorClass} ${passedClasses}`}>{this.props.text}</button>
    }
}