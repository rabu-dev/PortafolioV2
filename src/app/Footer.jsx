"use client";

import React from 'react';
import Image from "next/image";
const Footer = () => {
 

  return (
    <>
      <footer className="row-start-3 flex flex-col sm:flex-row gap-6 sm:gap-12 flex-wrap items-center justify-center bg-gray-100 dark:bg-gray-900 p-4 rounded-lg shadow-lg shadow-gray-800">
        <p className="text-center text-sm text-gray-600 dark:text-gray-300 md:text-left">
          Made by RabuDev {new Date().getFullYear()}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <a
            className="flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            href="/blog"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="https://nextjs.org/icons/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            Blog
          </a>
          <a
            className="flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            href="/coding"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="https://nextjs.org/icons/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
           Edit Coding
          </a>
          <a
            className="flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            href="https://github.com/rabu-dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="https://nextjs.org/icons/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            GitHub Profile →
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
