import axios from 'axios';
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

// Axios setup
window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// Pusher setup for Laravel Echo
window.Pusher = Pusher;

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: import.meta.env.VITE_PUSHER_APP_KEY, // Replace with your Pusher key
    cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER, // Replace with your Pusher cluster
    forceTLS: true
});
