import { motion } from 'framer-motion';
import Link from 'next/link';
import AnimatedImage from '@/components/AnimatedImage';
import Footer from '@/components/Footer';
import { projects } from '@/data/projects';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export default function Projects() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Project Showcase
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-600 dark:text-gray-400 mb-12"
        >
          Explore my portfolio of successful SEO projects across diverse industries
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <Link href={`/projects-info?id=${project.id}`}>
                <div className="relative h-48 w-full">
                  <AnimatedImage
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">
                    {project.category}
                  </span>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-2 mb-2">
                    {project.title}
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 text-sm line-clamp-3">
                    {project.description}
                  </p>
                  {project.searchVolume && (
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
                      Search Volume: {project.searchVolume}
                    </p>
                  )}
                  <div className="mt-4">
                    <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold hover:underline">
                      View Details →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Additional Highlights */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mt-20"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8"
          >
            Additional Highlights
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              variants={itemVariants}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Business Ideas for Women
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                Search Volume: 22,200 monthly searches
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Developed comprehensive editorial content targeting entrepreneurial women, addressing
                informational queries whilst building platform authority.
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                What is SKU Educational Content
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                Search Volume: 5,400 monthly searches
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Created educational resource explaining fundamental eCommerce concepts, serving as
                entry point for new sellers.
              </p>
            </motion.div>
          </div>
        </motion.section>
      </motion.div>

      <Footer />
    </div>
  );
}

