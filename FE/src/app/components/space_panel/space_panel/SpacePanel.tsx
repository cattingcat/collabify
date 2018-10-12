import * as React from 'react';
import { SpaceItem } from 'components/space_panel/space_item/SpaceItem';
import { SpaceModel } from 'components/space_panel/SpaceModel';
import './space_panel.scss';
import { SpaceId } from 'domain/Space';
import { SettingsItem } from 'components/space_panel/settings_item/SettingsItem';


const testModels: Array<SpaceModel> = [
    {
        id: 1,
        name: 'qweqwe',
        logoUri: 'https://www.geek.com/wp-content/uploads/2018/09/bowsetteyellow-625x352.jpg'
    },
    {
        id: 2,
        name: 'asdasdasd',
        logoUri: 'https://i.imgur.com/DL9uN5W.jpg'
    },
    {
        id: 3,
        name: 'zxczxczxc',
        logoUri: 'https://www.geek.com/wp-content/uploads/2018/09/bowsetteyellow-625x352.jpg'
    }
];


interface SpacePanelProps {
    readonly models: Array<SpaceModel>;
    readonly selectedId: SpaceId;
    readonly className?: string;
    readonly onSpaceClick?: (model: SpaceModel) => void;
}

interface SpacePanelState {
    showInfos: boolean;
}

export class SpacePanel extends React.Component<SpacePanelProps, SpacePanelState> {
    static readonly defaultProps: SpacePanelProps = {
        models: testModels,
        selectedId: 1
    };

    constructor(props: SpacePanelProps) {
        super(props);
        this.state = {
            showInfos: false
        };
    }
    
    
    render(): JSX.Element {
        const p = this.props;
        const isExpanded = this.state.showInfos;

        const settingsItem = <SettingsItem
            icon='settings'
            title='Settings'
            showInfo={isExpanded}>
        </SettingsItem>;

        const spaceItems = p.models.map((m) => {
            const isSelected = m.id == p.selectedId;
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

        const createSpaceItem = <SettingsItem
            icon='plus'
            title='Create space'
            showInfo={isExpanded}>
        </SettingsItem>;

        const expandPanelBtn = <SettingsItem
            icon={isExpanded ? 'multiply' : 'fast-forward'}
            title='Collapse panel'
            showInfo={isExpanded}
            onClick={this._handleClick.bind(this)}>
        </SettingsItem>;


        const closeClass = isExpanded ? 'expanded' : ''; 
        const classes = `space-panel ${p.className} ${closeClass}`;
        return <div className={classes}>
            <div className="settings-list separate-border">
                {settingsItem}
            </div>
            <div className="space-list separate-border">
                {spaceItems}
            </div>
            <div className='settings-list'>
                {createSpaceItem}
                {expandPanelBtn}
            </div>
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