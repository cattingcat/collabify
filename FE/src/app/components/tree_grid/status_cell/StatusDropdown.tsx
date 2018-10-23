import * as React from 'react';
import './status_dropdown.scss';
import { Workflow } from 'domain/statuses/Workflow';

interface StatusDropdownProps {
    readonly wfs: Array<Workflow>;
    readonly className?: string;
}

export class StatusDropdown extends React.Component<StatusDropdownProps> {

    constructor(props: StatusDropdownProps) {
        super(props);

        this._handleClick = this._handleClick.bind(this);
    }

    render(): JSX.Element {
        const classes = `status_dropdown ${this.props.className}`;
        const wf = this.props.wfs[0]; 

        return <div className={classes}>
                    <ul>
                        {wf.statuses.map((item, i) => {
                            return <li 
                            onClick={this._handleClick}
                            key={i}>{item.title}</li>
                        })}
                    </ul>
                </div>
    }

    private _handleClick(): void {
        console.log("clicked");
    }
}