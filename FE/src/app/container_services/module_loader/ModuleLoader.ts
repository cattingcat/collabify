import { IModule } from "../../container/IModule";
import { AssertionError } from "assert";
import { resolve } from "path";

/// Loads JS-modules for independent apps
export class ModuleLoader {
    private readonly _modules: {[name: string] : IModule} = {};
    private readonly _window: Window = window;
    
    constructor() {
        (<any>this._window).modules = this._modules;
    }


    public loadModule(name: string): Promise<void> {
        if(this._modules[name] != null) {
            return Promise.resolve();
        }

        const modulePath = `/js/${name}.bundle.js`;
        
        const promise = new Promise<void>((resolve, reject) => {
            const scriptElement = this._window.document.createElement('script');
            scriptElement.type = 'text/javascript'
            scriptElement.src = modulePath;
            scriptElement.onload = () => resolve();
            this._window.document.head.appendChild(scriptElement);
        });

        return promise;
    }

    public getModule(name: string): IModule {
        const module = this._modules[name];

        if(module == null) throw new AssertionError({message: 'Module should be loaded'});
 
        return module;
    }
}