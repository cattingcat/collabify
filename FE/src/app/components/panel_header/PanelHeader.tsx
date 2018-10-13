import * as React from 'react';
import './panel_header.scss';


export interface PanelHeaderProps {
    readonly title: string;
    readonly className?: string;
}

export class PanelHeader extends React.Component<PanelHeaderProps> {   

    render(): JSX.Element {
        const p = this.props;
        const classes = `panel_header__123 ${p.className}`;

        return <div className={classes}>
            <div className='left'>
                <h2 className='title'>Space title</h2>
            </div>
        </div>
    }
}