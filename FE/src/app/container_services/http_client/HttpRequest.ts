export class HttpRequest {

    constructor(readonly url: string,
                readonly header: Map<string, string>,
                readonly body? : string) { }

}