import * as React from 'react';
import './action_panel.scss';
import { ActionItem } from 'components/action_panel/action_item/ActionItem';

interface ActionPanelProps {
    readonly items: Array<ActionItemProps>;
    readonly className?: string;
}

export interface ActionItemProps {
    readonly icon: string;
    readonly title: string;
}

export class ActionPanel extends React.Component<ActionPanelProps> {
    
    render(): JSX.Element {
        const p = this.props;

        const classes = `action-panel ${p.className}`;
        return <div className={classes}>

            {p.items.map((i, index) => {
                return <ActionItem
                    key={index}
                    icon={i.icon} 
                    title={i.title}
                    className=''>
                </ActionItem> 
            })}

        </div>
    }
}