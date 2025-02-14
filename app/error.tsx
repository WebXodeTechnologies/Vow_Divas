'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ErrorImage from '@/public/error.svg';

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-center px-6">
      <Image src={ErrorImage} alt="Error" width={300} height={300} className="mb-6" />
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
        Oops! Something went wrong.
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        {error?.message || "We can't seem to find the page you're looking for."}
      </p>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex gap-4">
        {/* Retry Button */}
        <button
          onClick={() => reset()} // Resets the error boundary
          className="px-6 py-3 text-lg font-medium text-white bg-red-600 rounded-lg shadow-md hover:bg-red-700 transition"
        >
          Try Again
        </button>
        {/* Home Button */}
        <Link href="/">
          <button className="px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition">
            Go Back Home
          </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default Error;
