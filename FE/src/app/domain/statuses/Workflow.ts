import { Status } from "./Status";

export type WorkflowId = number;

export interface Workflow {
    readonly id: WorkflowId;
    readonly title: String;
    readonly statuses: Array<Status>;
}