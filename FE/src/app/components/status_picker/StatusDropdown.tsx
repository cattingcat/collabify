import * as React from 'react';
import './status_dropdown.scss';
import { Workflow } from 'domain/statuses/Workflow';
import { Status } from 'domain/statuses/Status';

interface StatusDropdownProps {
    readonly className?: string;
    readonly style?: React.CSSProperties;
    readonly wfs: Array<Workflow>;
    readonly onClick?: (item: Status) => void;
}

interface StatusDropdownState {
    currentWorkflow: Workflow;
}

export class StatusDropdown extends React.Component<StatusDropdownProps, StatusDropdownState> {
    constructor(props: StatusDropdownProps) {
        super(props);
        this.state = {
            currentWorkflow: props.wfs[0]
        };
    }

    render(): JSX.Element {
        const p = this.props;
        const s = this.state;
        const classes = `status_dropdown ${p.className}`;
        const wf = s.currentWorkflow; 

        return <div className={classes} style={p.style}>
            <ul className='workflow-list'>
                {p.wfs.map((item) => {
                    const wfItemClasses = item == s.currentWorkflow ? 'current' : '';

                    return <li 
                        key={item.id}
                        className={wfItemClasses}
                        onClick={this._handleWfClick.bind(this, item)}>

                        {item.title}
                    </li>
                })}
            </ul>

            <ul className='status-list'>
                {wf.statuses.map((item) => {
                    const indicatorClasses = `color-indicator kit-status-${item.color}-bg`;
                    return <li 
                        key={item.id}
                        onClick={p.onClick.bind(this, item)}>
                        
                        <div className={indicatorClasses}></div>
                        <span>{item.title}</span>
                    </li>
                })}
            </ul>
        </div>
    }

    private _handleWfClick(wf: Workflow, event: React.MouseEvent<HTMLLIElement>): void {
        event.bubbles = false;
        event.stopPropagation();
        this.setState({currentWorkflow: wf});
    }
}