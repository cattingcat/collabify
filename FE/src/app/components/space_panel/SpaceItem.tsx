import * as React from 'react';
import { SpaceModel } from 'components/space_panel/SpaceModel';
import { AvatarImage } from 'kit/avatar/AvatarImage';
import './space_item.scss';

export interface SpaceItemModel {
    readonly model: SpaceModel;
}

export class SpaceItem extends React.Component<SpaceItemModel> {
    render(): JSX.Element {
        return <div className='space-item'>
            <AvatarImage></AvatarImage>
            <div className="space-name">
                {this.props.model.name}
            </div>
        </div>
    }
}