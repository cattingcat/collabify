import { IModule } from "./IModule";
import { ModuleLoader } from "../container_services/module_loader/ModuleLoader";
import { MessageBus } from "../container_services/bus/MessageBus";

/// Container should provide common services for all independent apps
export class Container {
    private readonly moduleLoader: ModuleLoader = new ModuleLoader();
    private readonly bus: MessageBus = new MessageBus();

    private readonly _window: Window = window;
    private _currentModule: IModule = new EmptyModule();

    public run(): void {
        const ref = this._window.location.href;
        const body = this._window.document.body;
        

        this._window.onhashchange = (e) => {
            console.log(e);
        }

        this.runRootModule('ComponentDemoModule');
    }


    private async runRootModule(name: string): Promise<void> {
        const rootElement = this._window.document.body.querySelector('#root');

        await this.moduleLoader.loadModule(name);
        const module = this.moduleLoader.getModule(name);

        this._currentModule.destroy();
        this._currentModule = module;
        this._currentModule.run(rootElement);
    }
}

class EmptyModule implements IModule {
    run(hostElement: Element): void { }   
    destroy(): void { }
}