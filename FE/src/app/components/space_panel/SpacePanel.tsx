import * as React from 'react';
import { SpaceItem } from 'components/space_panel/SpaceItem';
import { SpaceModel } from 'components/space_panel/SpaceModel';
import './space_panel.scss';
import { SpaceId } from 'domain/Space';


const testModels: Array<SpaceModel> = [
    {
        id: 1,
        name: 'qweqwe',
        logoUri: 'https://www.geek.com/wp-content/uploads/2018/09/bowsetteyellow-625x352.jpg'
    },
    {
        id: 2,
        name: 'asdasdasd',
        logoUri: 'https://www.geek.com/wp-content/uploads/2018/09/bowsetteyellow-625x352.jpg'
    },
    {
        id: 3,
        name: 'zxczxczxc',
        logoUri: 'https://www.geek.com/wp-content/uploads/2018/09/bowsetteyellow-625x352.jpg'
    }
];

const testProps: SpacePanelProps = {
    models: testModels,
    selectedId: 1,
    className: ''
}


export interface SpacePanelProps {
    readonly models: Array<SpaceModel>;
    readonly selectedId: SpaceId;
    readonly className: string;
    readonly onSpaceClick?: (model: SpaceModel) => void;
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
        const isExpanded = this.state.showInfos;

        const spaceItems = this.props.models.map((m) => {
            const isSelected = m.id == this.props.selectedId;
            const itemClasses = `space-item ${isSelected ? 'selected': ''}`;
            return <SpaceItem 
                key={m.id} 
                model={m} 
                showInfo={isExpanded}
                isSelected={isSelected}
                className={itemClasses}
                onClick={this._handleSpaceSelect.bind(this, m)}>
            </SpaceItem>
        });

        const closeClass = isExpanded ? 'expanded' : ''; 
        const classes = `space-panel ${this.props.className} ${closeClass}`;
        return <div className={classes}>
            {spaceItems}
            <button onClick={this._handleClick.bind(this)}>test</button>
        </div>
    }


    private _handleSpaceSelect(model: SpaceModel): void {
        if(this.props.onSpaceClick) {
            this.props.onSpaceClick(model);
        }
    }

    private _handleClick(): void {
        this.setState({
            showInfos: !this.state.showInfos
        });
    }
}