import * as React from 'react';
import './space.scss';
import { SpacePanel, SpacePanelProps } from 'components/space_panel/space_panel/SpacePanel';
import { SpaceId } from 'domain/Space';
import { SpaceModel } from 'components/space_panel/SpaceModel';
import { IconButton } from 'kit/icon_button/IconButton';
import { Separator } from 'kit/separator/Separator';
import { CollapsiblePanel } from 'kit/collapsible_panel/CollapsiblePanel';

export class Space extends React.Component {
    render(): JSX.Element {
        return <div className='space'>
            <div>
                <SpacePanel className='side-panel'></SpacePanel>
            </div>
            <div className='column main-panel-container'> 
                <div className='space-view'>
                    <div className='space-view-header'>
                        <div className='left'>
                            <h2 className='title'>Space title</h2>
                        </div>
                        <div className='right'>
                            <IconButton size='small'></IconButton>
                        </div>
                    </div>
                    <div className="space-view-body">
                        <Separator title='Test separator'></Separator>
                        <CollapsiblePanel title='Collaspible panel test'></CollapsiblePanel>
                    </div>
                </div>
            </div>
            
        </div>
    }
}
