import * as React from 'react';
import './tree_grid.scss';
import { Grid, GridColumnConfig } from 'components/grid/Grid';
import { TitleCell } from 'components/tree_grid/title_cell/TitleCell';
import { StatusCell } from 'components/tree_grid/status_cell/StatusCell';
import { Status } from 'domain/statuses/Status';
import { Workflow } from 'domain/statuses/Workflow';

interface TreeGridProps {
   readonly className?: string;
}

interface RowElement {
    readonly id: number;
    readonly level: number;
    readonly  hasChildren: boolean;
    readonly isExpanded: boolean;
    readonly title: string;
    readonly status: Status; 
}

interface TreeGridState {
    rows: Array<RowElement>;
    columns: Array<GridColumnConfig>;
}

const statuses: Array<Status> = [
    {title: 'qweqwe', color: 'red'},
    {title: 'dfgdfg', color: 'green'},
    {title: 'cvbcvb', color: 'yellow'},
    {title: 'sdfsdf', color: 'blue'},
];

const wfs: Array<Workflow> = [
    {statuses: statuses}
]

const rows: Array<RowElement> = [
    { id: 1, level: 0, hasChildren: true,  isExpanded: false, title: 'qweqwe', status: statuses[0] },
    { id: 2, level: 0, hasChildren: true,  isExpanded: true,  title: 'asdasd', status: statuses[2] },
    { id: 3, level: 1, hasChildren: true,  isExpanded: true,  title: 'rty'   , status: statuses[3]},
    { id: 4, level: 2, hasChildren: false, isExpanded: false, title: 'nvnvbn', status: statuses[2]},
    { id: 6, level: 2, hasChildren: false, isExpanded: false, title: 'dfgdf' , status: statuses[1]},
    { id: 7, level: 2, hasChildren: false, isExpanded: false, title: 'nvncbcvbn', status: statuses[0] },
    { id: 5, level: 0, hasChildren: true,  isExpanded: false, title: 'zxczxc', status: statuses[2]},
];

const columns: Array<GridColumnConfig> = [
    {
        name: 'id',
        width: 15
    },
    {
        name: 'title',
        width: 100
    },
    {
        name: 'status',
        width: 100
    }
];



export class TreeGrid extends React.Component<TreeGridProps, TreeGridState> {
    constructor(props: TreeGridProps) {
        super(props);
        
        this.state = {rows: rows, columns: columns};
    }

    render(): JSX.Element {
        const classes = `tree-grid ${this.props.className}`;
        const nodes = this._prepareRows();

        return <div className={classes}>
            <Grid
                columns={this.state.columns}
                rows={nodes}>
            </Grid>
        </div>
    }

    private _prepareRows(): Array<Array<JSX.Element>> {
        const nodes = this.state.rows.map((node) => {
            const idNode = <span>{node.id}</span>

            const titleNode = <TitleCell 
                title={node.title}
                level={node.level}
                hasChildren={node.hasChildren}
                isExpanded={node.isExpanded}>
            </TitleCell>

            const statusNode = <StatusCell 
                status={statuses[0]}
                wfs={wfs}
                statusChange={this._handleItemStatusChange.bind(this, node)}>
            </StatusCell>

            return [idNode, titleNode, statusNode];
        });

        return nodes;
    }

    private _handleItemStatusChange(node: RowElement, status: Status): void {
        const newRows = this.state.rows.map(row => {
            if (row == node){
                return {...row, status: status };
            }
            return row; 
        });
 
        this.setState({rows: newRows});
    }
}