import * as React from 'react';
import './grid.scss';

interface GridProps {
    readonly columns: Array<GridColumnConfig>;
    readonly rows: Array<Object>;

    readonly className?: string;
}

export interface GridColumnConfig {
    readonly name: string;
    readonly width: number;
    getCell(o: Object): JSX.Element;
}


export class Grid extends React.Component<GridProps> {
    render(): JSX.Element {
        const {columns, rows} = this.props;
        const classes = `grid ${this.props.className}`;

        return <div className={classes}>
            <div className='header-wrapper'>
                <table className='header'>
                    <thead>
                        <tr>
                            {columns.map((c, i) => {
                                const styles: React.CSSProperties = {
                                    width: c.width
                                };

                                return <th key={i} style={styles}><strong>{c.name}</strong></th>
                            })}
                        </tr>
                    </thead>
                </table>
            </div>
            <div className='content-wrapper'>
                <table className='content'>
                    <tbody>
                        {rows.map((r, i) => {
                            const cells = columns.map((c, ic) => {
                                const styles: React.CSSProperties = {
                                    width: c.width
                                };

                                return <td key={ic} style={styles}>{c.getCell(r)}</td>;
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
}