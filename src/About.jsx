import { FaAward, FaGem, FaClock } from "react-icons/fa";

export default function About() {
  return (
    <main className="bg-[#0b0b0b] text-white">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-28">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <div>

            <p className="uppercase tracking-[8px] text-yellow-500 font-semibold">
              About Us
            </p>

            <h1 className="text-6xl font-bold mt-6 leading-tight">
              Crafted For <br />
              True Collectors
            </h1>

            <p className="text-gray-400 mt-8 leading-8 text-lg">
              We believe that a luxury watch is more than an accessory.
              It represents prestige, confidence and timeless elegance.
              Every model in our collection is selected with the highest
              standards of quality and craftsmanship.
            </p>

          </div>

          <div className="relative flex justify-center">

            <div className="absolute w-80 h-80 bg-yellow-500/20 blur-[150px] rounded-full"></div>

            <img
              src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=700"
              alt=""
              className="relative w-[500px] rounded-3xl"
            />

          </div>

        </div>

      </section>

      {/* STATS */}

      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-[#151515] rounded-3xl p-10 border border-[#222] hover:border-yellow-500 duration-300">

            <h2 className="text-5xl font-bold text-yellow-500">
              25+
            </h2>

            <p className="text-gray-400 mt-4">
              Years of Experience
            </p>

          </div>

          <div className="bg-[#151515] rounded-3xl p-10 border border-[#222] hover:border-yellow-500 duration-300">

            <h2 className="text-5xl font-bold text-yellow-500">
              10K+
            </h2>

            <p className="text-gray-400 mt-4">
              Happy Customers
            </p>

          </div>

          <div className="bg-[#151515] rounded-3xl p-10 border border-[#222] hover:border-yellow-500 duration-300">

            <h2 className="text-5xl font-bold text-yellow-500">
              100%
            </h2>

            <p className="text-gray-400 mt-4">
              Premium Quality
            </p>

          </div>

        </div>

      </section>

      {/* FEATURES */}

      <section className="max-w-7xl mx-auto px-6 pb-32">

        <h2 className="text-center text-5xl font-bold mb-16">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-[#151515] rounded-3xl p-10 text-center hover:-translate-y-3 duration-300">

            <FaAward className="text-5xl text-yellow-500 mx-auto"/>

            <h3 className="text-2xl font-bold mt-6">
              Premium Quality
            </h3>

            <p className="text-gray-400 mt-4">
              Every watch is made with exceptional craftsmanship.
            </p>

          </div>

          <div className="bg-[#151515] rounded-3xl p-10 text-center hover:-translate-y-3 duration-300">

            <FaGem className="text-5xl text-yellow-500 mx-auto"/>

            <h3 className="text-2xl font-bold mt-6">
              Luxury Design
            </h3>

            <p className="text-gray-400 mt-4">
              Elegant models created for modern collectors.
            </p>

          </div>

          <div className="bg-[#151515] rounded-3xl p-10 text-center hover:-translate-y-3 duration-300">

            <FaClock className="text-5xl text-yellow-500 mx-auto"/>

            <h3 className="text-2xl font-bold mt-6">
              Timeless Style
            </h3>

            <p className="text-gray-400 mt-4">
              Watches that never go out of fashion.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}