import * as React from 'react';
import { SpaceItem } from 'components/space_panel/SpaceItem';
import { SpaceModel } from 'components/space_panel/SpaceModel';
import './space_panel.scss';
import { SpaceId } from 'domain/Space';


const testModels: Array<SpaceModel> = [
    {
        id: new SpaceId(1),
        name: 'qweqwe'
    },
    {
        id: new SpaceId(2),
        name: 'asdasdasd'
    },
    {
        id: new SpaceId(3),
        name: 'zxczxczxc'
    }
];

const testProps: SpacePanelProps = {
    models: testModels,
    className: ''
}




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

    static defaultProps: SpacePanelProps = testProps;
}

export interface SpacePanelProps {
    models: Array<SpaceModel>;
    className: string;
}