import * as React from 'react';
import './id_cell.scss';;

interface IdCellProps {
    readonly id: any;
    readonly className?: string;
}

export class IdCell extends React.Component<IdCellProps> {
    constructor(props: IdCellProps) {
        super(props);
    }

    render(): JSX.Element {
        const p = this.props;
        const classes = `id_cell ${p.className}`;

        return <div className={classes}>
            {p.id}
        </div>
    }
}