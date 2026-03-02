# 🛒 Ekomart Grocery Store – React + Laravel Full Stack

This project is a **Full Stack E-Commerce Application** built using **React (Next.js)** for the frontend and **Laravel** for the backend Admin Panel.

The application replicates the layout and functionality of the **Ekomart Grocery Website** and includes product management through a custom Laravel Admin Panel.

---

## 🚀 Project Features

### ✅ Frontend (React / Next.js)

* Modern E-commerce Home Page
* Ekomart-style UI layout
* Responsive Navbar & Footer
* Category Section
* Product Grid Display
* Product Cards with:

  * Image
  * Name
  * Price
  * Add to Cart Button
  * Buy Now Button
* Cart State Management
* Checkout Page Navigation

---

### ✅ Cart Functionality

* **Add to Cart**

  * Adds product into global cart state
* **Buy Now**

  * Redirects user to Checkout page
* Dynamic Order Summary

---

### ✅ Backend (Laravel Admin Panel)

Custom Admin Panel built **without using ready-made templates**.

Includes:

* Admin Dashboard
* Product Management System
* Add Product Page
* Image Upload Support
* Product Listing Page
* Database Storage using MySQL
* MVC Architecture (Model, View, Controller)

---

## 🏗️ Tech Stack

### Frontend

* React
* Next.js
* Tailwind CSS
* TypeScript
* Lucide Icons

### Backend

* Laravel 10+
* PHP
* MySQL
* Blade Templates

---

## 📂 Project Structure

```
project-root
│
├── frontend (Next.js)
│   ├── components
│   ├── app
│   ├── cart context
│   └── checkout page
│
└── ekomart-admin (Laravel)
    ├── app/Models/Product.php
    ├── app/Http/Controllers/Admin
    ├── resources/views/admin
    ├── routes/web.php
    └── database/migrations
```

---

## ⚙️ Installation Guide

---

### ✅ Frontend Setup

```bash
npm install
npm run dev
```

Runs on:

```
http://localhost:3000
```

---

### ✅ Laravel Backend Setup

Go to admin folder:

```bash
cd ekomart-admin
```

Install dependencies:

```bash
composer install
```

Create environment file:

```bash
cp .env.example .env
```

Generate key:

```bash
php artisan key:generate
```

---

### ✅ Database Setup (MySQL)

Create database in phpMyAdmin:

```
ekomart
```

Update `.env`

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=ekomart
DB_USERNAME=root
DB_PASSWORD=
```

Run migrations:

```bash
php artisan migrate
```

---

### ✅ Run Laravel Server

```bash
php artisan serve
```

Open:

```
http://127.0.0.1:8000/admin/dashboard
```

---

## 🧑‍💼 Admin Panel Routes

| Page         | URL                      |
| ------------ | ------------------------ |
| Dashboard    | `/admin/dashboard`       |
| Product List | `/admin/products`        |
| Add Product  | `/admin/products/create` |

---

## 📸 Product Upload Flow

```
Admin → Add Product
        ↓
Form Submit
        ↓
Image Upload
        ↓
Saved to MySQL Database
        ↓
Displayed in Product List
```

---

## ✅ Assignment Requirements Completed

* ✔ React Home Page matching Ekomart layout
* ✔ Product Grid UI
* ✔ Add to Cart functionality
* ✔ Buy Now → Checkout flow
* ✔ Custom Laravel Admin Panel
* ✔ Add Product Form
* ✔ Database Storage
* ✔ Image Upload System

---

## 👨‍💻 Developer

**Durgesh Upadhyay**

Frontend Developer | React | Laravel | Full Stack Enthusiast

---

## 📌 Future Improvements

* Laravel API Integration with React
* Authentication System
* Order Management
* Payment Gateway Integration
* Admin Authentication

---

## ⭐ Project Status

✅ Assignment Completed
✅ Fully Functional
✅ Ready for Submission
