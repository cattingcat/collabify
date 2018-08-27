import * as React from 'react';
import './typoDemo.scss'; // See styles in main.scss

export class TypoDemo extends React.Component {
    render(): JSX.Element {
        return <div className='typo_demo'>
            <h1>Header 1</h1>
            <h2>Header 1</h2>
            <h3>Header 1</h3>
            <h4>Header 1</h4>
            <h5>Header 1</h5>
            <h6>Header 1</h6>
            <a href='#'>Link</a>
        </div>
    }
}