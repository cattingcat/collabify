import { SpaceId } from "domain/Space";

export interface SpaceModel {
    readonly id: SpaceId;
    readonly name: string;
    readonly logoUri: string;
}