import * as React from 'react';
import './space_list.scss';
import { PanelHeader } from 'components/panel_header/PanelHeader';


export class SpaceList extends React.Component {
    constructor(props: any) {
        super(props);
        this._handleClick = this._handleClick.bind(this);
    }

    render(): JSX.Element {
        return <div className='space-list-view'>
            
            <div className='column'>
                <PanelHeader 
                    title='Space title list'>
                </PanelHeader>

                <span>Col 1</span>
                <button onClick={this._handleClick}>Click me</button>
            </div>

            <div className='column'>
                <PanelHeader 
                    title='Space title list'>
                </PanelHeader>

                <span>Col 2</span>
            </div>
        </div>
    }


    private _handleClick(): void { }
}
