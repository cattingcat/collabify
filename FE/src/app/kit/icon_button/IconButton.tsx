import * as React from 'react';
import './icon_button.scss';

export interface ButtonProps {
    readonly size: 'large' | 'medium' | 'small',
    readonly icon: string;
    readonly className?: String;
    readonly onClick?: () => void;
}

export class IconButton extends React.Component<ButtonProps> {
    constructor(props: ButtonProps) {
        super(props);
    }

    render(): JSX.Element {
        const p = this.props;
        const handleClick = p.onClick;
        const styles: React.CSSProperties = {
            backgroundImage: `url('/icons/${p.icon}.svg')`
        };

        const classes = `icon-button ${p.className} ${p.size}`;
        const btn = <button 
            style={styles}
            className={classes} 
            onClick={handleClick}>
        </button>

        return btn;
    }
}