import * as React from 'react';
import { SpaceModel } from 'components/space_side_panel/SpaceModel';
import { AvatarImage } from 'kit/avatar/AvatarImage';
import './space_item.scss';

export interface SpaceItemModel {
    readonly model: SpaceModel;
    readonly showInfo: boolean;
    readonly isSelected?: boolean;
    readonly className?: string
    readonly onClick?: () => void;
}

export class SpaceItem extends React.Component<SpaceItemModel> {
    render(): JSX.Element {
        const spaceItemClasses = this.props.showInfo ? '' : 'hidden';
        const isSelected = this.props.isSelected;
        const selectedClass = isSelected ? 'selected' : '';
        const classNames = `space-item ${this.props.className} ${selectedClass}`;
        
        return <div className={classNames} onClick={this.props.onClick}>
            <AvatarImage 
                size='small'
                imgSrc={this.props.model.logoUri}
                className='space-logo'>
            </AvatarImage>
            <div className={`space-name ${spaceItemClasses}`}>
                {this.props.model.name}
            </div>
        </div>
    }
}