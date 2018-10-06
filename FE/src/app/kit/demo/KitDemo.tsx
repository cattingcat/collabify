import * as React from 'react';
import { ButtonDemo } from '../button/demo/ButtonDemo';
import { TypoDemo } from '../typo/demo/TypoDemo';
import "./kit_demo.scss";
import { HttpClient } from '../../container_services/http_client/HttpClient';

export class KitDemo extends React.Component {
    render(): JSX.Element {
        // TODO: Put your component-demos here
        return <div>
            <TypoDemo />
            <ButtonDemo />
            <button onClick={this.btnClick}>Text</button>
        </div>
    }

    btnClick(){
        let client = new HttpClient();
        let response = client.send("/");
        console.log(response);
    }
}