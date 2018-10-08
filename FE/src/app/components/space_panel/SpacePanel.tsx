import * as React from 'react';
import { SpaceItem } from 'components/space_panel/SpaceItem';
import { SpaceModel } from 'components/space_panel/SpaceModel';
import './space_panel.scss';

export class SpacePanel extends React.Component<SpacePanelProps> {
    constructor(props?: Readonly<SpacePanelProps>) {
        super(props);
    }

    render(): JSX.Element {
        const spaceItems = this.props.models.map((m) => {
            return <SpaceItem key={m.id.value} model={m}></SpaceItem>
        });

        const classes = `space-panel ${this.props.className}`;
        return <div className={classes}>
            {spaceItems}
        </div>
    }
}

export interface SpacePanelProps {
    models: Array<SpaceModel>;
    className: string;
}