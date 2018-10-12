import * as React from 'react';
import './space.scss';
import { SpacePanel } from 'components/space_panel/space_panel/SpacePanel';
import { SpaceView } from 'mvp/space/space_view/SpaceView';
import { SpaceGrid } from 'mvp/space/space_grid/SpaceGrid';


export class Space extends React.Component {
    render(): JSX.Element {
        return <div className='space'>
            <div>
                <SpacePanel className='side-panel'></SpacePanel>
            </div>
            <div className='column main-panel-container'> 
                <SpaceView></SpaceView>
                {/* <SpaceGrid></SpaceGrid> */}
            </div>
        </div>
    }
}
