import * as React from 'react';
import './grid_view.scss';
import { GridColumnConfig } from 'components/grid/Grid';
import { Status } from 'domain/statuses/Status';
import { Workflow } from 'domain/statuses/Workflow';
import { TreeGrid, RowElement } from 'components/tree_grid/TreeGrid';


const _statuses: Array<Status> = [
    {id: 1, title: 'New', color: 'red'},
    {id: 2, title: 'In progress', color: 'green'},
    {id: 3, title: 'Deferred', color: 'yellow'},
    {id: 4, title: 'Completed', color: 'blue'},
];

const _devStatuses: Array<Status> = [
    {id: 1, title: 'New', color: 'red'},
    {id: 2, title: 'In dev', color: 'green'},
    {id: 3, title: 'Review', color: 'yellow'},
    {id: 4, title: 'In QA', color: 'blue'},
    {id: 5, title: 'Done', color: 'blue'},
];

const _wfs: Array<Workflow> = [
    {
        id: 1,
        title: 'Default workflow',
        statuses: _statuses
    },
    {
        id: 2,
        title: 'Dev workflow',
        statuses: _devStatuses
    }
]

const _rows: Array<RowElement> = [
    { id: 1, level: 0, hasChildren: true,  isExpanded: false, title: 'qweqwe', status: _statuses[0] },
    { id: 2, level: 0, hasChildren: true,  isExpanded: true,  title: 'asdasd', status: _statuses[2] },
    { id: 3, level: 1, hasChildren: true,  isExpanded: true,  title: 'rty'   , status: _statuses[3]},
    { id: 4, level: 2, hasChildren: false, isExpanded: false, title: 'nvnvbn', status: _statuses[2]},
    { id: 6, level: 2, hasChildren: false, isExpanded: false, title: 'dfgdf' , status: _statuses[1]},
    { id: 7, level: 2, hasChildren: false, isExpanded: false, title: 'nvncbcvbn', status: _statuses[0] },
    { id: 5, level: 0, hasChildren: true,  isExpanded: false, title: 'zxczxc', status: _statuses[2]},
    { id: 1, level: 0, hasChildren: true,  isExpanded: false, title: 'qweqwe', status: _devStatuses[0] },
    { id: 2, level: 0, hasChildren: true,  isExpanded: true,  title: 'asdasd', status: _devStatuses[2] },
    { id: 3, level: 1, hasChildren: true,  isExpanded: true,  title: 'rty'   , status: _devStatuses[3]},
    { id: 4, level: 2, hasChildren: false, isExpanded: false, title: 'nvnvbn', status: _devStatuses[2]},
    { id: 6, level: 2, hasChildren: false, isExpanded: false, title: 'dfgdf' , status: _devStatuses[1]},
    { id: 7, level: 2, hasChildren: false, isExpanded: false, title: 'nvncbcvbn', status: _devStatuses[0] },
    { id: 5, level: 0, hasChildren: true,  isExpanded: false, title: 'zxczxc', status: _devStatuses[2]},
    { id: 1, level: 0, hasChildren: true,  isExpanded: false, title: 'qweqwe', status: _statuses[0] },
    { id: 2, level: 0, hasChildren: true,  isExpanded: true,  title: 'asdasd', status: _statuses[2] },
    { id: 3, level: 1, hasChildren: true,  isExpanded: true,  title: 'rty'   , status: _statuses[3]},
    { id: 4, level: 2, hasChildren: false, isExpanded: false, title: 'nvnvbn', status: _statuses[2]},
    { id: 6, level: 2, hasChildren: false, isExpanded: false, title: 'dfgdf' , status: _statuses[1]},
    { id: 7, level: 2, hasChildren: false, isExpanded: false, title: 'nvncbcvbn', status: _statuses[0] },
    { id: 5, level: 0, hasChildren: true,  isExpanded: false, title: 'zxczxc', status: _statuses[2]},
    { id: 1, level: 0, hasChildren: true,  isExpanded: false, title: 'qweqwe', status: _devStatuses[0] },
    { id: 2, level: 0, hasChildren: true,  isExpanded: true,  title: 'asdasd', status: _devStatuses[2] },
    { id: 3, level: 1, hasChildren: true,  isExpanded: true,  title: 'rty'   , status: _devStatuses[3]},
    { id: 4, level: 2, hasChildren: false, isExpanded: false, title: 'nvnvbn', status: _devStatuses[2]},
    { id: 6, level: 2, hasChildren: false, isExpanded: false, title: 'dfgdf' , status: _devStatuses[1]},
    { id: 7, level: 2, hasChildren: false, isExpanded: false, title: 'nvncbcvbn', status: _devStatuses[0] },
    { id: 5, level: 0, hasChildren: true,  isExpanded: false, title: 'zxczxc', status: _devStatuses[2]},
    { id: 1, level: 0, hasChildren: true,  isExpanded: false, title: 'qweqwe', status: _statuses[0] },
    { id: 2, level: 0, hasChildren: true,  isExpanded: true,  title: 'asdasd', status: _statuses[2] },
    { id: 3, level: 1, hasChildren: true,  isExpanded: true,  title: 'rty'   , status: _statuses[3]},
    { id: 4, level: 2, hasChildren: false, isExpanded: false, title: 'nvnvbn', status: _statuses[2]},
    { id: 6, level: 2, hasChildren: false, isExpanded: false, title: 'dfgdf' , status: _statuses[1]},
    { id: 7, level: 2, hasChildren: false, isExpanded: false, title: 'nvncbcvbn', status: _statuses[0] },
    { id: 5, level: 0, hasChildren: true,  isExpanded: false, title: 'zxczxc', status: _statuses[2]},
    { id: 1, level: 0, hasChildren: true,  isExpanded: false, title: 'qweqwe', status: _devStatuses[0] },
    { id: 2, level: 0, hasChildren: true,  isExpanded: true,  title: 'asdasd', status: _devStatuses[2] },
    { id: 3, level: 1, hasChildren: true,  isExpanded: true,  title: 'rty'   , status: _devStatuses[3]},
    { id: 4, level: 2, hasChildren: false, isExpanded: false, title: 'nvnvbn', status: _devStatuses[2]},
    { id: 6, level: 2, hasChildren: false, isExpanded: false, title: 'dfgdf' , status: _devStatuses[1]},
    { id: 7, level: 2, hasChildren: false, isExpanded: false, title: 'nvncbcvbn', status: _devStatuses[0] },
    { id: 5, level: 0, hasChildren: true,  isExpanded: false, title: 'zxczxc', status: _devStatuses[2]},
    { id: 1, level: 0, hasChildren: true,  isExpanded: false, title: 'qweqwe', status: _statuses[0] },
    { id: 2, level: 0, hasChildren: true,  isExpanded: true,  title: 'asdasd', status: _statuses[2] },
    { id: 3, level: 1, hasChildren: true,  isExpanded: true,  title: 'rty'   , status: _statuses[3]},
    { id: 4, level: 2, hasChildren: false, isExpanded: false, title: 'nvnvbn', status: _statuses[2]},
    { id: 6, level: 2, hasChildren: false, isExpanded: false, title: 'dfgdf' , status: _statuses[1]},
    { id: 7, level: 2, hasChildren: false, isExpanded: false, title: 'nvncbcvbn', status: _statuses[0] },
    { id: 5, level: 0, hasChildren: true,  isExpanded: false, title: 'zxczxc', status: _statuses[2]},
    { id: 1, level: 0, hasChildren: true,  isExpanded: false, title: 'qweqwe', status: _devStatuses[0] },
    { id: 2, level: 0, hasChildren: true,  isExpanded: true,  title: 'asdasd', status: _devStatuses[2] },
    { id: 3, level: 1, hasChildren: true,  isExpanded: true,  title: 'rty'   , status: _devStatuses[3]},
    { id: 4, level: 2, hasChildren: false, isExpanded: false, title: 'nvnvbn', status: _devStatuses[2]},
    { id: 6, level: 2, hasChildren: false, isExpanded: false, title: 'dfgdf' , status: _devStatuses[1]},
    { id: 7, level: 2, hasChildren: false, isExpanded: false, title: 'nvncbcvbn', status: _devStatuses[0] },
    { id: 5, level: 0, hasChildren: true,  isExpanded: false, title: 'zxczxc', status: _devStatuses[2]},
];

const _columns: Array<GridColumnConfig> = [
    {
        name: 'id',
        width: 45
    },
    {
        name: 'title',
        width: 500
    },
    {
        name: 'status',
        width: 900
    }
];



interface GridViewProps {
    readonly className?: String;
}

interface GridViewState {
    workflows: Array<Workflow>;
    columns: Array<GridColumnConfig>
    rows: Array<RowElement>;
}



export class GridView extends React.Component<GridViewProps, GridViewState> {
    constructor(props: GridViewProps) {
        super(props);

        this.state = {
            workflows: _wfs,
            columns: _columns,
            rows: _rows
        }
    }

    render(): JSX.Element {
        const p = this.props;
        const s = this.state;
        const classes = `grid-view ${p.className}`;

        return <div className={classes}>
            <TreeGrid
                workflows={s.workflows}
                columns={s.columns}
                rows={s.rows}
                onStatusChange={this._handleStatusChange.bind(this)}
                onExpandCollapse={this._handleExpandCpllapse.bind(this)}
                onTitleChange={this._handleTitleChange.bind(this)}>
            </TreeGrid>
        </div>
    }

    private _handleStatusChange(row: RowElement, status: Status): void {
        const s = this.state;

        const newRows = s.rows.map(r => {
            if (r == row) {
                return {...r, status: status };
            }
            return r; 
        });
    
        this.setState({rows: newRows});
    }

    private _handleExpandCpllapse(row: RowElement, isExpanded: boolean): void {
        console.log(`handle expand: ${row.isExpanded} => ${isExpanded}`);
    }

    private _handleTitleChange(row: RowElement, title: String): void {
        console.log(`handle title change: ${row.title} => ${title}`);
    }
}