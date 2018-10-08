import { Module } from "container/Module";
import { MessageBus, ModuleLoader, NotificationServiceImpl } from "container_services";
import { ServiceWorkerService } from "container/ServiceWorkerService";
import { ContainerContext } from "container/ContainerContext";
import { moduleRouting } from "container/ModuleRouting";

/// Container should provide common services for all independent apps
export class Container {
    private readonly swService     = new ServiceWorkerService();
    private readonly moduleLoader  = new ModuleLoader();
    private readonly bus           = new MessageBus();
    private readonly notifications = new NotificationServiceImpl();

    private readonly _window: Window = window;
    private _currentModule: Module = new EmptyModule();
    private _containerContext: ContainerContext;

    public async run(): Promise<void> {
        const reg = await this.swService.register();
        await this.notifications.setup();

        const ref = this._window.location.href;
        const body = this._window.document.body;
        
        this._window.addEventListener('hashchange', (e) => this._handleHashChange());
        this._containerContext = new ContainerContext(this.bus, this.notifications);

        this._handleHashChange();
    }


    private async _runRootModule(name: string): Promise<void> {
        const rootElement = this._window.document.body.querySelector('#root');

        await this.moduleLoader.loadModule(name);
        const module = this.moduleLoader.getModule(name);

        this._currentModule.destroy();
        this._currentModule = module;
        this._currentModule.setContext(this._containerContext);
        this._currentModule.run(rootElement);
    }

    private _handleHashChange(): void {
        const hash = this._window.location.hash;
        const parts = hash.replace('#', '').split('/').filter((i) => i != '');
        const mainPart = parts[0] || '';
        const moduleName = moduleRouting[mainPart];

        if(moduleName == null) {
            const defaultModule = moduleRouting[''];
            this._runRootModule(defaultModule);
        } else {
            this._runRootModule(moduleName);
        }
    }
}

class EmptyModule implements Module {
    setContext(context: ContainerContext): void { }
    run(hostElement: Element): void { }   
    destroy(): void { }
}