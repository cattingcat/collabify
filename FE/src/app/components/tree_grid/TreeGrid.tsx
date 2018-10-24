import * as React from 'react';
import './tree_grid.scss';
import { Grid, GridColumnConfig } from 'components/grid/Grid';
import { TitleCell } from 'components/tree_grid/title_cell/TitleCell';
import { StatusCell, OnEditEvent } from 'components/tree_grid/status_cell/StatusCell';
import { Status } from 'domain/statuses/Status';
import { Workflow } from 'domain/statuses/Workflow';
import { StatusDropdown } from 'components/status_picker/StatusDropdown';
import ReactDOM from 'react-dom';

interface TreeGridProps {
   readonly className?: string;
}

interface RowElement {
    readonly id: number;
    readonly level: number;
    readonly hasChildren: boolean;
    readonly isExpanded: boolean;
    readonly title: string;
    readonly status: Status; 
}

interface TreeGridState {
    rows: Array<RowElement>;
    columns: Array<GridColumnConfig>;
    showStatusPicker: boolean;
    currentRow?: RowElement;
    pickerPositionX?: number;
    pickerPositionY?: number;
}

const statuses: Array<Status> = [
    {id: 1, title: 'New', color: 'red'},
    {id: 2, title: 'In progress', color: 'green'},
    {id: 3, title: 'Deferred', color: 'yellow'},
    {id: 4, title: 'Completed', color: 'blue'},
];

const devStatuses: Array<Status> = [
    {id: 1, title: 'New', color: 'red'},
    {id: 2, title: 'In dev', color: 'green'},
    {id: 3, title: 'Review', color: 'yellow'},
    {id: 4, title: 'In QA', color: 'blue'},
    {id: 5, title: 'Done', color: 'blue'},
];

const wfs: Array<Workflow> = [
    {
        id: 1,
        title: 'Default workflow',
        statuses: statuses
    },
    {
        id: 2,
        title: 'Dev workflow',
        statuses: devStatuses
    }
]

const _rows: Array<RowElement> = [
    { id: 1, level: 0, hasChildren: true,  isExpanded: false, title: 'qweqwe', status: statuses[0] },
    { id: 2, level: 0, hasChildren: true,  isExpanded: true,  title: 'asdasd', status: statuses[2] },
    { id: 3, level: 1, hasChildren: true,  isExpanded: true,  title: 'rty'   , status: statuses[3]},
    { id: 4, level: 2, hasChildren: false, isExpanded: false, title: 'nvnvbn', status: statuses[2]},
    { id: 6, level: 2, hasChildren: false, isExpanded: false, title: 'dfgdf' , status: statuses[1]},
    { id: 7, level: 2, hasChildren: false, isExpanded: false, title: 'nvncbcvbn', status: statuses[0] },
    { id: 5, level: 0, hasChildren: true,  isExpanded: false, title: 'zxczxc', status: statuses[2]},
];

const _columns: Array<GridColumnConfig> = [
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
        this.state = {
            rows: _rows, 
            columns: _columns,

            showStatusPicker: false,
        };

        this._handleClickOutside = this._handleClickOutside.bind(this);
    }

    render(): JSX.Element {
        const p = this.props;
        const s = this.state;
        const classes = `tree-grid ${p.className}`;
        const nodes = this._prepareRows();

        return <div className={classes} ref='treeGrid'>
            <Grid
                columns={this.state.columns}
                rows={nodes}>
            </Grid>

            {s.showStatusPicker &&
                <StatusDropdown 
                    style={{top: s.pickerPositionY, left: s.pickerPositionX}}
                    className='status-dropdown'
                    wfs={wfs}
                    onClick={this._handleStatusSelect.bind(this)}> 
                </StatusDropdown>
            }
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
                status={node.status}
                onEdit={this._handleStatusEdit.bind(this, node)}>
            </StatusCell>

            return [idNode, titleNode, statusNode];
        });

        return nodes;
    }


    private _handleStatusEdit(editableNode: RowElement, event: OnEditEvent): void {
        const el = this.refs['treeGrid'] as HTMLDivElement;
        const rect = el.getBoundingClientRect();
        const targetEl = event.originalEvent.currentTarget;
        const targetRect = targetEl.getBoundingClientRect();

        const pickerX = targetRect.left - rect.left;
        const pickerY = targetRect.top - rect.top;

        this.setState({
            showStatusPicker: true,
            currentRow: editableNode,
            pickerPositionX: pickerX,
            pickerPositionY: pickerY
        });

        document.addEventListener('click', this._handleClickOutside);
    }

    private _handleStatusSelect(status: Status): void {
        const s = this.state;

        const newRows = s.rows.map(row => {
            if (row == s.currentRow) {
                return {...row, status: status };
            }
            return row; 
        });
 
        this.setState({rows: newRows});
        this._hideDropdown();
    }

    private _handleClickOutside(e: MouseEvent): void {
        const isDropdownClick = (this.refs['treeGrid'] as Element).contains(e.target as Element);
        if(!isDropdownClick) this._hideDropdown();
    }

    private _hideDropdown(): void {
        this.setState({showStatusPicker: false});
        document.removeEventListener('click', this._handleClickOutside);
    }    
}