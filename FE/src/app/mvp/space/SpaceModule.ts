import { Space } from './Space';
import { Module, ContainerContext } from "container/Module";
import * as ReactDom from "react-dom";
import * as React from "react";

class SpaceModule implements Module {
    setContext(context: ContainerContext): void { }

    run(hostElement: Element): void {
        const component = React.createElement(Space);
        ReactDom.render(component, hostElement);
    }

    destroy(): void { }
}


(<any>window).modules.SpaceModule = new SpaceModule();