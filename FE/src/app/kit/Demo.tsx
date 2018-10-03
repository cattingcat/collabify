import * as React from 'react';
import {ButtonDemo} from './button/demo/ButtonDemo';
import "./demo.scss";
import { TypoDemo } from './typo/demo/TypoDemo';

export class ComponentsDemo extends React.Component {
    render(): JSX.Element {
        // TODO: Put your demo apps here
        return <div>
            <TypoDemo />
            <ButtonDemo />
        </div>
    }
}