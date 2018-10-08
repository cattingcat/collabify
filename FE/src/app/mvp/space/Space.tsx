import * as React from 'react';
import './space.scss';
import { SpacePanel, SpacePanelProps } from 'components/space_panel/SpacePanel';
import { SpaceId } from 'domain/Space';
import { SpaceModel } from 'components/space_panel/SpaceModel';

export class Space extends React.Component {
    render(): JSX.Element {

        const models: Array<SpaceModel> =  [
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
        
        return <div className='space'>
            <div className='column'> 
                <SpacePanel models={models} className="space-panel"></SpacePanel>
            </div>
            <div className='column'> 2 </div>
            <div className='column'> 3 </div>
        </div>
    }
}

