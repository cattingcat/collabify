import * as React from 'react';
import './collapsible_panel.scss';
import { Separator } from 'kit/separator/Separator';

export interface CollapsiblePanelProps {
    readonly title: string;
    readonly className?: string;
}

export interface CollapsiblePanelState {
    isCollapsed: boolean;
}

export class CollapsiblePanel extends React.Component<CollapsiblePanelProps, CollapsiblePanelState> {
    constructor(props: CollapsiblePanelProps) {
        super(props);
        this.state = { isCollapsed: false };
        this._handleHeaderClick = this._handleHeaderClick.bind(this);
    }

    render(): JSX.Element {
        const isCollapsed = this.state.isCollapsed;

        const classes = `collapsible_panel ${this.props.className}`;
        const contentClasses = `content ${isCollapsed ? 'collapsed' : ''}`;

        return <div className={classes}>
            <div 
                className='panel_header' 
                onClick={this._handleHeaderClick}>

                <Separator title={this.props.title}></Separator>
            </div>
            <div className={contentClasses}>
                {this.props.children}
            </div>
        </div>
    }

    _handleHeaderClick(): void {
        this.setState({isCollapsed: !this.state.isCollapsed});
    }
}