export interface IModule {
    run(hostElement: Element): void;
    destroy(): void;
}