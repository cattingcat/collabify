import * as React from 'react';
import './separator.scss';

export interface SeparatorProps {
    readonly title: string;
    readonly className?: string;
}

export class Separator extends React.Component<SeparatorProps> {    
    render(): JSX.Element {
        return <div className='separator'>
            <div className='title'>
                <strong>{this.props.title}</strong>
            </div>
        </div>
    }
}