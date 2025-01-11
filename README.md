# Laravel Broadcasting with Pusher

This repository demonstrates a simple Laravel application that integrates broadcasting using **Pusher**. The application includes:

- Setting up Pusher for real-time notifications.
- Broadcasting an event.
- A frontend to test notifications.

## Installation Guide

Follow the steps below to set up and run the project:

### Prerequisites

- PHP >= 8.2
- Composer
- Node.js and npm
- Pusher account

### Steps

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/mejba13/laravel-broadcasting-with-pusher.git
   cd laravel-broadcasting-with-pusher
   ```

2. **Install Dependencies**:

   ```bash
   composer install
   npm install
   npm run dev
   ```

3. **Environment Setup**:

   Copy `.env.example` to `.env`:

   ```bash
   cp .env.example .env
   ```

   Update the `.env` file with your Pusher credentials:

   ```env
   BROADCAST_DRIVER=pusher
   CACHE_DRIVER=file
   QUEUE_CONNECTION=sync
   SESSION_DRIVER=file
   SESSION_LIFETIME=120

   PUSHER_APP_ID=1924053
   PUSHER_APP_KEY=3cb936b7c46ede5a1b7c
   PUSHER_APP_SECRET=c0e2ea6cbddaaa557a97
   PUSHER_APP_CLUSTER=mt1

   VITE_PUSHER_APP_KEY=3cb936b7c46ede5a1b7c
   VITE_PUSHER_APP_CLUSTER=mt1
   ```

4. **Generate Application Key**:

   ```bash
   php artisan key:generate
   ```

5. **Run the Application**:

   ```bash
   php artisan serve
   ```

6. **Run the Queue Worker**:

   ```bash
   php artisan queue:work
   ```

7. **Test the Application**:

   Visit `http://localhost:8000/test-notification` to test the notification system. Open the browser console to verify the event is broadcasted.

## Code Explanation

### Event

**`TestNotificationEvent.php`**:

```php
<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class TestNotificationEvent implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $message;

    public function __construct($message)
    {
        $this->message = $message;
    }

    public function broadcastOn()
    {
        return new Channel('test-channel');
    }
}
```

### Route

**`web.php`**:

```php
use Illuminate\Support\Facades\Route;
use App\Events\TestNotificationEvent;

Route::get('/test-notification', function () {
    event(new TestNotificationEvent('Hello, this is a test notification!'));
    return view('test-notification');
});
```

### Frontend Script

**`resources/js/test-notification.js`**:

```javascript
window.Echo.channel('test-channel')
    .listen('.test-event', (e) => {
        console.log('Notification:', e.message);
        alert(e.message);
    });
```

### Blade View

**`resources/views/test-notification.blade.php`**:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Test Notification</title>
    @vite('resources/js/app.js')
</head>
<body>
    <h1>Laravel Broadcasting with Pusher</h1>
    <p>Open your browser console to see the notification.</p>
</body>
</html>
```

## Screenshot

![Success Screenshot](https://s3.us-east-1.amazonaws.com/mejba.me/laravel-pusher.png)

## 🔗 Let's Connect

- **Instagram**: [engr_mejba_ahmed](https://www.instagram.com/engr_mejba_ahmed/)
- **TikTok**: [engr_mejba_ahmed](https://www.tiktok.com/@engr_mejba_ahmed)
- **YouTube**: [Engr Mejba Ahmed](https://www.youtube.com/channel/UCfLIuNxRfXT7HmvvB9Ld0SA)
- **Twitter**: [@mejba_92](https://x.com/mejba_92)
- **LinkedIn**: [Engr Mejba Ahmed](https://www.linkedin.com/in/engr-mejba-ahmed-795ab3165/)
- **Facebook**: [Engr Mejba Ahmed](https://www.facebook.com/engrmejbaahmed/)
- **Reddit**: [engrmejbaahmed](https://www.reddit.com/user/engrmejbaahmed/)
- **Pinterest**: [engrmejbaahmed](https://www.pinterest.com/engrmejbaahmed/)
- **GitLab**: [engr-mejba-ahmed](https://gitlab.com/engr-mejba-ahmed)
- **LeetCode**: [engrmejbaahmed](https://leetcode.com/u/engrmejbaahmed/)
- **HackerOne**: [Engr Mejba Ahmed](https://hackerone.com/engrmejbaahmed?type=user)
- **HackerRank**: [Dashboard](https://www.hackerrank.com/dashboard)
- **Bugcrowd**: [EngrMejbaAhmed](https://bugcrowd.com/EngrMejbaAhmed)
- **Medium**: [Engr Mejba Ahmed](https://medium.com/@engr-mejba-ahmed)
- **TryHackMe**: [EngrMejbaAhmed](https://tryhackme.com/r/p/EngrMejbaAhmed)
- **Codewars**: [mejba13](https://www.codewars.com/users/mejba13)
- **GitHub**: [mejba13](https://github.com/mejba13)
- **PentesterLab**: [lucid_hacker_721](https://pentesterlab.com/profile/lucid_hacker_721)
- **DEV.to**: [Engr Mejba Ahmed](https://dev.to/engrmejbaahmed)
- **Quora**: [Engr Mejba Ahmed](https://www.quora.com/profile/Engr-Mejba-Ahmed)
