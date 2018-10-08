import { MessageBus, NotificationService } from "container_services";

export class ContainerContext {
    public readonly bus: MessageBus;
    public readonly notificationService: NotificationService;

    constructor(bus: MessageBus, notificationService: NotificationService) {
        this.bus = bus;
        this.notificationService = notificationService;
    }
}