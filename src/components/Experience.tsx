import { motion } from 'framer-motion'
import portfolioData from '../data/portfolioData.json'

const Experience = () => {
  const { experience } = portfolioData

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
          Work <span className="text-secondary">Experience</span>
        </h2>

        <div className="space-y-12">
          {experience.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l-2 border-tertiary"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-secondary rounded-full" />
              
              <div className="space-y-2">
                <span className="text-secondary">{job.duration}</span>
                <h3 className="text-2xl font-bold">{job.position}</h3>
                <h4 className="text-xl text-textSecondary">{job.company}</h4>
                <p className="text-textSecondary">{job.description}</p>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {job.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-tertiary px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default Experience 