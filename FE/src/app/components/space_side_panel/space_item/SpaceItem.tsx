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
        const p = this.props;
        const spaceItemClasses = p.showInfo ? '' : 'hidden';
        const isSelected = p.isSelected;
        const selectedClass = isSelected ? 'selected' : '';
        const classNames = `space-item ${p.className} ${selectedClass}`;
        
        return <div className={classNames} onClick={p.onClick}>
            <AvatarImage 
                size='small'
                imgSrc={p.model.logoUri}
                className='space-logo'>
            </AvatarImage>
            <div className={`space-name ${spaceItemClasses}`}>
                {p.model.name}
            </div>
        </div>
    }
}