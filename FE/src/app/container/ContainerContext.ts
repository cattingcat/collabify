import { MessageBus, NotificationService } from "container_services";

export class ContainerContext {
    constructor(
        readonly bus: MessageBus, 
        readonly notificationService: NotificationService) { }
}