import * as React from 'react';
import './reports.scss';
import { SpacePanel } from 'components/space_side_panel/space_panel/SpacePanel';


export class Reports extends React.Component {
    render(): JSX.Element {
        return <div className='space'>
            <div>
                <SpacePanel className='side-panel'></SpacePanel>
            </div>
            <div className='column main-panel-container'> 
                // TODO
            </div>
        </div>
    }
}
