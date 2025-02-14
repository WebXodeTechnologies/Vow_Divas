"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/public/VowDivalogo.svg";
import { navItems } from "@/data/index";

const Navbar = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full px-5 md:px-10 py-3 flex items-center justify-between border-b border-dotted border-b-amber-400 z-50 transition-all ${
        resolvedTheme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image
          src={Logo}
          alt="logo"
          width={80}
          height={40}
          className="object-contain px-2"
        />
        <h2 className="text-3xl md:text-3xl font-normal tracking-wide px-2">
          Vow Divas
        </h2>
      </Link>

      {/* Right Side */}
      <div className="flex items-center gap-6">
        {/* Theme Toggle */}
        {mounted && (
          <button
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-900 transition"
          >
            {resolvedTheme === "dark" ? (
              <MdSunny className="text-yellow-400 w-5 h-5 md:w-6 md:h-6" />
            ) : (
              <FaMoon className="text-gray-800 dark:text-gray-200 w-5 h-5 md:w-6 md:h-6" />
            )}
          </button>
        )}

        {/* Hamburger Menu */}
        <button onClick={() => setMenuOpen(true)} className="p-2 md:p-3">
          <RxHamburgerMenu
            className={`w-7 h-7 md:w-8 md:h-8 ${
              resolvedTheme === "dark" ? "text-white" : "text-gray-900"
            }`}
          />
        </button>
      </div>

      {/* Full-Screen Side Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 bg-white dark:bg-black flex flex-col items-center justify-center z-50"
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 text-white"
            >
              <RxCross2 className="w-10 h-10" />
            </button>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
              className="text-center space-y-6"
            >
              {navItems.map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link href={item.href} passHref>
                    <h3
                      className="text-2xl md:text-4xl font-syne text-white hover:text-gray-400 cursor-pointer"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.title}
                    </h3>
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
