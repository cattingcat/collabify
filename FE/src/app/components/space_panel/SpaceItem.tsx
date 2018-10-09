import * as React from 'react';
import { SpaceModel } from 'components/space_panel/SpaceModel';
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
        let description = null;
        if(this.props.showInfo) {
            description = <div className='space-name'>
                {this.props.model.name}
            </div>;
        }

        const isSelected = this.props.isSelected;
        const selectedClass = isSelected ? 'selected' : '';
        const classNames = `space-item ${this.props.className} ${selectedClass}`;
        return <div className={classNames} onClick={this.props.onClick}>
            <AvatarImage 
                size='medium'
                imgSrc={this.props.model.logoUri}
                className='space-logo'></AvatarImage>
            {description}   
        </div>
    }
}