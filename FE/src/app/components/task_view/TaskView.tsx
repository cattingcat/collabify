import * as React from 'react';
import { Status } from 'domain/statuses/Status';
import { User } from 'domain/User';

interface TaskViewProps {
    readonly className?: string;
    readonly title: string;
    readonly description: string;
    readonly status: Status;
    readonly user: User;
}

interface TaskViewState {

}

export class TaskView extends React.Component<TaskViewProps, TaskViewState> {
    constructor(props: TaskViewProps) {
        super(props);
        
    }

    render(): JSX.Element {
        return <div>
            "LALALALALALAL"
        </div>
    }
}