import { useProductStore } from "@/zustand/product-store";
import { FaHeart } from "react-icons/fa";

export default function Wishlist() {
  const { wishlist, toggleWishlist, addBasket } = useProductStore();

  if (wishlist.length === 0) {
    return (
      <section className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-yellow-950 flex items-center justify-center px-6">
      <div className="text-center max-w-md">

        <div className="text-7xl mb-6">⌚</div>

        <h1 className="text-4xl font-black text-white">
          Your Wishlist is Empty
        </h1>

        <p className="mt-4 text-zinc-400 leading-7">
          Save your favorite luxury watches and they'll appear here.
        </p>

        <button
          onClick={() => window.location.href = "/products"}
          className="mt-8 bg-yellow-500 text-black font-bold px-8 py-4 rounded-xl hover:bg-yellow-400 transition"
        >
          Explore Watches
        </button>

      </div>
    </section>
    );
  }

  return (
    <div className="min-h-screen bg-black py-10 px-4">
      <h1 className="text-4xl font-bold text-center text-yellow-400 mb-10">
        Wishlist
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {wishlist.map((product) => (
          <div
            key={product.id}
            className="bg-zinc-900 rounded-2xl overflow-hidden border border-yellow-500/20"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-64 object-cover"
            />

            <div className="p-5">
              <h2 className="text-white text-xl font-bold">
                {product.title}
              </h2>

              <p className="text-yellow-400 text-2xl font-bold mt-3">
                ${Math.floor(product.price)}
              </p>

             <div className="flex items-center gap-3 mt-6">

  <button
  onClick={() => addBasket(product)}
  className="
    flex-1
    h-12
    sm:h-13
    bg-gradient-to-r
    from-yellow-500
    to-yellow-400
    text-black
    rounded-xl
    font-bold
    flex
    items-center
    justify-center
    gap-2
    transition-all
    duration-300
    hover:scale-[1.03]
    hover:shadow-lg
    hover:shadow-yellow-500/30
  "
>
  <span>🛒</span>

  <span className="hidden sm:inline">
    Add to Cart
  </span>

  <span className="sm:hidden">
    Cart
  </span>
</button>

  <button
    onClick={() => toggleWishlist(product)}
    className="h-12 w-12 rounded-full border border-red-500/30 bg-zinc-800 hover:bg-red-500 transition flex items-center justify-center"
  >
    <FaHeart className="text-red-500 text-lg" />
  </button>

</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}