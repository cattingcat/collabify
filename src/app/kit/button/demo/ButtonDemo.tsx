import * as React from 'react';
import {Button} from '../Button';
import { KitColors } from '../../../kit_core/KitColors';
import './buttonDemo.scss';

export class ButtonDemo extends React.Component {
    render(): JSX.Element {
        return <div className='button_demo'>
            <div>
                <h5> Button demo: </h5>
            </div>
            
            <div>
                <div className='button_panel'>
                    <Button text='default button' />
                </div>
                <div className='button_panel'>
                    <Button text='red button' color={KitColors.red}/>
                </div>
            </div>
        </div>
    }
}