import { Container } from "container/Container";
import { ServiceWorkerService } from "container/ServiceWorkerService";
import 'kit/common.scss';

const container = new Container();
(<any>window).mainContainer = container;
container.run();
