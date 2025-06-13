import { HiOutlineShoppingBag, HiOutlineUser } from "react-icons/hi";
import { HiBars3BottomRight } from "react-icons/hi2";
import { LuRabbit } from "react-icons/lu";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

function Navbar() {
  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link
          to="/"
          className="group text-2xl flex items-center space-x-2 p-2 border-4 border-gray-600 border-dashed rounded-2xl hover:bg-black  hover:text-white"
        >
          <LuRabbit className="h-6 w-6 text-gray-700 group-hover:text-white" />
          <span className="font-bold">Rabbit co.</span>
        </Link>
        {/* Center nav */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Men
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Women
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Outer Wear
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Bottom Wear
          </Link>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <Link to="/profile" className="hover:text-black">
            <HiOutlineUser className="h-6 w-6 text-gray-700" />
          </Link>
          <button className="relative hover:text-black">
            <HiOutlineShoppingBag className="h-6 w-6 text-gray-700" />
            <span className="absolute -top-1 bg-[var(--rabbit-red)] text-white text-xs rounded-full py-0.5 px-2">
              4
            </span>
          </button>
          <div className="overflow-hidden">
            <SearchBar />
          </div>
          <button>
            <HiBars3BottomRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
