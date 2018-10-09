import * as React from 'react';


export interface ListProps {
    readonly models: Array<Object>;
}


export class List extends React.Component<ListProps> {
    render(): JSX.Element { 
        const elements = this.props.models.map((i) => <div>1111 --- {i}</div>);
        return <div>
            {elements}
            <span>Hello world!</span>
        </div>;
    }
}