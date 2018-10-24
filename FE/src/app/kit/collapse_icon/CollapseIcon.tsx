import * as React from 'react';
import './collapse_icon.scss';


interface CollapseIconProps {
    readonly isExpanded: boolean;
    readonly className?: string;
    readonly onClick?: () => void;
}

export class CollapseIcon extends React.Component<CollapseIconProps> {
    render(): JSX.Element {
        const p = this.props;
        
        const classes = `collapse_icon ${p.className}`;
        const icon = <i className='icon'></i>;

        if(p.isExpanded) {
            return <div 
                className={`${classes} expanded`}
                onClick={p.onClick}>{icon}</div>;
        } else {
            return <div 
                className={classes}
                onClick={p.onClick}>{icon}</div>;
        } 
    }
}