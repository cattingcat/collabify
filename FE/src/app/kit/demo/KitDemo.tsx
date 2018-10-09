import * as React from 'react';
import { ButtonDemo } from 'kit/button/demo/ButtonDemo';
import { TypoDemo } from 'kit/typo/demo/TypoDemo';
import "./kit_demo.scss";
import { HttpRequest, HttpResponse, HttpClient } from 'container_services/http_client/HttpClient';
import { ListDemo } from 'components/list/ListDemo';

export class KitDemo extends React.Component {
    render(): JSX.Element {
        // TODO: Put your component-demos here
        return <div>
            <TypoDemo />
            <ButtonDemo />
            <ListDemo />
            <button onClick={this.btnClick}>Text</button>
        </div>
    }

    async btnClick(){
        const client = new HttpClient();
        const header = new Map<string, string>();
        const json : string = `{
            "name": "morpheus",
            "job": "leader"
        }`;
        
        const req = new HttpRequest("https://reqres.in/api/users", header, json);
        const res = await client.post(req);
        console.log(res.json);
    }
}