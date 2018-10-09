import { HttpRequest } from "./HttpRequest";
import { HttpResponse } from './HttpResponse';

export class HttpClient {
    post(request: HttpRequest): Promise<HttpResponse> {
        return this._request('POST', request);
    }

    get(request: HttpRequest) : Promise<HttpResponse> {
        return this._request('GET', request);
    }


    private _request(method: 'GET' | 'POST', req: HttpRequest) : Promise<HttpResponse> {
        if (req == null) return;

        const promise = new Promise<HttpResponse>((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open(method, req.url);
            req.header.forEach((key, value) => {
                xhr.setRequestHeader(key, value);
            });

            xhr.onload = () => {
                if (xhr.status >= 200 && xhr.status < 300) {
                    const res = new HttpResponse(xhr.responseText);
                    resolve(res);
                } else {
                    reject(xhr.statusText);
                }
            };

            xhr.onerror = () => {
                reject(xhr.statusText);
            }

            xhr.send();
        });

        return promise;
    }
}

export { HttpRequest, HttpResponse };