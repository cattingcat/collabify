import * as React from 'react';
import './typoDemo.scss'; // See styles in main.scss

export class TypoDemo extends React.Component {
    render(): JSX.Element {
        return <div className='typo_demo'>
            <h1>Header 1</h1>
            <h2>Header 2</h2>
            <h3>Header 3</h3>
            <h4>Header 4</h4>
            <h5>Header 5</h5>
            <h6>Header 6</h6>
            <a href='#'>Link</a>
            <div className="input_demo">
                <label htmlFor="text_input">Text input</label>
                <input id="text_input" type="text" placeholder="Enter some text"/>
            </div>
        </div>
    }
}