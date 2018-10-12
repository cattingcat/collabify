import * as React from 'react';
import './collapsible_panel.scss';
import { Separator } from 'kit/separator/Separator';
import { CollapseIcon } from 'kit/collapse_icon/CollapseIcon';

interface CollapsiblePanelProps {
    readonly title: string;
    readonly className?: string;
    readonly isCollapsible?: boolean;
    readonly isCollapsed?: boolean;
}

interface CollapsiblePanelState {
    isCollapsed: boolean;
}

export class CollapsiblePanel extends React.Component<CollapsiblePanelProps, CollapsiblePanelState> {
    static defaultProps: Partial<CollapsiblePanelProps> = {
        isCollapsible: true,
        isCollapsed: true
    };

    constructor(props: CollapsiblePanelProps) {
        super(props);
        this.state = { isCollapsed: this.props.isCollapsed };
        this._handleHeaderClick = this._handleHeaderClick.bind(this);
    }

    render(): JSX.Element {
        const isCollapsed = this.state.isCollapsed;
        const classes = `collapsible_panel ${this.props.className} ${isCollapsed ? 'collapsed' : ''}`;

        return <div className={classes}>
            <div 
                className='panel_header' 
                onClick={this._handleHeaderClick}>

                <CollapseIcon 
                    className='collapse_expand_icon'
                    isExpanded={!isCollapsed}>
                </CollapseIcon>

                <Separator 
                    className='header_separator'
                    title={this.props.title}>
                </Separator>
            </div>
            <div className='content'>
                {this.props.children}
            </div>
        </div>
    }


    private _handleHeaderClick(): void {
        if(!this.props.isCollapsible) return;

        this.setState({isCollapsed: !this.state.isCollapsed});
    }
}