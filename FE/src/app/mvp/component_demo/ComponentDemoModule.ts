import * as ReactDOM from 'react-dom';
import { IModule } from "container/IModule";
import { componentsDemo } from './ComponentDemo';

class ComponentDemoModule implements IModule {
    run(hostElement: Element): void {
        ReactDOM.render(componentsDemo, hostElement);
    }

    destroy(): void {
        
    }
}

(window as any).modules.ComponentDemoModule = new ComponentDemoModule();