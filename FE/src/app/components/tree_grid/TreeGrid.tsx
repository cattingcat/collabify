import * as React from 'react';
import './tree_grid.scss';
import { Grid, GridColumnConfig } from 'components/grid/Grid';
import { TitleCell } from 'components/tree_grid/title_cell/TitleCell';
import { StatusCell, OnEditEvent } from 'components/tree_grid/status_cell/StatusCell';
import { Status } from 'domain/statuses/Status';
import { Workflow } from 'domain/statuses/Workflow';
import { StatusDropdown } from 'components/status_picker/StatusDropdown';

export interface RowElement {
    readonly id: number;
    readonly level: number;
    readonly hasChildren: boolean;
    readonly isExpanded: boolean;
    readonly title: string;
    readonly status: Status; 
}

interface TreeGridProps {
   readonly className?: string;

   readonly rows: Array<RowElement>;
   readonly columns: Array<GridColumnConfig>;
   readonly workflows: Array<Workflow>

   readonly onStatusChange?: (row: RowElement, status: Status) => void;
   readonly onTitleChange?: (row: RowElement, title: String) => void;
   readonly onExpandCollapse?: (row: RowElement, isExpanded: boolean) => void;
}

interface TreeGridState {
    showStatusPicker: boolean;
    currentRow?: RowElement;
    pickerPositionX?: number;
    pickerPositionY?: number;
}


export class TreeGrid extends React.Component<TreeGridProps, TreeGridState> {
    constructor(props: TreeGridProps) {
        super(props);
        this.state = {
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
                columns={p.columns}
                rows={nodes}>
            </Grid>

            {s.showStatusPicker &&
                <div ref='dropdownWrapper'>
                    <StatusDropdown 
                        style={{top: s.pickerPositionY, left: s.pickerPositionX}}
                        className='status-dropdown'
                        wfs={p.workflows}
                        onClick={this._handleStatusSelect.bind(this)}> 
                    </StatusDropdown>
                </div>
            }
        </div>
    }

    private _prepareRows(): Array<Array<JSX.Element>> {
        const p = this.props;
        const nodes = p.rows.map((node) => {
            const idNode = <span>{node.id}</span>

            const titleNode = <TitleCell 
                title={node.title}
                level={node.level}
                hasChildren={node.hasChildren}
                isExpanded={node.isExpanded}
                onTextSubmit={p.onTitleChange.bind(this, node)}
                onExpand={p.onExpandCollapse.bind(this, node, !node.isExpanded)}>
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
        this.props.onStatusChange(s.currentRow, status);
        this._hideDropdown();
    }

    private _handleClickOutside(e: MouseEvent): void {
        const isDropdownClick = (this.refs['dropdownWrapper'] as Element).contains(e.target as Element);
        if(!isDropdownClick) this._hideDropdown();
    }

    private _hideDropdown(): void {
        this.setState({showStatusPicker: false});
        document.removeEventListener('click', this._handleClickOutside);
    }    
}