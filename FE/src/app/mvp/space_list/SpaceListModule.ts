import { Module, ContainerContext } from "container/Module";

class SpaceListModule implements Module {
    setContext(context: ContainerContext): void { }

    run(hostElement: Element): void {
        console.log(`SpaceListModule#run() - host: ${hostElement}`);
    }

    destroy(): void { }
}


(<any>window).modules.SpaceListModule = new SpaceListModule();