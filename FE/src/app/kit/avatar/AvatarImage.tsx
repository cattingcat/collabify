import * as React from 'react';
import './avatar-image.scss';

export interface AvatarProps {
    readonly size: 'large' | 'medium' | 'small',
    readonly className?: string
}

export class AvatarImage extends React.Component<AvatarProps> {
    static readonly defaultProps: AvatarProps = {
        size: 'medium'
    };

    render(): JSX.Element {
        const classes = `avatar-image ${this.props.className} ${this.props.size}`;
        return <div className={classes}>
            <img src="https://www.geek.com/wp-content/uploads/2018/09/bowsetteyellow-625x352.jpg" alt=""/>
        </div>
    }
}