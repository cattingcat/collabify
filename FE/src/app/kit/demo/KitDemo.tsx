import * as React from 'react';
import { ButtonDemo } from 'kit/button/demo/ButtonDemo';
import { TypoDemo } from 'kit/typo/demo/TypoDemo';
import "./kit_demo.scss";
import { HttpClient } from '../../container_services/http_client/HttpClient';
import { HttpRequest } from 'container_services/http_client/HttpRequest';

export class KitDemo extends React.Component {
    render(): JSX.Element {
        // TODO: Put your component-demos here
        return <div>
            <TypoDemo />
            <ButtonDemo />
            <button onClick={this.btnClick}>Text</button>
        </div>
    }

    async btnClick(){
        const client = new HttpClient();
        const header = new Map<string, string>();
        // header.set("Content-Type", "application/json");
        const json : string = `{
            "name": "morpheus",
            "job": "leader"
        }`;
        //https://reqres.in/api/users
        const response = await client.postAsync(new HttpRequest("/ajax-test-post", header, json));
        console.log(response.json);
    }
}