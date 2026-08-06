import { useNavigate } from "react-router-dom";
import { useProductStore } from "@/zustand/product-store";
import { FaHeart, FaRegHeart } from "react-icons/fa";

import watch1 from "../assets/watch1.png";
import watch2 from "../assets/watch2.png";
import watch3 from "../assets/watch3.png";
import watch4 from "../assets/watch4.png";
import watch5 from "../assets/watch5.png";
import watch6 from "../assets/watch6.png";

const images = [watch1, watch2, watch3, watch4, watch5, watch6];

export default function ProductsCard({ data }) {

  
  
  const navigate = useNavigate();
  const addBasket = useProductStore((state) => state.addBasket);
  const wishlist = useProductStore((state) => state.wishlist);
const toggleWishlist = useProductStore((state) => state.toggleWishlist);
  

  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-yellow-950 py-12">

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <h2 className="text-4xl sm:text-5xl font-black text-center text-white mb-3">
          Luxury Watches
        </h2>

        <p className="text-center text-yellow-400 text-sm sm:text-lg mb-10 tracking-widest uppercase">
          Premium Collection
        </p>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">


          {data.map((product) => {
  const isFavorite = wishlist.some(
    (item) => item.id === product.id
  );

  return (
    <div
      key={product.id}
      onClick={() => navigate(`/products/${product.id}`)}
      className="
      group
      cursor-pointer
      bg-zinc-900/80
      backdrop-blur-xl
      rounded-3xl
      overflow-hidden
      border
      border-yellow-500/20
      shadow-xl
      hover:shadow-yellow-500/20
      hover:-translate-y-2
      transition-all
      duration-500
      "
    >
      {/* IMAGE */}
      <div className="relative overflow-hidden bg-gradient-to-br from-zinc-800 to-black">

        <img
          src={images[(product.id - 1) % images.length]}
          alt={product.title}
          className="
          w-full
          h-64 sm:h-72
          object-cover
          group-hover:scale-110
          transition-transform
          duration-700
          "
        />

        <span
          className="
          absolute
          top-4
          left-4
          bg-yellow-500
          text-black
          text-[10px]
          font-black
          px-3
          py-1.5
          rounded-full
          uppercase
          tracking-widest
          "
        >
          New
        </span>

        <button
  onClick={(e) => {
    e.stopPropagation();

    toggleWishlist({
      ...product,
      thumbnail: images[(product.id - 1) % images.length],
    });
  }}
  className="absolute top-4 right-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur transition-all duration-300 hover:scale-110"
>
  {isFavorite ? (
    <FaHeart className="text-red-500 text-xl" />
  ) : (
    <FaRegHeart className="text-red-500 text-xl" />
  )}
</button>
      </div>

      {/* CONTENT */}
      <div className="p-4 sm:p-5">

        <h3 className="text-xl font-bold text-white mb-2">
          {product.title}
        </h3>

        <p className="text-zinc-400 text-sm leading-6 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-end justify-between gap-3 mt-6">

          <div className="min-w-0">
            <p className="text-zinc-500 text-xs uppercase tracking-wider">
              Price
            </p>

            <h4 className="text-xl sm:text-2xl font-black text-yellow-400">
              ${Math.floor(product.price)}
            </h4>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();

              addBasket({
                ...product,
                thumbnail: images[(product.id - 1) % images.length],
              });
            }}
            className="
            bg-yellow-500
            text-black
            px-4
            py-2.5
            rounded-xl
            text-sm
            font-bold
            whitespace-nowrap
            hover:bg-yellow-400
            transition
            shadow-lg
            shadow-yellow-500/20
            "
          >
            Add to Cart
          </button>

        </div>

      </div>

    </div>
  );
})}

        </div>


      </div>


    </section>
  );
}