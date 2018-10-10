import * as React from 'react';
import './space.scss';
import { SpacePanel, SpacePanelProps } from 'components/space_panel/space_panel/SpacePanel';
import { SpaceId } from 'domain/Space';
import { SpaceModel } from 'components/space_panel/SpaceModel';
import { IconButton } from 'kit/icon_button/IconButton';

export class Space extends React.Component {
    render(): JSX.Element {
        return <div className='space'>
            <div>
                <SpacePanel className='side-panel'></SpacePanel>
            </div>
            <div className='column main-panel-container'> 
                <div className='space-view'>
                    <div className='header'>
                        <div className='left'>
                            <h2 className='title'>Space title</h2>
                        </div>
                        <div className='right'>
                            <IconButton></IconButton>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    }
}
