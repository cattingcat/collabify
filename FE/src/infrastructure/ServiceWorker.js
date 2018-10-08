self.addEventListener('install', (event) => {
    console.log('SW installed');
});

self.addEventListener('activate', (event) => {
    console.log('SW activated');

    setInterval(() => {
        console.log('hey');
        //self.registration.showNotification('test');
    }, 10000);

    clients.matchAll().then(clients => {
        clients.forEach(client => {
            client.postMessage('sw msg');
        });
    });
});

self.addEventListener('fetch', (event) => {
    console.log('SW fetch');
});

self.addEventListener('message', function(event){
    console.log("SW message: " + event.data);
    const port = event.ports[0];
    if(port) {
        port.postMessage("SW Says 'Hello back!'");
    }
});

self.addEventListener('push', function(event) {
    console.log('SW push');

    var title = 'Yay a message.';
    var body = 'We have received a push message.';
    var icon = '/images/smiley.svg';
    var tag = 'simple-push-example-tag';
    var notifPromise = self.registration.showNotification(title, {
        body: body,
        icon: icon,
        tag: tag
    });

    event.waitUntil(notifPromise);
});