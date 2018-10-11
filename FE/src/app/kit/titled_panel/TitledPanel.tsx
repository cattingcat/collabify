import * as React from 'react';
import './titled_panel.scss';
import { Separator } from 'kit/separator/Separator';

export interface TitledPanelProps {
    readonly title: string;
    readonly className?: string;
}

export class TitledPanel extends React.Component<TitledPanelProps> {
    constructor(props: TitledPanelProps) {
        super(props);
        this.state = { isCollapsed: false };
    }

    render(): JSX.Element {
        const classes = `titled_panel ${this.props.className}`;
        const contentClasses = `content`;

        return <div className={classes}>
            <div className='panel_header'>
                <Separator title={this.props.title}></Separator>
            </div>
            <div className={contentClasses}>
                {this.props.children}
            </div>
        </div>
    }
}