import * as React from 'react';
import './status_dropdown.scss';
import { Workflow } from 'domain/statuses/Workflow';
import { Status } from 'domain/statuses/Status';

interface StatusDropdownProps {
    readonly wfs: Array<Workflow>;
    readonly className?: string;
    readonly onClick?: (item: Status) => void;
}

export class StatusDropdown extends React.Component<StatusDropdownProps> {

    constructor(props: StatusDropdownProps) {
        super(props);
    }

    render(): JSX.Element {
        const classes = `status_dropdown ${this.props.className}`;
        const wf = this.props.wfs[0]; 

        return <div className={classes}>
                    <ul>
                        {wf.statuses.map((item, i) => {
                            return <li 
                            onClick={this.props.onClick.bind(this, item)}
                            key={i}>{item.title}</li>
                        })}
                    </ul>
                </div>
    }
}