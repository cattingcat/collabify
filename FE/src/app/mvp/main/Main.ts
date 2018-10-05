import { Container } from "container/Container";
import 'kit/common.scss';

const container = new Container();
(<any>window).mainContainer = container;
container.run();

// TODO: https://habr.com/company/2gis/blog/345552/
navigator.serviceWorker.register('/js/sw.js')
    .then(() => navigator.serviceWorker.ready.then((worker) => {
        worker.sync.register('syncdata');
    }))
    .catch((err) => console.log(err));