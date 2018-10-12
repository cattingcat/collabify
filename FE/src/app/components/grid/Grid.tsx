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
    render(): JSX.Element {
        const {columns, rows} = this.props;
        const classes = `grid ${this.props.className}`;
        const colGroup = this._generateColgroup(columns);

        return <div className={classes}>
            <div className='header-wrapper'>
                <table className='header'>
                    {colGroup}
                    <thead>
                        <tr>
                            {columns.map((c, i) => {
                                return <th key={i}>
                                    <strong>{c.name}</strong>
                                </th>
                            })}
                        </tr>
                    </thead>
                </table>
            </div>
            <div className='content-wrapper'>
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
        </div>
    }

    private _generateColgroup(columns: Array<GridColumnConfig>): JSX.Element {
        return <colgroup>
            {columns.map((cell, i) => {
                const colWidth = cell.width;
                return <col key={i} width={colWidth} />;
            })}
        </colgroup>
    }
}