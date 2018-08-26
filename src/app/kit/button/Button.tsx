import * as React from 'react';
import { KitColors } from '../../kit_core/KitColors';
import './button.scss';

interface IButtonProps {
   readonly text: String;
   readonly className?: String;
   readonly color?: KitColors;
}

export class Button extends React.Component<IButtonProps> {
    render(): JSX.Element {
        const colorClass = this.props.color || 'green';
        const passedClasses = this.props.className || '';
        
        return <button className={`btn ${colorClass} ${passedClasses}`}>{this.props.text}</button>
    }
}