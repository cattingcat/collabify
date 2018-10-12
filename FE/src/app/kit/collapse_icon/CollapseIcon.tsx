import * as React from 'react';
import './collapse_icon.scss';


interface CollapseIconProps {
    readonly isExpanded: boolean;
    readonly className?: string;
}

export class CollapseIcon extends React.Component<CollapseIconProps> {
    render(): JSX.Element {
        const classes = `collapse_icon ${this.props.className}`;
        const p = this.props;
        const icon = <i className='icon'></i>;

        if(p.isExpanded) {
            return <div className={`${classes} expanded`}>{icon}</div>;
        } else {
            return <div className={classes}>{icon}</div>;
        } 
    }
}