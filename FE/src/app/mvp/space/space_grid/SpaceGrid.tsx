import * as React from 'react';
import './space_grid.scss';
import { PanelHeader } from 'components/panel_header/PanelHeader';
import { GridView } from 'components/grid_view/GridView';


export class SpaceGrid extends React.Component {
    constructor(props: any) {
        super(props);
        this._handleClick = this._handleClick.bind(this);
    }

    render(): JSX.Element {
        return <div className='space-grid'>
            <PanelHeader 
                title='Space title'>
            </PanelHeader>

            <div className='content'>
                <GridView></GridView>

                <button onClick={this._handleClick}>Click me</button>
            </div>
        </div>
    }


    private _handleClick(): void { }
}
