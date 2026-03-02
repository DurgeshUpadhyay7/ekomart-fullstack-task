'use client';

import Image from "next/image";
import { useCart } from "../context/CartContext";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

export default function CheckoutPage() {

  const { cart } = useCart();

  // ✅ TOTAL PRICE
  const totalPrice = cart.reduce(
    (total: number, item: Product) => total + item.price,
    0
  );

  return (
    <section className="min-h-screen bg-gray-100 py-16">

      <div className="max-w-6xl mx-auto px-4">

        <h1 className="text-3xl font-bold mb-10">
          Checkout
        </h1>

        {cart.length === 0 ? (
          <p className="text-gray-600">
            Your cart is empty.
          </p>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">

            {/* CART ITEMS */}
            <div className="md:col-span-2 space-y-4">

              {cart.map((item: Product, index: number) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm"
                >

                  <Image
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="object-contain"
                  />

                  <div className="flex-1">
                    <h3 className="font-semibold">
                      {item.name}
                    </h3>
                    <p className="text-gray-500">
                      ${item.price}
                    </p>
                  </div>

                </div>
              ))}

            </div>

            {/* ORDER SUMMARY */}
            <div className="bg-white p-6 rounded-lg shadow-sm h-fit">

              <h2 className="text-xl font-semibold mb-6">
                Order Summary
              </h2>

              <div className="flex justify-between mb-3">
                <span>Items</span>
                <span>{cart.length}</span>
              </div>

              <div className="flex justify-between mb-3">
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>

              <div className="flex justify-between mb-3">
                <span>Shipping</span>
                <span>Free</span>
              </div>

              <hr className="my-4" />

              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>

              <button className="w-full mt-6 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition">
                Place Order
              </button>

            </div>

          </div>
        )}

      </div>

    </section>
  );
}