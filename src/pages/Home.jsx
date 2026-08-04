import { Link } from "react-router-dom";
import HeroWatch from "../assets/hero-watch.png.png";

export default function Home() {
  return (
    <main className="bg-[#0b0b0b] text-white">

      <section className="relative min-h-screen overflow-hidden">

        {/* Blur */}
        <div className="absolute -left-40 top-20 w-96 h-96 bg-yellow-500/20 blur-[180px] rounded-full pointer-events-none"></div>
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-yellow-500/10 blur-[180px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 min-h-screen grid lg:grid-cols-2 items-center">

          <div>

            <p className="uppercase tracking-[10px] text-yellow-500 font-semibold">
              Luxury Collection
            </p>

            <h1 className="text-6xl lg:text-8xl font-extrabold mt-6 leading-none">
              TIME IS
              <br />
              <span className="text-yellow-500">
                LUXURY
              </span>
            </h1>

            <p className="text-gray-400 mt-8 text-lg max-w-lg leading-8">
              Discover exclusive Swiss watches created for people who appreciate
              prestige, precision and timeless elegance.
            </p>

            <div className="relative z-10 flex gap-5 mt-10">

              <Link
                to="/products"
                className="relative z-10 bg-yellow-500 text-black px-8 py-4 rounded-full font-semibold hover:scale-105 duration-300"
              >
                Shop Now
              </Link>

              <Link
                to="/about"
                className="relative z-10 border border-gray-500 px-8 py-4 rounded-full hover:border-yellow-500 hover:text-yellow-500 duration-300"
              >
                Explore
              </Link>

            </div>

          </div>

          <div className="relative flex justify-center">

            <img
              src={HeroWatch}
              alt="Luxury Watch"
              className="w-[650px] hover:scale-105 duration-500 drop-shadow-[0_40px_80px_rgba(255,215,0,.25)]"
            />

          </div>

        </div>

      </section>

    </main>
  );
}