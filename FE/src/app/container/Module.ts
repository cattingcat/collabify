import { ContainerContext } from 'container/ContainerContext';

export interface Module {
    setContext(context: ContainerContext): void;
    run(hostElement: Element): void;
    destroy(): void;
}

export { ContainerContext };