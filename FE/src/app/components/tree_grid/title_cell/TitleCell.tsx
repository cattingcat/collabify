import * as React from 'react';
import './title_cell.scss';
import { Grid, GridColumnConfig } from 'components/grid/Grid';
import { CollapseIcon } from 'kit/collapse_icon/CollapseIcon';

interface TreeGridProps {
    readonly level: number;
    readonly hasChildren: boolean;
    readonly isExpanded: boolean;
    readonly title: string;
    readonly className?: string;
}

export class TitleCell extends React.Component<TreeGridProps> {
    render(): JSX.Element {
        const classes = `title_cell ${this.props.className}`;
        const p = this.props;
        const paddingLeft = p.level * 10;
        const titleStyle: React.CSSProperties = {paddingLeft: `${paddingLeft}px`};

        let collapseIcon = null;
        if(p.hasChildren) {
            collapseIcon = <CollapseIcon 
                className='collapse_expand_icon'
                isExpanded={p.isExpanded}>
            </CollapseIcon>;
        } else {
            collapseIcon = <div className='expand_icon_placeholder'></div>;
        }

        return <div 
            style={titleStyle}
            className={classes}>

            {collapseIcon} 
            <div className='title_text'>{p.title}</div>
        </div>
    }
}