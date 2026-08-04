import { useNavigate } from "react-router-dom";
import { useProductStore } from "@/zustand/product-store";

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

  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-yellow-950 py-16">

      <div className="max-w-7xl mx-auto px-6">


        <h2 className="text-5xl font-black text-center text-white mb-3">
          Luxury Watches
        </h2>


        <p className="text-center text-yellow-400 text-lg mb-14 tracking-widest uppercase">
          Premium Collection
        </p>



        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">


          {data.map((product) => (

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
              hover:-translate-y-3
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
                  h-80 
                  object-cover
                  group-hover:scale-110
                  transition-transform
                  duration-700
                  "
                />


                <span
                  className="
                  absolute 
                  top-5 
                  left-5 
                  bg-yellow-500
                  text-black
                  text-xs
                  font-black
                  px-4
                  py-2
                  rounded-full
                  uppercase
                  tracking-widest
                  "
                >
                  New
                </span>


              </div>




              {/* CONTENT */}

              <div className="p-6">


                <h3 className="text-2xl font-bold text-white mb-3">
                  {product.title}
                </h3>



                <p className="text-zinc-400 leading-7 line-clamp-2">
                  {product.description}
                </p>




                <div className="flex items-center justify-between mt-8">


                  <div>

                    <p className="text-zinc-500 text-sm">
                      Price
                    </p>


                    <h4 className="text-3xl font-black text-yellow-400">
                      ${product.price.toFixed(2)}
                    </h4>


                  </div>




                  <button

                    onClick={(e) => {

                      e.stopPropagation();

                      addBasket({
                        ...product,
                        thumbnail:
                          images[(product.id - 1) % images.length],
                      });

                    }}

                    className="
                    bg-yellow-500
                    text-black
                    px-6
                    py-3
                    rounded-xl
                    font-black
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

          ))}


        </div>


      </div>


    </section>
  );
}