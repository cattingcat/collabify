import * as React from 'react';
import './avatar-image.scss';

export interface AvatarProps {
    readonly size: 'large' | 'medium' | 'small',
    readonly imgSrc: string
    readonly className?: string,
    readonly imgAlt?: string
}

export class AvatarImage extends React.Component<AvatarProps> {
    render(): JSX.Element {
        const classes = `avatar-image ${this.props.className} ${this.props.size}`;
        return <div className={classes}>
            <img src={this.props.imgSrc} alt={this.props.imgAlt}/>
        </div>
    }
}