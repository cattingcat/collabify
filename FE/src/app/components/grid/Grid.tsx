import * as React from 'react';
import './grid.scss'; // See styles in main.scss

export class Grid extends React.Component {
    render(): JSX.Element {
        return <div className='grid'>
            <table>
                <thead>
                    <tr>
                        <th>h1</th>
                        <th>2</th>
                        <th>3</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>td1</td>
                        <td>td2</td>
                        <td>td3</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td>tf1</td>
                        <td>tf2</td>
                        <td>tf3</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    }
}