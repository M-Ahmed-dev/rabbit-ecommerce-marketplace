import { FiPhoneCall } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { TbBrandMeta } from "react-icons/tb";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-0">
        <div>
          <h3 className="text-lg text-gray-800 mb-4 ">Newsletter</h3>
          <p className="text-gray-500 mb-4">
            Be the first to hear about new products, exclusive events and online
            offers.
          </p>
          <p className="font-medium text-sm tex-gray-600 mb-6">
            Sing up and get 10% off on your first order.
          </p>
          {/* newsletter form */}

          <form action="" className="flex ">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 w-full text-sm border-t border-l border-b border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
              required
            />
            <button className="cursor-pointer bg-black px-6 py-3 text-sm rounded-r-md text-white hover:bg-gray-800 transition-all">
              Subscribe
            </button>
          </form>
        </div>

        {/* Shop Section */}

        <div>
          <h3 className="text-lg text-gray-800 mb-4">Shop</h3>
          <ul className="spacey-y-2 text-gray-600">
            <li>
              <Link className="hover:text-gray-500 transition-color" to="#">
                Men's Top Wear
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-500 transition-color" to="#">
                Women's Top Wear
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-500 transition-color" to="#">
                Men's Bottom Wear
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-500 transition-color" to="#">
                Men's Top Wear
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg text-gray-800 mb-4">Support</h3>
          <ul className="spacey-y-2 text-gray-600">
            <li>
              <Link className="hover:text-gray-500 transition-color" to="#">
                Contacts Us
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-500 transition-color" to="#">
                About Us
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-500 transition-color" to="#">
                FAQs
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-500 transition-color" to="#">
                Features
              </Link>
            </li>
          </ul>
        </div>

        {/* Follow us */}

        <div>
          <h3 className="text-lg text-gray-800 mb-4">Follow Us</h3>
          <div className="flex items-center space-x-4 mb-6">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500"
            >
              <TbBrandMeta className="h-5 w-5" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500"
            >
              <IoLogoInstagram className="h-5 w-5" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500"
            >
              <RiTwitterXLine className="h-4 w-4" />
            </a>
          </div>
          <p className="text-gray-500">Call Us</p>
          <p>
            <FiPhoneCall className="inline-block mr-2" />
            0123 456 7890
          </p>
        </div>
      </div>
      {/* Footer bottom */}
      <div className="container mx-auto mt-12 px-4 lg:px-0 border-t border-gray-200 pt-6">
        <p className="text-gray-500 text-center text-sm tracking-tighter">
          2025, All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
