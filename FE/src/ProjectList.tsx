import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { KitDemo } from './app/kit/demo/KitDemo';
//import './main.scss';

const componentsDemo = <KitDemo />
    
const root = document.getElementById('root');

ReactDOM.render(componentsDemo, root);