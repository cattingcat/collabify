export type StatusId = number;

export type StatusColor = 'red' | 'blue' | 'green' | 'purple' | 'yellow' | 'gray';

export interface Status {
    readonly id: StatusId;
    readonly title: string;
    readonly color: StatusColor;
}