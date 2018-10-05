import { IModule } from "container/IModule";

class SpaceListModule implements IModule {

    run(hostElement: Element): void {
        console.log(`SpaceListModule#run() - host: ${hostElement}`);
    }

    destroy(): void {
        
    }
}


(<any>window).modules.SpaceListModule = new SpaceListModule();