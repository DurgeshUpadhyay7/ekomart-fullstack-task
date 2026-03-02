'use client';

import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../../app/context/CartContext";
import { useRouter } from "next/navigation";

type Product = {
  id: number;
  name: string;
  price: number;
  oldPrice: number;
  image: string;
};

const products: Product[] = [
  { id: 1, name: "Fresh Orange", price: 36, oldPrice: 50, image: "/products/05.jpg" },
  { id: 2, name: "Sauces Pack", price: 36, oldPrice: 50, image: "/products/06.jpg" },
  { id: 3, name: "Pumpkin Bread Mix", price: 36, oldPrice: 50, image: "/products/02.jpg" },
  { id: 4, name: "Nestle Cerelac", price: 36, oldPrice: 50, image: "/products/01.jpg" },
  { id: 5, name: "Aptamil Milk", price: 36, oldPrice: 50, image: "/products/03.jpg" },
  { id: 6, name: "Apple Juice", price: 36, oldPrice: 50, image: "/products/04.jpg" },
  { id: 7, name: "Bread Mix", price: 36, oldPrice: 50, image: "/products/07.jpg" },
  { id: 8, name: "Town House Crackers", price: 36, oldPrice: 50, image: "/products/08.jpg" },
];

function ProductCard({ product }: { product: Product }) {

  // ✅ CART CONTEXT
  const { addToCart } = useCart();

  // ✅ ROUTER
  const router = useRouter();

  return (
    <div className="bg-white rounded-lg border hover:shadow-lg transition p-4 relative group">

      <span className="absolute top-3 left-3 bg-yellow-400 text-xs font-semibold px-2 py-1">
        25% Off
      </span>

      {/* IMAGE */}
      <div className="bg-gray-100 rounded-md h-52 flex items-center justify-center overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          width={200}
          height={200}
          className="object-contain group-hover:scale-110 transition duration-300"
        />
      </div>

      {/* NAME */}
      <h3 className="mt-4 font-semibold text-gray-800 text-sm">
        {product.name}
      </h3>

      <p className="text-xs text-gray-500 mb-2">500g Pack</p>

      {/* PRICE */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-red-600 font-bold text-lg">
          ${product.price}.00
        </span>
        <span className="line-through text-gray-400 text-sm">
          ${product.oldPrice}.00
        </span>
      </div>

      {/* ✅ BUTTONS */}
      <div className="flex gap-2">

        {/* ADD TO CART */}
        <button
          onClick={() => addToCart(product)}
          className="flex-1 border border-green-600 text-green-600 py-2 rounded hover:bg-green-600 hover:text-white transition flex items-center justify-center gap-2"
        >
          <ShoppingCart size={16} />
          Add
        </button>

        {/* BUY NOW */}
        <button
          onClick={() => {
            addToCart(product); // ✅ add first
            router.push("/checkout"); // ✅ then navigate
          }}
          className="flex-1 bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          Buy Now
        </button>

      </div>
    </div>
  );
}

export function ProductGrid() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-3xl font-bold mb-10">
          Featured Grocery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
}