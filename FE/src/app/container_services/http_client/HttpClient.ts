export class HttpClient {

    send(url: string) : string {
        let request = new XMLHttpRequest();

        request.open('GET', url, false);
        request.setRequestHeader("Content-Type", "application/x-www-form-undercoded");

        request.send("foo=bar&lorem=ipsum");

        return request.getAllResponseHeaders();
    }

    postAsync(url: string) : string {
        let request = new XMLHttpRequest();

        return request.response;
    }
}