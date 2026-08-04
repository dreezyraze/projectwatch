import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import {
  getProductById,
  getWatches,
} from "../axios/fetch/product";
import { useProductStore } from "@/zustand/product-store";

import watch1 from "../assets/watch1.png";
import watch2 from "../assets/watch2.png";
import watch3 from "../assets/watch3.png";
import watch4 from "../assets/watch4.png";
import watch5 from "../assets/watch5.png";
import watch6 from "../assets/watch6.png";



const images = [watch1, watch2, watch3, watch4, watch5, watch6];

export default function ProductsCardDetails() {

  const navigate = useNavigate();
  const addBasket = useProductStore((state) => state.addBasket);
  const { id } = useParams();

const [selectedProduct, setSelectedProduct] = useState(null);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductById(id),
  });
  const { data: watches = [] } = useQuery({
  queryKey: ["watches"],
  queryFn: getWatches,
});
useEffect(() => {
  if (data) {
    setSelectedProduct({
      ...data,
      thumbnail: images[(data.id - 1) % images.length],
    });
  }
}, [data]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="h-12 w-12 rounded-full border-4 border-indigo-600 border-t-transparent animate-spin"></div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500 text-xl">
        {error.message}
      </div>
    );
  }
  return (
  <section className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-yellow-950 py-16 px-4">

    <div className="max-w-7xl mx-auto bg-zinc-900/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-yellow-500/20 overflow-hidden">

     <div className="grid lg:grid-cols-2 gap-8 p-5 sm:p-10">


        {/* LEFT IMAGE */}

        <div className="relative rounded-3xl bg-gradient-to-br from-zinc-800 to-black border border-yellow-500/20 overflow-hidden flex flex-col items-center justify-center p-10">


         

          <button className="absolute top-6 right-6 h-12 w-12 rounded-full bg-zinc-900 border border-yellow-500/30 flex items-center justify-center hover:scale-110 transition">
    <FaHeart className="text-yellow-400 text-xl"/>
  </button>

 <img
  src={selectedProduct?.thumbnail}
  alt={selectedProduct?.title}
  className="w-full max-w-[320px] h-[320px] object-contain mx-auto transition duration-700 hover:scale-110 drop-shadow-2xl"
/>

          <div className="mt-8 flex gap-4 flex-wrap justify-center">

            {watches.map((watch) => (
  <img
    key={watch.id}
    src={images[(watch.id - 1) % images.length]}
    onClick={() => {
  navigate(`/products/${watch.id}`);

  setSelectedProduct({
    ...watch,
    thumbnail: images[(watch.id - 1) % images.length],
  });
}}
    className={`h-20 w-20 rounded-xl object-cover cursor-pointer border-2 transition duration-300 ${
      selectedProduct?.id === watch.id
        ? "border-yellow-400 scale-110 shadow-lg shadow-yellow-500/30"
        : "border-zinc-700 hover:border-yellow-400"
    }`}
  />
))}

          </div>

        </div>



        {/* RIGHT CONTENT */}


        <div className="flex flex-col justify-center">


          <p className="uppercase tracking-[0.3em] text-yellow-400 font-bold">
            Luxury Collection
          </p>


          <h1 className="text-5xl font-black mt-4 text-white">
            {selectedProduct?.title}
          </h1>


          <div className="flex items-center gap-3 mt-5">

            <span className="text-yellow-400 text-xl">
              ⭐⭐⭐⭐⭐
            </span>

            <span className="text-zinc-400">
              (4.9 Reviews)
            </span>

          </div>



          <p className="mt-8 text-zinc-400 leading-8 text-lg">
            {selectedProduct?.description}
          </p>



          <div className="grid grid-cols-3 gap-4 mt-10">


            <div className="bg-zinc-800 border border-yellow-500/10 rounded-2xl p-5 text-center">
              <div className="text-2xl">
                🚚
              </div>

              <p className="mt-2 text-white text-sm font-semibold">
                Free Shipping
              </p>

            </div>



            <div className="bg-zinc-800 border border-yellow-500/10 rounded-2xl p-5 text-center">

              <div className="text-2xl">
                🛡️
              </div>

              <p className="mt-2 text-white text-sm font-semibold">
                Warranty
              </p>

            </div>



            <div className="bg-zinc-800 border border-yellow-500/10 rounded-2xl p-5 text-center">

              <div className="text-2xl">
                📦
              </div>

              <p className="mt-2 text-white text-sm font-semibold">
                In Stock
              </p>

            </div>


          </div>




          <div className="mt-10 flex items-center gap-5">


            <span className="text-5xl font-black text-yellow-400">
              ${selectedProduct?.price?.toFixed(2)}
            </span>


            <span className="bg-yellow-500 text-black px-4 py-2 rounded-full font-bold">
              15% OFF
            </span>


          </div>




          <div className="flex flex-col sm:flex-row gap-5 mt-10">


        <button
  onClick={() => addBasket(selectedProduct)}
  className="
    w-full
    sm:flex-1
    flex
    items-center
    justify-center
    gap-2
    bg-yellow-500
    text-black
    py-4
    px-6
    rounded-2xl
    text-lg
    font-black
    whitespace-nowrap
    hover:bg-yellow-400
    transition
    shadow-lg
    shadow-yellow-500/20
  "
>
  🛒 Add to Cart
</button>



            <button
  onClick={() => window.history.back()}
  className="
    w-full
    sm:w-auto
    px-8
    py-4
    rounded-2xl
    border
    border-zinc-700
    text-white
    hover:bg-zinc-800
    transition
  "
>
  ← Back
</button>


          </div>


        </div>


      </div>


    </div>


  </section>
);
}