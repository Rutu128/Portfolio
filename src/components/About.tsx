import { motion } from 'framer-motion'
import portfolioData from '../data/portfolioData.json'

const About = () => {
  const { skills } = portfolioData

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
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
          About <span className="text-secondary">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <p className="text-textSecondary">
              I am a passionate full-stack developer with a strong foundation in modern web technologies.
              My journey in software development has been driven by a desire to create impactful solutions
              that solve real-world problems.
            </p>
            <p className="text-textSecondary">
              With experience in both frontend and backend development, I enjoy building scalable
              applications that provide excellent user experiences while maintaining robust
              backend architectures.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold">Skills</h3>
            
            {Object.entries(skills).map(([category, skillList]) => (
              <motion.div key={category} variants={item} className="space-y-2">
                <h4 className="text-secondary capitalize">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span
                      key={skill}
                      className="bg-tertiary px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default About 