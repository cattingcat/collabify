import { Container } from "container/Container";
import 'kit/common.scss';

const container = new Container();
(<any>window).mainContainer = container;
container.run();