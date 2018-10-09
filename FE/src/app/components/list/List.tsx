import * as React from 'react';


export interface ListProps {
    readonly models: Array<Object>;
}


export class List extends React.Component<ListProps> {
    render(): JSX.Element { 
        return <span>Hello world!</span>
    }
}