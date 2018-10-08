import { Module, ContainerContext } from "container/Module";
import * as ReactDom from 'react-dom';
import { componentsDemo } from './ComponentDemo';

class ComponentDemoModule implements Module {
    setContext(context: ContainerContext): void { }

    run(hostElement: Element): void {
        ReactDom.render(componentsDemo, hostElement);
    }

    destroy(): void { }
}

(window as any).modules.ComponentDemoModule = new ComponentDemoModule();