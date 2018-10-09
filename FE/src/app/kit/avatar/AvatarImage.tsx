import * as React from 'react';
import './avatar-image.scss';

export class AvatarImage extends React.Component<AvatarProps> {

    render(): JSX.Element {
        const classes = `avatar-image ${this.props.size}`;
        return <div className={classes}>
            <img src="https://www.geek.com/wp-content/uploads/2018/09/bowsetteyellow-625x352.jpg" alt=""/>
        </div>
    }

    static readonly defaultProps: AvatarProps = {
        size: 'medium'
    };
}

export interface AvatarProps {
    readonly size: 'large' | 'medium' | 'small'
}