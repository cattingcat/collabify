import * as React from 'react';
import './space.scss';
import { SpacePanel, SpacePanelProps } from 'components/space_panel/space_panel/SpacePanel';
import { SpaceId } from 'domain/Space';
import { SpaceModel } from 'components/space_panel/SpaceModel';

export class Space extends React.Component {
    render(): JSX.Element {
        return <div className='space'>
            <div> 
                <SpacePanel className="space-panel"></SpacePanel>
            </div>
            <div className='column'> 2 </div>
            <div className='column'> 3 </div>
        </div>
    }
}

