window.Echo.channel('test-channel')
    .listen('.test-event', (e) => {
        console.log('Notification:', e.message);
        alert(e.message);
    })
    .error((error) => {
        console.error('Error subscribing to channel:', error);
    });
