// https://medium.com/commencis/web-push-notifications-with-service-workers-cf6ec8005a6c


export class ServiceWorkerService {
    private static readonly _path = '/sw.js';

    async register(): Promise<ServiceWorkerRegistration> {
        try {
            const sw = navigator.serviceWorker;
            const reg = await sw.register(ServiceWorkerService._path, {scope: '/'});
            await sw.ready;
            // const pushSubscription = await reg.pushManager.subscribe({userVisibleOnly: true});
            // const pushPermissionState = await reg.pushManager.permissionState();
            
            console.log(`scope: ${reg.scope}; `);

            sw.addEventListener('message', (e) => {
                console.log(e);
            });

            return reg;
        } catch(err) {
            console.log(err)
        }
    }

    sendMessage(message: any): void {
        navigator.serviceWorker.controller.postMessage(message);
    }
}