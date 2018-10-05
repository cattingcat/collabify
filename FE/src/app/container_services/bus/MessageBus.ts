import { Observable, Subscribable, PartialObserver, Unsubscribable } from 'rxjs';
import { Message } from './Message';

class MessageBus implements Subscribable<Message> {
    readonly _bus: Observable<Message>;

    constructor() {
        this._bus = new Observable<Message>((o) => {
            window.onmessage = (msgEvent) => {
                const msg = msgEvent.data as Message;
                o.next(msg);
            };
        });
    }
    
    public subscribe(observer?: PartialObserver<Message>): Unsubscribable;
    public subscribe(next?: (value: Message) => void, error?: (error: any) => void, complete?: () => void): Unsubscribable;
    subscribe(a?: any, b?: (error: any) => void, c?: () => void): Unsubscribable {
        return this._bus.subscribe(a, b, c);
    }

    post(msg: Message): void {
        window.postMessage(msg, '*');
    }
}

export {Message, MessageBus};