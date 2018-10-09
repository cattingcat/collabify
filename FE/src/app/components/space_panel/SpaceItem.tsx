import * as React from 'react';
import { SpaceModel } from 'components/space_panel/SpaceModel';
import { AvatarImage } from 'kit/avatar/AvatarImage';
import './space_item.scss';

export interface SpaceItemModel {
    readonly model: SpaceModel;
    readonly showInfo: boolean;
}

export class SpaceItem extends React.Component<SpaceItemModel> {
    render(): JSX.Element {
        let description = null;
        if(this.props.showInfo) {
            description = <div className="space-name">
                {this.props.model.name}
            </div>;
        }

        return <div className='space-item'>
            <AvatarImage></AvatarImage>
            {description}   
        </div>
    }
}