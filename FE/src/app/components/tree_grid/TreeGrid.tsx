import * as React from 'react';
//import './grid.scss';
import { Grid, GridColumnConfig } from 'components/grid/Grid';
import { TitleCell } from 'components/tree_grid/title_cell/TitleCell';

interface TreeGridProps {
   readonly className?: string;
}

interface RowElement {
    readonly id: number;
    readonly level: number;
    readonly  hasChildren: boolean;
    readonly isExpanded: boolean;
    readonly title: string;
}

const rows: Array<RowElement> = [
    { id: 1, level: 0, hasChildren: true,  isExpanded: false, title: 'qweqwe' },
    { id: 2, level: 0, hasChildren: true,  isExpanded: true,  title: 'asdasd' },
    { id: 3, level: 1, hasChildren: true,  isExpanded: true,  title: 'rty'    },
    { id: 4, level: 2, hasChildren: false, isExpanded: false, title: 'nvnvbn' },
    { id: 6, level: 2, hasChildren: false, isExpanded: false, title: 'dfgdf' },
    { id: 7, level: 2, hasChildren: false, isExpanded: false, title: 'nvncbcvbn' },
    { id: 5, level: 0, hasChildren: true,  isExpanded: false, title: 'zxczxc' },
];

const columns: Array<GridColumnConfig> = [
    {
        name: 'id',
        width: 15
    },
    {
        name: 'title',
        width: 100
    }
];



export class TreeGrid extends React.Component<TreeGridProps> {
    render(): JSX.Element {
        const classes = `grid ${this.props.className}`;
        const nodes = this._prepareRows();

        return <div className={classes}>
            <Grid
                columns={columns}
                rows={nodes}>
            </Grid>
        </div>
    }

    private _prepareRows(): Array<Array<JSX.Element>> {
        const nodes = rows.map((node) => {
            const idNode = <span>{node.id}</span>

            const titleNode = <TitleCell 
                title={node.title}
                level={node.level}
                hasChildren={node.hasChildren}
                isExpanded={node.isExpanded} >
            </TitleCell>

            return [idNode, titleNode];
        });

        return nodes;
    }
}