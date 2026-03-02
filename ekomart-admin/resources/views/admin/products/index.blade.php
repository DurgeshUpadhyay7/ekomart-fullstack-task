<h2>Products</h2>

<a href="{{ route('products.create') }}"
class="btn btn-primary mb-3">
Add Product
</a>

<table class="table">
<tr>
<th>ID</th>
<th>Name</th>
<th>Price</th>
<th>Image</th>
</tr>

@foreach($products as $product)
<tr>
<td>{{ $product->id }}</td>
<td>{{ $product->name }}</td>
<td>${{ $product->price }}</td>
<td>
<img src="/uploads/{{ $product->image }}" width="60">
</td>
</tr>
@endforeach

</table>