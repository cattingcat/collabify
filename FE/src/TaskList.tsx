import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Grid } from './app/components/grid/Grid';
import './main.scss';

const componentsDemo = <Grid />
    
const root = document.getElementById('root');

ReactDOM.render(componentsDemo, root);