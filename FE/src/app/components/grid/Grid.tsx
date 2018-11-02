import * as React from 'react';
import './grid.scss';
import { zip } from 'rxjs';

interface GridProps {
    readonly columns: Array<GridColumnConfig>;
    readonly rows: Array<Array<JSX.Element>>;

    readonly className?: string;
}

export interface GridColumnConfig {
    readonly name: string;
    readonly width: number;
}


export class Grid extends React.Component<GridProps> {
    private readonly _columnGhostRef = React.createRef<HTMLDivElement>();
    private readonly _columnGhostThPlaceholderRef = React.createRef<HTMLDivElement>();
    private _movedColumnHeader: HTMLTableHeaderCellElement;
    private _columnPlaceholderOffsetLeft: number;

    render(): JSX.Element {
        
        const {columns, rows} = this.props;
        const classes = `grid ${this.props.className}`;
        const colGroup = this._generateColgroup(columns);
        const tableWigth = columns
            .map((i) => i.width)
            .reduce((p, c) => p + c, 0);

        return <div className={classes}>
            <div className='header-wrapper' style={{width: `${tableWigth}px`}}>
                <table className='header'>
                    {colGroup}
                    <thead>
                        <tr>
                            {columns.map((c, i) => {
                                return <th 
                                    key={i} 
                                    onMouseDown={this._handleHeaderColumnMouseDown.bind(this)}
                                    onMouseOver={this._handleHeaderColumnMouseOver.bind(this)}>
                                    <strong>{c.name}</strong>
                                </th>
                            })}
                        </tr>
                    </thead>
                </table>
            </div>
            <div className='content-wrapper' style={{width: `${tableWigth}px`}}>
                <table className='content'>
                    {colGroup}
                    <tbody>
                        {rows.map((row, i) => {
                            const cells = row.map((cell, i) => {
                                return <td key={i}>{cell}</td>;
                            });

                            return <tr key={i}>{cells}</tr>
                        })}
                    </tbody>
                    {/* <tfoot>
                        <tr>
                            <td>tf1</td>
                            <td>tf2</td>
                            <td>tf3</td>
                        </tr>
                    </tfoot> */}
                </table>
            </div>

            <div 
                ref={this._columnGhostRef}
                style={{display: 'none'}}
                className="header-dnd-ghost">
                <div
                    ref={this._columnGhostThPlaceholderRef} 
                    onMouseUp={this._handleGhostMouseLeave.bind(this)}
                    onMouseLeave={this._handleGhostMouseLeave.bind(this)}
                    onMouseMove={this._handleGhostMouseMove.bind(this)}
                    className="ghost-placeholder"></div>
            </div>
        </div>
    }

    private _generateColgroup(columns: Array<GridColumnConfig>): JSX.Element {
        return <colgroup>
            {columns.map((cell, i) => {
                const colWidth = cell.width;
                return <col key={i} style={{width: `${colWidth}px`}}/>;
            })}
        </colgroup>
    }


    private _handleHeaderColumnMouseDown(event: React.MouseEvent): void {
        const th = event.currentTarget as HTMLTableHeaderCellElement;
        const ghostEl = this._columnGhostRef.current;
        const thPlaceholderEl = this._columnGhostThPlaceholderRef.current;
        
        const {width, height} = th.getBoundingClientRect();

        this._movedColumnHeader = th;
        this._columnPlaceholderOffsetLeft = th.offsetLeft;

        ghostEl.style.left = `${this._columnPlaceholderOffsetLeft}px`; 
        ghostEl.style.display = 'block';
        ghostEl.style.width = `${width}px`;
        thPlaceholderEl.style.height = `${height}px`;
    }

    private _handleGhostMouseLeave(event: React.MouseEvent): void {
        const ghostEl = this._columnGhostRef.current;
        ghostEl.style.display = 'none';
    }

    private _handleGhostMouseMove(event: React.MouseEvent): void {
        const ghostEl = this._columnGhostRef.current;
        this._columnPlaceholderOffsetLeft += event.nativeEvent.movementX;

        ghostEl.style.left = `${this._columnPlaceholderOffsetLeft}px`; 
    }

    private _handleHeaderColumnMouseOver(event: React.MouseEvent): void {
        console.log('mouse over');
    }
}