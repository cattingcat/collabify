import * as React from 'react';
import './separator.scss';

export interface SeparatorProps {
    readonly title: string;
    readonly className?: string;
}

export class Separator extends React.Component<SeparatorProps> {    
    render(): JSX.Element {
        const classes = `separator ${this.props.className}`;
        return <div className={classes}>
            <div className='title'>
                <strong>{this.props.title}</strong>
            </div>
        </div>
    }
}