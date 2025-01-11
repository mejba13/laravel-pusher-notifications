<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

use App\Events\TestNotificationEvent;

Route::get('/test-notification', function () {
    event(new TestNotificationEvent("Hello, this is a test notification!"));
    return view('test-notification');
});
