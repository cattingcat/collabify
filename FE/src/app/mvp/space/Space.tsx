import * as React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';
import './space.scss';
import { SpaceView } from 'mvp/space/space_view/SpaceView';
import { SpaceGrid } from 'mvp/space/space_grid/SpaceGrid';
import { SpacePanel } from 'components/space_side_panel/space_panel/SpacePanel';
import { SpaceList } from 'mvp/space/space_list/SpaceList';


export class Space extends React.Component {
    render(): JSX.Element {
        return <div className='space'>
            <div>
                <SpacePanel className='side-panel'></SpacePanel>
            </div>
            <div className='column main-panel-container'> 
                <HashRouter>
                    <Switch>
                        <Route exact path='/space' component={SpaceView}/>
                        <Route path='/space/grid' component={SpaceGrid}/>
                        <Route path='/space/list' component={SpaceList}/>
                    </Switch>
                </HashRouter>
            </div>
        </div>
    }
}
