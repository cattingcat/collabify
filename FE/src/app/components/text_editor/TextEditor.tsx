import * as React from 'react';
//import './space_panel.scss';


export interface TextEditorProps {
    readonly className: string;
}

export class TextEditor extends React.Component<TextEditorProps> {    
    render(): JSX.Element {
        return <div contentEditable={true}>

        </div>
    }
}