"use client";
import Link from "next/link";
import { useState } from "react";
import logo from "../../image/Home/babellogo.png";
import { AlignJustify, X } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-white sticky top-0 right-0 border-b-2 border-b-gray-50 z-[999]">
      <div className="flex items-center justify-between container max-w-screen-2xl mx-auto px-4 py-5">
        {/* logo */}
        <Link href="/">
          <div className="flex gap-1 justify-center items-center">
            <Image src={logo} alt="babelforge" className="w-full h-12" />
            <h3 className="text-3xl font-bold text-[#106ac5]">BabelForge</h3>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-6 items-center justify-center">
            <li>Product</li>
            <li>Team</li>
            <li>Platform</li>
            <li>Work</li>
            <Link href="/contactus">
              <li className="hover:text-blue-500">Contact Us</li>
            </Link>
          </ul>
        </nav>

        {/* Desktop Right Menu */}
        <div className="md:flex items-center space-x-4 hidden">
          <ul className="flex items-start space-x-4">
            <Link href="/pricing">
              <li className="hover:text-blue-500">Price</li>
            </Link>
            <li>Login</li>
          </ul>
          {/* <Button text="Get Started" icon={<IoMdArrowForward size={20} />} /> */}
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <X size={30} /> : <AlignJustify size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col space-y-4  py-4">
            <li className="border-b border-gray-100 pb-3 px-6">Product</li>
            <li className="border-b border-gray-100 pb-3 px-6">Team</li>
            <li className="border-b border-gray-100 pb-3 px-6">Platform</li>
            <Link href="/contactus">
              <li className="border-b border-gray-100 pb-3 px-6">Contact Us</li>
            </Link>
            <Link href="/pricing">
              <li className="border-b border-gray-100 pb-3 px-6">Price</li>
            </Link>
            <li className="border-b border-gray-100 pb-3 px-6">Login</li>
            <li>
              {/* <div className="w-full items-center justify-center flex">
                <Button
                  text="Get Started"
                  icon={<IoMdArrowForward size={20} />}
                />
              </div> */}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
