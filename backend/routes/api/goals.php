<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GoalController;

Route::controller(GoalController::class)->group(function () {
    Route::get('/goals', 'index')
        ->name('index');

    Route::post('/goals', 'store')
        ->name('store');

    Route::patch('/goals/{goal}', 'update')
        ->name('update')
        ->whereNumber('goal')
        ->where('goal', '[0-9]+');

    Route::delete('/goals/{goal}', 'destroy')
        ->name('destroy')
        ->whereNumber('goal')
        ->where('goal', '[0-9]+');
});
