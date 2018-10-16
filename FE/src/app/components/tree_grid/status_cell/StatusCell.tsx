import * as React from 'react';
import './status_cell.scss';


interface StatusCellProps {
    readonly title: string;
    readonly color: string;
    readonly className?: string;
}


export class StatusCell extends React.Component<StatusCellProps> {
    constructor(props: StatusCellProps) {
        super(props);
    }

    render(): JSX.Element {
        const classes = `status_cell ${this.props.className}`;
        const p = this.props;
        const s = this.state;
    

        return <div 
            className={classes}>

            {p.title}
           
        </div>
    }
}