import * as React from 'react';
import {Button, ButtonColors} from '../Button';
import './buttonDemo.scss';

export class ButtonDemo extends React.Component {
    render(): JSX.Element {
        return <div className='button_demo'>
            <div>
                <h5> Button demo: </h5>
            </div>
            
            <div>
                <div className='button_panel'>
                    <Button text='green button' color={ButtonColors.green}/>
                </div>
                <div className='button_panel'>
                    <Button text='red button' color={ButtonColors.red}/>
                </div>
                <div className='button_panel'>
                    <Button text='cian button' color={ButtonColors.cian}/>
                </div>
                <div className='button_panel'>
                    <Button text='white button' color={ButtonColors.cian}/>
                </div>
            </div>
        </div>
    }
}