import * as React from 'react';
import { SpaceModel } from 'components/space_panel/SpaceModel';
import { AvatarImage } from 'kit/avatar/AvatarImage';
//import './space.scss'; // See styles in main.scss

export class SpaceItem extends React.Component<SpaceItemModel> {
    constructor(props: Readonly<SpaceItemModel>) {
        super(props);

        console.log(props);
    }

    render(): JSX.Element {
        return <div className='space-item'>
            <AvatarImage></AvatarImage>
            {this.props.model.name}
        </div>
    }
}

export interface SpaceItemModel {
    model: SpaceModel;
}