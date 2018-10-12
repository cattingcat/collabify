import * as React from 'react';
import './space_view.scss';
import { IconButton } from 'kit/icon_button/IconButton';
import { CollapsiblePanel } from 'kit/collapsible_panel/CollapsiblePanel';
import { TextEditor } from 'components/text_editor/TextEditor';

interface SpaceViewState {
    isScrolled: boolean;
}

export class SpaceView extends React.Component<{}, SpaceViewState> {
    constructor(props: any) {
        super(props);
        this.state = {isScrolled: false}
        this._handleScroll = this._handleScroll.bind(this);
    }

    render(): JSX.Element {
        const headerClasses = `space-view-header ${this.state.isScrolled ? 'scroll-shadow' : ''}`;
        return <div className='space-view'>
            <div className={headerClasses}>
                <div className='left'>
                    <h2 className='title'>Space title</h2>
                </div>
                <div className='right'>
                    <IconButton size='small'></IconButton>
                </div>
            </div>

            <div 
                className="space-view-scroll-wrapper" 
                onScroll={this._handleScroll}>

                <div className="space-view-body">
                    <TextEditor 
                        placeholder='Enter your description here...'
                        className=''></TextEditor>

                    <CollapsiblePanel title='Fields'>
                        // TODO: fields panel
                    </CollapsiblePanel>

                    <CollapsiblePanel title='Stats'>
                        // TODO: Stats panel
                    </CollapsiblePanel>
                </div>
            </div>
        </div>
    }

    private _handleScroll(event: any) : void {
        const scrolled = (event.target.scrollTop != 0);
        this.setState({isScrolled: scrolled});
    }
}
