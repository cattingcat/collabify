import * as React from 'react';
import './text_editor.scss';
import { Toolbar } from 'components/text_editor/toolbar/Toolbar';


export interface TextEditorProps {
    readonly className?: string;
    readonly placeholder?: string;
}

interface TextEditorState {
    isFocused: boolean;
}

export class TextEditor extends React.Component<TextEditorProps, TextEditorState> {   
    constructor(props: TextEditorProps) {
        super(props);
        
        this.state = {isFocused: true}

        this._handleFocus = this._handleFocus.bind(this);
        this._handleBlur = this._handleBlur.bind(this);
    }
    render(): JSX.Element {
        const classes = `text_editor ${this.props.className}`;
        const toolbarClasses = `text_editor_toolbar`;

        return <div
            className={classes}>

            {this.state.isFocused && 
                <Toolbar 
                    className={toolbarClasses}>
                </Toolbar>
            }

            <div
                className='editable'
                placeholder={this.props.placeholder}
                spellCheck={false}
                contentEditable={true}
                onFocus={this._handleFocus}
                onBlur={this._handleBlur}></div>

        </div>
    }

    private _handleFocus(): void {
        //this.setState({isFocused: true});
    }

    private _handleBlur(): void {
        //this.setState({isFocused: false});
    }
}