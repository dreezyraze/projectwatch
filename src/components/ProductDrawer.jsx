import { FaShoppingCart } from "react-icons/fa";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useProductStore } from "@/zustand/product-store";
import toast from "react-hot-toast";

export default function ProductDrawer() {
  const products = useProductStore((state) => state.products);
  

  const increaseQuantity = useProductStore(
    (state) => state.increaseQuantity
  );

  const decreaseQuantity = useProductStore(
    (state) => state.decreaseQuantity
  );

  const removeBasket = useProductStore(
    (state) => state.removeBasket
  );

  const clearBasket = useProductStore(
  (state) => state.clearBasket
);

  const total = products.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const totalCount = products.length;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="relative cursor-pointer rounded-full p-3 text-gray-200 transition hover:bg-blue-100 hover:text-blue-600">
          <FaShoppingCart size={25} />

          {totalCount > 0 && (
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
              {totalCount}
            </span>
          )}
        </button>
      </SheetTrigger>


      <SheetContent 
        side="right" 
        className="w-full sm:w-[420px] p-0"
      >

        <div className="flex h-full flex-col">


          {/* Header */}
          <div className="border-b p-5 sm:p-6">

            <h2 className="text-xl sm:text-2xl font-bold">
              🛒 Shopping Cart
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              {totalCount} item(s) in your cart
            </p>

          </div>



          {/* Body */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6">

            {products.length > 0 ? (

              <div className="space-y-4">


                {products.map((product) => (

                  <div
                    key={product.id}
                    className="flex gap-3 rounded-xl border p-3 shadow-sm"
                  >

                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="h-16 w-16 sm:h-20 sm:w-20 shrink-0 rounded-lg bg-slate-100 object-contain"
                    />



                    <div className="flex min-w-0 flex-1 flex-col">


                      <h3 className="truncate font-semibold text-sm sm:text-base">
                        {product.title}
                      </h3>


                      <p className="mt-1 whitespace-nowrap text-sm sm:text-base font-bold text-indigo-600">
                        ${(product.price * product.quantity).toFixed(2)}
                      </p>



                      <div className="mt-3 flex flex-wrap items-center gap-2">


                        <button
                          onClick={() =>
                            decreaseQuantity(product.id)
                          }
                          className="h-8 w-8 rounded-lg bg-gray-200 hover:bg-gray-300"
                        >
                          -
                        </button>


                        <span className="w-6 text-center font-semibold">
                          {product.quantity}
                        </span>


                        <button
                          onClick={() =>
                            increaseQuantity(product.id)
                          }
                          className="h-8 w-8 rounded-lg bg-gray-200 hover:bg-gray-300"
                        >
                          +
                        </button>



                        <button
                          onClick={() =>
                            removeBasket(product.id)
                          }
                          className="ml-auto rounded-lg bg-red-500 px-3 py-1 text-sm text-white hover:bg-red-600"
                        >
                          Remove
                        </button>


                      </div>


                    </div>


                  </div>

                ))}


              </div>


            ) : (


              <div className="flex h-full items-center justify-center">

                <div className="text-center">

                  <p className="text-6xl">
                    🛍️
                  </p>

                  <h3 className="mt-4 text-xl font-semibold">
                    Your cart is empty
                  </h3>

                  <p className="mt-2 text-gray-500">
                    Add a watch to your basket.
                  </p>

                </div>

              </div>


            )}

          </div>




          {/* Footer */}
          {/* Footer */}
{products.length > 0 && (
  <div className="border-t p-5 sm:p-6">

    <div className="mb-5 flex items-center justify-between">

      <span className="text-lg font-semibold">
        Total
      </span>

      <span className="text-2xl font-bold text-yellow-500">
        ${total.toFixed(2)}
      </span>

    </div>

    <div className="flex gap-3">

      <button
        onClick={clearBasket}
        className="
          flex-1
          rounded-xl
          border
          border-red-500
          py-3
          font-bold
          text-red-500
          hover:bg-red-500
          hover:text-white
          transition
        "
      >
        🗑 Clear Cart
      </button>

      <button
        onClick={() => {
          toast.success("🎉 Thank you for your purchase!");

          setTimeout(() => {
            clearBasket();
          }, 2000);
        }}
        className="
          flex-1
          rounded-xl
          bg-yellow-500
          py-3
          font-bold
          text-black
          hover:bg-yellow-400
          transition
        "
      >
        🛒 Checkout
      </button>

    </div>

  </div>
)}


        </div>


      </SheetContent>

    </Sheet>
  );
}