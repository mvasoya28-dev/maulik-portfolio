import { motion } from 'framer-motion';
import AnimatedImage from '@/components/AnimatedImage';
import { skills } from '@/data/skills';
import { tools } from '@/data/tools';
import Footer from '@/components/Footer';
import Link from 'next/link';

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

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="text-center mb-20"
      >
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Maulik Vasoya
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 mb-8"
        >
          SEO Consultant
        </motion.p>
        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
        >
          As an experienced SEO Consultant, I've helped numerous businesses improve their organic visibility
          and drive measurable traffic growth across diverse industries. My approach centres on strengthening
          online presence through comprehensive, data-driven strategies that deliver sustainable, long-term results.
        </motion.p>
      </motion.section>

      {/* Professional Background */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="mb-20"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
        >
          Professional Background
        </motion.h2>
        <motion.div
          variants={itemVariants}
          className="prose prose-lg dark:prose-invert max-w-none"
        >
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            I specialise in crafting effective on-page, off-page, and technical SEO strategies that align
            with business objectives. Currently serving as SEO Associate at Infidigit, I work with leading
            brands to enhance their search performance and digital footprint.
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              B2B & eCommerce Expertise:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Flipkart Seller Hub – Major B2B platform optimisation</li>
              <li>Shopsy – eCommerce growth initiatives</li>
              <li>AUM Pharmacy – Healthcare eCommerce</li>
              <li>Swiggy Instamart – Current engagement</li>
            </ul>
          </div>
        </motion.div>
      </motion.section>

      {/* Core Expertise */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="mb-20"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center"
        >
          Comprehensive SEO Capabilities
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {skill.category}
              </h3>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li
                    key={item}
                    className="text-gray-700 dark:text-gray-300 text-sm flex items-start"
                  >
                    <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Technology Stack */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="mb-20"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center"
        >
          Tools Used
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-center text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
        >
          In Addition to Google Analytics and Google Search Console, I leverage industry-leading tools
          to deliver comprehensive SEO insights and drive strategic decision-making.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <motion.div
              key={tool.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {tool.name}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">{tool.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="text-center"
      >
        <motion.div
          variants={itemVariants}
          className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 rounded-lg p-12 text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Grow Your Organic Traffic?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Let's discuss how my expertise can contribute to your digital marketing objectives.
          </p>
          <div className="flex justify-center">
            <Link
              href="/projects"
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              View Projects
            </Link>
          </div>
          <div className="mt-8 text-sm opacity-80">
            <p>Email: mvasoya28@gmail.com</p>
            <p>Phone: +91 7900006467</p>
          </div>
        </motion.div>
      </motion.section>

      <Footer />
    </div>
  );
}

