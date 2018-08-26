import * as React from 'react';
import {Button} from '../Button';

export class ButtonDemo extends React.Component {
    render(): JSX.Element {
        return <div>
            <div>
                <h5> Button demo: </h5>
            </div>
            
            <div>
                <Button text='demo-text' />
            </div>
        </div>
    }
}