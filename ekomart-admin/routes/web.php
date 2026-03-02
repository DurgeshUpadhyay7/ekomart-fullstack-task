<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\ProductController;

Route::prefix('admin')->group(function () {

    Route::get('/dashboard', function () {
        return view('admin.dashboard');
    });

    Route::get('/products',[ProductController::class,'index'])
        ->name('products.index');

    Route::get('/products/create',[ProductController::class,'create'])
        ->name('products.create');

    Route::post('/products/store',[ProductController::class,'store'])
        ->name('products.store');

});