<!DOCTYPE html>
<html>
<head>
<title>Add Product</title>

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">

</head>

<body class="container mt-5">

<h2>Add Product</h2>

<form action="{{ route('products.store') }}"
method="POST"
enctype="multipart/form-data">

@csrf

<input name="name"
class="form-control mb-3"
placeholder="Product Name">

<input name="price"
class="form-control mb-3"
placeholder="Price">

<textarea name="description"
class="form-control mb-3"
placeholder="Description"></textarea>

<input type="file"
name="image"
class="form-control mb-3">

<button class="btn btn-success">
Add Product
</button>

</form>

</body>
</html>