import * as React from 'react';
import './toolbar.scss';


export interface ToolbarProps {
    readonly className?: string;
}

export class Toolbar extends React.Component<ToolbarProps> {   
    constructor(props: ToolbarProps) {
        super(props);

        this._handleBoldClick = this._handleBoldClick.bind(this);
        this._handleItalicClick = this._handleItalicClick.bind(this);
        this._handleUnderslineClick = this._handleUnderslineClick.bind(this);
        this._handleStrikeThroughClick = this._handleStrikeThroughClick.bind(this);
    }


    render(): JSX.Element {
        const classes = `toolbar ${this.props.className}`;

        return <div
            className={classes}>
            <button onClick={this._handleBoldClick}><b>B</b></button>
            <button onClick={this._handleItalicClick}><i>I</i></button>
            <button onClick={this._handleUnderslineClick}><u>U</u></button>
            <button onClick={this._handleStrikeThroughClick}><s>S</s></button>
        </div>
    }


    private _handleBoldClick(): void {
        document.execCommand('bold');
    }

    private _handleItalicClick(): void {
        document.execCommand('italic');
    }

    private _handleUnderslineClick(): void {
        document.execCommand('underline');
    }

    private _handleStrikeThroughClick(): void {
        document.execCommand('strikeThrough');
    }
}