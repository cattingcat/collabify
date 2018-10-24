import * as React from 'react';
import './status_cell.scss';
import { StatusDropdown } from 'components/status_picker/StatusDropdown';
import { Workflow } from 'domain/statuses/Workflow';
import { Status } from 'domain/statuses/Status';

export interface OnEditEvent {
    readonly originalEvent: React.MouseEvent<HTMLDivElement>;
}

interface StatusCellProps {
    readonly status: Status;
    readonly className?: string;
    readonly onEdit?: (event: OnEditEvent) => void;
}

export class StatusCell extends React.Component<StatusCellProps> {
    constructor(props: StatusCellProps) {
        super(props);
        this._handleCellClick = this._handleCellClick.bind(this);
    }

    render(): JSX.Element {
        const p = this.props;

        const classes = `status_cell ${p.className}`;
        const titleClasses = `title_text kit-status-${p.status.color}-color`;

        return <div 
            className={classes}
            onDoubleClick={this._handleCellClick}>

            <div className={titleClasses}>{p.status.title}</div>
        </div>
    }

    private _handleCellClick(e: React.MouseEvent<HTMLDivElement>): void {
        this.props.onEdit({originalEvent: e});
    }
}