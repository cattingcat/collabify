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


export interface SpacePanelProps {
    readonly models: Array<SpaceModel>;
    readonly className: string;
}

export interface SpacePanelState {
    showInfos: boolean;
}

export class SpacePanel extends React.Component<SpacePanelProps, SpacePanelState> {
    static readonly defaultProps: SpacePanelProps = testProps;

    constructor(props: SpacePanelProps) {
        super(props);
        this.state = {
            showInfos: true
        };
    }
    
    
    render(): JSX.Element {
        const spaceItems = this.props.models.map((m) => {
            return <SpaceItem 
                key={m.id.value} 
                model={m} 
                showInfo={this.state.showInfos}>
            </SpaceItem>
        });

        const closeClass = this.state.showInfos ? 'expanded' : ''; 
        const classes = `space-panel ${this.props.className} ${closeClass}`;
        return <div className={classes}>
            {spaceItems}
            <button onClick={this._handleClick.bind(this)}>test</button>
        </div>
    }

    _handleClick(): void {
        this.setState({
            showInfos: !this.state.showInfos
        });
    }
}