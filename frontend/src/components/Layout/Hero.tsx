import { Link } from "react-router-dom";
import heroImage from "../../assets/rabbit-hero.webp";
import { ReactTyped } from "react-typed";

function Hero() {
  return (
    <section className="relative">
      <img
        src={heroImage}
        alt="Hero"
        className="w-full h-[400px] md:h-[600px] lg:h-[750px] object-cover"
      />

      <div className="absolute inset-0 bg-opacity-5 bg-black/5 flex items-center justify-center">
        <div className="text-center text-white p-6">
          <h1 className="text-4xl md:text-9xl font-bold tracking-tighter uppercase mb-4">
            <ReactTyped
              strings={["Vacation Ready."]} // Single line
              typeSpeed={60}
              backSpeed={40}
              loop
            />
          </h1>
          <p className="text-sm tracking-tighter md:text-lg mb-6">
            Explore our vacation ready-outfits with fast worldwide shipping
          </p>

          <Link
            to="#"
            className="bg-white text-gray-950 px-6 py-2 rounded-sm text-lg"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
