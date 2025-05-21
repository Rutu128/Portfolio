import { motion } from 'framer-motion'
import portfolioData from '../data/portfolioData.json'
import { FaGithub, FaLinkedin, FaDownload, FaEye } from 'react-icons/fa'
import { HiArrowDown } from 'react-icons/hi'
import { Link } from 'react-scroll'

const Hero = () => {
  const { personal } = portfolioData

  return (
    <div className="flex flex-col justify-center min-h-screen">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6 order-2 md:order-1"
        >
          <h2 className="text-secondary font-medium tracking-wider">Hi, my name is</h2>
          <h1 className="text-4xl sm:text-7xl font-bold text-textPrimary">
            {personal.name}
          </h1>
          <h2 className="text-3xl sm:text-6xl font-bold text-textSecondary">
            {personal.title}
          </h2>
          <p className="max-w-2xl text-textSecondary text-lg">
            {personal.description}
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            {/* Resume Buttons */}
            <motion.a
              href="/Rutu_Resume.pdf"
              download
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-2 bg-secondary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
            >
              <FaDownload className="h-4 w-4" />
              Download Resume
            </motion.a>

            <motion.a
              href="/Rutu_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-2 border border-secondary text-secondary px-6 py-3 rounded-lg font-semibold hover:bg-secondary/10 transition-colors"
            >
              <FaEye className="h-4 w-4" />
              View Resume
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex space-x-6 pt-4"
          >
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-textSecondary hover:text-secondary transition-colors"
            >
              <FaGithub className="h-7 w-7" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-textSecondary hover:text-secondary transition-colors"
            >
              <FaLinkedin className="h-7 w-7" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-secondary/20 to-secondary/40 blur-2xl" />
            <img
              src="/avatar.png"
              alt="Profile"
              className="rounded-full w-full h-full object-cover relative z-10 border-4 border-secondary/20"
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-80}
          duration={800}
          className="cursor-pointer"
        >
          <HiArrowDown className="h-8 w-8 text-secondary animate-bounce-slow" />
        </Link>
      </motion.div>
    </div>
  )
}

export default Hero 