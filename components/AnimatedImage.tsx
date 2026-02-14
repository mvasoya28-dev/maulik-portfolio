'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

interface AnimatedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

export default function AnimatedImage({
  src,
  alt,
  width = 800,
  height = 600,
  className = '',
  priority = false,
}: AnimatedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`relative overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-800 flex items-center justify-center ${className}`}
        style={{ minHeight: height }}
      >
        <p className="text-gray-500 dark:text-gray-400 text-center p-8">
          Image not available
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.95 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`relative overflow-hidden rounded-lg ${className}`}
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        className="relative w-full h-full"
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="object-cover w-full h-full"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          priority={priority}
        />
        {!isLoaded && !hasError && (
          <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse" />
        )}
      </motion.div>
    </motion.div>
  );
}

