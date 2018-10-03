import { IModule } from "./IModule";
import { ModuleLoader } from "../container_services/module_loader/ModuleLoader";

/// Container should provide common services for all independent apps
export class Container {
    private readonly _moduleLoader: ModuleLoader = new ModuleLoader();
    private readonly _window: Window = window;
    private _currentModule: IModule = new EmptyModule();

    public run(): void {
        const ref = this._window.location.href;
        const body = this._window.document.body;
        const rootElement = body.querySelector('#root');

        this.runModule('SpaceListModule', rootElement);
    }


    private async runModule(name: string, hostElement: Element): Promise<void> {
        await this._moduleLoader.loadModule(name);
        const module = this._moduleLoader.getModule(name);

        this._currentModule.destroy();
        this._currentModule = module;
        this._currentModule.run(hostElement);
    }
}

class EmptyModule implements IModule {
    run(hostElement: Element): void { }   
    destroy(): void { }
}