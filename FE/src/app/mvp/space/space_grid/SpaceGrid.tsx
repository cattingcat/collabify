import * as React from 'react';
import './space_grid.scss';
import { Grid, GridColumnConfig } from 'components/grid/Grid';
import { GridColumnEndProperty } from 'csstype';


export class SpaceGrid extends React.Component {

    render(): JSX.Element {
        const rows: Array<Object> = [];
        for(let i = 0; i < 1000; ++i) {
            rows.push({
                a: i, b: 2, c: 3
            });
        }

        const columns: Array<GridColumnConfig> = [
            {
                name: 'first',
                width: 100,
                getCell(o: Object) { 
                    return (o as any)['a'];
                }
            },
            {
                name: 'second',
                width: 150,
                getCell(o: Object) { 
                    return (o as any)['b'];
                }
            },
            {
                name: 'third',
                width: 200,
                getCell(o: Object) { 
                    return (o as any)['c'];
                }
            },
        ];
        
        return <div className='space-grid'>
            <Grid
                className='grid_component'
                columns={columns}
                rows={rows}>
            </Grid>
        </div>
    }
}
