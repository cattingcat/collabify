import { Container } from "../../container/Container";

const container = new Container();
(<any>window).mainContainer = container;
container.run();