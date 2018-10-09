import { NotificationService, NotificationHandlers } from "container_services";

const _granted = 'granted';

export class NotificationServiceImpl implements NotificationService {
    async setup(): Promise<void> {
        if (Notification.permission == _granted) {
            //this.showNotification("already granted");
        } else if (Notification.permission != "denied") {
            const permission = await Notification.requestPermission();
            
            if (permission == _granted) {
                this.showNotification('Hi there!');
            }
        }
    }

    showNotification(title: string, options?: NotificationOptions, handlers?: NotificationHandlers): void {
        const notification = new Notification(title, options);
        if(handlers != null) {
            notification.onclick = handlers.click;
            notification.close = handlers.close;
        }
    }
}