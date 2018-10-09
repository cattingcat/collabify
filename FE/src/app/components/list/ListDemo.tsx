import * as React from 'react';
import { List } from 'components/list/List';


export class ListDemo extends React.Component {
    render(): JSX.Element {
        return <div className='list_demo'>
            <List models={[]}></List>
        </div>
    }
}