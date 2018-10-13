import * as React from 'react';
import './space_view.scss';
import { IconButton } from 'kit/icon_button/IconButton';
import { CollapsiblePanel } from 'kit/collapsible_panel/CollapsiblePanel';
import { TextEditor } from 'components/text_editor/TextEditor';
import { ActionPanel, ActionItemProps } from 'components/action_panel/ActionPanel';
import { PanelHeader } from 'components/panel_header/PanelHeader';

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
        const actionItems: Array<ActionItemProps> = [
            {
                icon: 'list',
                title: 'List view'
            },
            {
                icon: 'calendar-5',
                title: 'Grid view'
            },
            {
                icon: 'controls-8',
                title: 'Reports'
            }
        ];

        const headerClasses = `${this.state.isScrolled ? 'scroll-shadow' : ''}`;
        return <div className='space-view'>

            <PanelHeader 
                title='Space title'
                className={headerClasses}>
            </PanelHeader>

            <div 
                className="space-view-scroll-wrapper" 
                onScroll={this._handleScroll}>

                <div className="space-view-body">
                    <div className="main-content">
                        <TextEditor 
                            placeholder='Enter your description here...'
                            className='space-description'>
                        </TextEditor>

                        <ActionPanel 
                            items={actionItems}
                            className='space-actions'>
                        </ActionPanel>
                    </div>

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
