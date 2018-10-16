import * as React from 'react';
import './status_cell.scss';


interface StatusCellProps {
    readonly title: string;
    readonly color: string;
    readonly className?: string;
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
        const classes = `status_cell ${this.props.className}`;
        const p = this.props;
        const s = this.state;
    

        return <div 
            className={classes}
            onClick={this._handleClick}>


            <div>{p.title}</div>

            {s.isShowDropDown &&
                <div
                    className='dropdown-container'
                    ref={this._cellRef}>

                    <div className='dropdown'>
                        {p.color}
                        <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                        </ul>
                    </div>
                </div>
            }  
        </div>
    }

    private _handleClick(): void {
        this.setState({isShowDropDown: true});
        document.addEventListener('click', this._handleClickOutside);
    }

    private _handleClickOutside(e: MouseEvent): void {
        const target = e.target;
        const isCellClick = target instanceof HTMLElement 
            && this._cellRef.current.contains(target);

        if(!isCellClick) {
            this.setState({isShowDropDown: false});
            document.removeEventListener('click', this._handleClickOutside);
        }
    }
}