import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Let's Connect
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            I appreciate your time in reviewing my portfolio. I'm passionate about helping businesses
            achieve sustainable organic growth through strategic SEO.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:mvasoya28@gmail.com"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              📧 mvasoya28@gmail.com
            </a>
            <span className="hidden sm:inline text-gray-400">•</span>
            <a
              href="tel:+917900006467"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              📱 +91 7900006467
            </a>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-500 mt-8">
            © {new Date().getFullYear()} Maulik Vasoya. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}




