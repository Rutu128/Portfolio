import { motion } from 'framer-motion'
import portfolioData from '../data/portfolioData.json'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { FormEvent, useState } from 'react'

const Contact = () => {
  const { personal } = portfolioData
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the form submission
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <h2 className="text-4xl font-bold text-center">
          Get In <span className="text-secondary">Touch</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <p className="text-textSecondary">
              I'm always open to new opportunities and collaborations.
              Whether you have a question or just want to say hi,
              I'll try my best to get back to you!
            </p>

            <div className="flex space-x-6">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-textSecondary hover:text-secondary transition-colors"
              >
                <FaGithub className="h-8 w-8" />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-textSecondary hover:text-secondary transition-colors"
              >
                <FaLinkedin className="h-8 w-8" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="text-textSecondary hover:text-secondary transition-colors"
              >
                <FaEnvelope className="h-8 w-8" />
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-tertiary rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-secondary"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-tertiary rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-secondary"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full bg-tertiary rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-secondary"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-secondary text-primary px-6 py-3 rounded-lg font-medium hover:bg-secondary/80 transition-colors"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </motion.div>
    </div>
  )
}

export default Contact 