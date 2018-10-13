import * as React from 'react';
import { IconButton } from 'kit/icon_button/IconButton';

interface ActionItemProps {
    readonly icon: string;
    readonly title: string;
    readonly className?: string;
}

export class ActionItem extends React.Component<ActionItemProps> {
    
    render(): JSX.Element {
        const p = this.props;


        const classes = `action-item ${p.className}`;
        return <div className={classes}>
            <IconButton 
                icon={p.icon}
                size='small'
                className='action-item-icon'>
            </IconButton>
            <div className='action-item-title'>
                <strong>{p.title}</strong>
            </div>
        </div>
    }
}