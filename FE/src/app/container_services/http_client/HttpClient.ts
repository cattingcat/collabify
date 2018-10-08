import { HttpRequest } from "./HttpRequest";
import { HttpResponse } from "./HttpResponse";

export class HttpClient {

    postAsync(request: HttpRequest): Promise<HttpResponse> {
        //TODO: обработка того, что реквест null

        if (request == null)
            return;

        return new Promise<HttpResponse>((resolve, reject) => {

            const xhr = new XMLHttpRequest();

            xhr.open('POST', request.url, true);
            request.header.forEach((key, value) => {
                xhr.setRequestHeader(key, value);
            });

            xhr.onload = function () {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve(new HttpResponse(xhr.responseText));
                } else {
                    reject(xhr.statusText);
                }
            };

            xhr.onerror = function () {
                reject(xhr.statusText);
            }
        });
    }

    //TODO: impl
    getAsync(request: HttpRequest) : Promise<HttpResponse> {
        return new Promise<HttpResponse>(() => {

        });
    }
}