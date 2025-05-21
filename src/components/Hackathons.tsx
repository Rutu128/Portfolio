import { motion } from 'framer-motion'
import portfolioData from '../data/portfolioData.json'
import { FaTrophy } from 'react-icons/fa'

const Hackathons = () => {
  const { hackathons } = portfolioData

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
          Hackathon <span className="text-secondary">Achievements</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {hackathons.map((hackathon, index) => (
            <motion.div
              key={hackathon.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-tertiary rounded-lg p-6 space-y-4"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-bold">{hackathon.name}</h3>
                  <p className="text-secondary flex items-center gap-2">
                    <FaTrophy className="h-4 w-4" />
                    {hackathon.position}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold">{hackathon.project}</h4>
                <p className="text-textSecondary mt-2">
                  {hackathon.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {hackathon.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-primary px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default Hackathons 