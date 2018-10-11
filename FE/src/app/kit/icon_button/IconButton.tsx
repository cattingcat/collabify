import * as React from 'react';
import './icon_button.scss';

export interface ButtonProps {
    readonly size: 'large' | 'medium' | 'small',
    readonly className?: String;
    readonly onClick?: () => void;
}

export class IconButton extends React.Component<ButtonProps> {
    constructor(props: ButtonProps) {
        super(props);
    }

    render(): JSX.Element {
        const handleClick = this.props.onClick;
        const classes = `icon-button ${this.props.className} ${this.props.size}`;
        const btn = <button 
            className={classes} 
            onClick={handleClick}>
        </button>

        return btn;
    }
}