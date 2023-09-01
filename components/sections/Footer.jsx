import Link from "next/link";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-white-gray">
      <div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 container-div  text-gray-900 gap-6">
          <div className="capitalize space-y-3">
            <h3 className="font-bold">Techzone</h3>
            <p>
              jamalpur,mymenshingh,
              <br />
              bangladesh
            </p>
            <div className="flex space-x-3">
              <a
                className="bg-white p-2 rounded-full shadow-md hover:bg-yellow-500 transition-colors duration-500 "
                href="/"
              >
                <FaInstagram />
              </a>
              <a
                className="bg-white p-2 rounded-full shadow-md hover:bg-yellow-500 transition-colors duration-500 "
                href="/"
              >
                <FaFacebookF />
              </a>
              <a
                className="bg-white p-2 rounded-full shadow-md hover:bg-yellow-500 transition-colors duration-500 "
                href="/"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
          <div>
            <h2 className="font-semibold capitalize ">company</h2>
            <div className="flex flex-col space-y-2 mt-3">
              <Link href="/">About us</Link>
              <Link href="/">Career</Link>
              <Link href="/">How it work</Link>
            </div>
          </div>
          <div>
            <h2 className="font-semibold capitalize ">policy</h2>
            <div className="flex flex-col space-y-2 mt-3">
              <Link href="/">FAQ</Link>
              <Link href="/">Privacy</Link>
              <Link href="/">Shipping</Link>
            </div>
          </div>
          <div>
            <h2 className="font-semibold capitalize ">get in touch</h2>
            <div className="space-y-2 mt-3">
              <p>+8801641758653</p>
              <p className="pl-1">techzone@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="px-6 sm:mx-16 py-5 border-t text-center">
          <p>@2023 TechZone,ALL RIGHT RESERVED</p>
        </div>
      </div>
    </footer>
  );
}
