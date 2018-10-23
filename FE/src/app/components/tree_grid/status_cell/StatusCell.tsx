import * as React from 'react';
import './status_cell.scss';
import { StatusDropdown } from './StatusDropdown';
import { Workflow } from 'domain/statuses/Workflow';
import { Status } from 'domain/statuses/Status';


interface StatusCellProps {
    readonly status: Status;
    readonly wfs: Array<Workflow>;
    readonly className?: string;
    readonly statusChange?:(status: Status) => void;
}

interface StatusCellState {
    isShowDropDown: boolean;
}

export class StatusCell extends React.Component<StatusCellProps, StatusCellState> {
    private _cellRef: React.RefObject<HTMLTableCellElement>

    constructor(props: StatusCellProps) {
        super(props);
        this.state = {isShowDropDown: false};
        this._handleClick = this._handleClick.bind(this);
        this._handleClickOutside = this._handleClickOutside.bind(this);

        this._cellRef = React.createRef<HTMLTableCellElement>();
    }

    render(): JSX.Element {
        const p = this.props;
        const s = this.state;
        const wfs = this.props.wfs;

        const classes = `status_cell ${p.className}`;

        return <div 
            className={classes}
            onClick={this._handleClick}>


            <div className='title_text'>{p.status.title}</div>

            {s.isShowDropDown &&
                <div
                    className='dropdown-container'
                    ref={this._cellRef}>

                    <StatusDropdown 
                        wfs={wfs}
                        onClick={this._handleStatusSelect.bind(this)}> 
                    </StatusDropdown>
                </div>
            }  
        </div>
    }

    private _handleClick(): void {
        this.setState({isShowDropDown: true});
        document.addEventListener('click', this._handleClickOutside);
    }

    private _handleStatusSelect(status: Status): void {
        const p = this.props;
        p.statusChange && p.statusChange.call(this, status);
        this._hideDropdown();
    }

    private _handleClickOutside(e: MouseEvent): void {
        const target = e.target;
        const isCellClick = target instanceof HTMLElement 
            && this._cellRef.current.contains(target);

        if(!isCellClick) {
            this._hideDropdown();
        }
    }

    private _hideDropdown(): void {
        this.setState({isShowDropDown: false});
        document.removeEventListener('click', this._handleClickOutside);
    }
}