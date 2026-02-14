import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import AnimatedImage from '@/components/AnimatedImage';
import Footer from '@/components/Footer';
import { projects } from '@/data/projects';
import { Project } from '@/types';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function ProjectInfo() {
  const router = useRouter();
  const { id } = router.query;
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    if (id && typeof id === 'string') {
      const foundProject = projects.find((p) => p.id === id);
      setProject(foundProject || null);
    }
  }, [id]);

  if (!project) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <p className="text-gray-600 dark:text-gray-400">Loading project details...</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Project Image */}
        <motion.div
          variants={itemVariants}
          className="mb-12"
        >
          <AnimatedImage
            src={project.image}
            alt={project.title}
            width={1200}
            height={600}
            className="w-full"
            priority
          />
        </motion.div>

        {/* Project Header */}
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">
            {project.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
            {project.title}
          </h1>
          {project.searchVolume && (
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Search Volume: <span className="font-semibold">{project.searchVolume}</span>
            </p>
          )}
        </motion.div>

        {/* Overview */}
        {project.overview && (
          <motion.section
            variants={itemVariants}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Project Overview
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              {project.overview}
            </p>
          </motion.section>
        )}

        {/* Key Deliverables */}
        {project.keyDeliverables && project.keyDeliverables.length > 0 && (
          <motion.section
            variants={itemVariants}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Key Deliverables
            </h2>
            <ul className="space-y-3">
              {project.keyDeliverables.map((deliverable, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start text-gray-700 dark:text-gray-300"
                >
                  <span className="text-blue-600 dark:text-blue-400 mr-3 mt-1">✓</span>
                  <span className="text-lg">{deliverable}</span>
                </motion.li>
              ))}
            </ul>
          </motion.section>
        )}

        {/* Strategic Approach */}
        {project.strategicApproach && project.strategicApproach.length > 0 && (
          <motion.section
            variants={itemVariants}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Strategic Approach
            </h2>
            <ul className="space-y-3">
              {project.strategicApproach.map((approach, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start text-gray-700 dark:text-gray-300"
                >
                  <span className="text-blue-600 dark:text-blue-400 mr-3 mt-1">•</span>
                  <span className="text-lg">{approach}</span>
                </motion.li>
              ))}
            </ul>
          </motion.section>
        )}

        {/* Achievements */}
        {project.achievements && project.achievements.length > 0 && (
          <motion.section
            variants={itemVariants}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Strategic Achievements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg"
                >
                  <p className="text-gray-700 dark:text-gray-300">{achievement}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Impact Metrics */}
        {project.impactMetrics && (
          <motion.section
            variants={itemVariants}
            className="mb-12 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-lg"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Impact Metrics
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              {project.impactMetrics}
            </p>
          </motion.section>
        )}

        {/* Back Button */}
        <motion.div
          variants={itemVariants}
          className="mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.back()}
            className="bg-blue-600 dark:bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
          >
            ← Back to Projects
          </motion.button>
        </motion.div>
      </motion.div>

      <Footer />
    </div>
  );
}

