export interface NotificationService {
    showNotification(
        title: string, 
        options?: NotificationOptions, 
        handlers?: NotificationHandlers): void;
}

export interface NotificationHandlers {
    click(): void;
    close(): void;
}