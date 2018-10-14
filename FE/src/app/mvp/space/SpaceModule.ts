import { Space } from './Space';
import { Module, ContainerContext } from "container/Module";
import * as ReactDom from "react-dom";
import * as React from "react";

class SpaceModule implements Module {
    private _element: Element;

    setContext(context: ContainerContext): void { }

    run(hostElement: Element): void {
        this._element = hostElement;
        const component = React.createElement(Space);
        ReactDom.render(component, hostElement);
    }

    destroy(): void { 
        ReactDom.unmountComponentAtNode(this._element);
    }
}


(<any>window).modules.SpaceModule = new SpaceModule();