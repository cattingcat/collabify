import * as React from 'react';
import { List } from 'components/list/List';


export class ListDemo extends React.Component {
    render(): JSX.Element {

        const array = [1, 2, 3];
        return <div className='list_demo'>
            <List models={array}></List>
        </div>
    }
}