import { Status } from "./Status";

export interface Workflow {
    readonly statuses: Array<Status>;
}