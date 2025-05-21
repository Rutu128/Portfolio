import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

interface NavbarProps {
  isMenuOpen: boolean
  setIsMenuOpen: (value: boolean) => void
}

const Navbar = ({ isMenuOpen, setIsMenuOpen }: NavbarProps) => {
  const menuItems = [
    { title: 'Home', to: 'home' },
    { title: 'About', to: 'about' },
    { title: 'Experience', to: 'experience' },
    { title: 'Projects', to: 'projects' },
    { title: 'Hackathons', to: 'hackathons' },
    { title: 'Contact', to: 'contact' },
  ]

  return (
    <nav className="fixed w-full z-50 bg-primary/80 backdrop-blur-md border-b border-borderColor">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <motion.div
            initial={{ x: -500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-secondary font-bold text-xl sm:text-2xl tracking-tight"
          >
            Rutu Bhimani
          </motion.div>

          {/* Desktop Menu */}
          <motion.div
            initial={{ x: 500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="hidden md:flex space-x-8"
          >
            {menuItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={400}
                activeClass="text-secondary"
                className="text-textSecondary hover:text-secondary cursor-pointer transition-all font-medium text-sm tracking-wide relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-secondary after:transition-all hover:after:w-full"
              >
                {item.title}
              </Link>
            ))}
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-textSecondary hover:text-secondary p-2 -mr-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <HiX className="h-6 w-6" />
              ) : (
                <HiMenuAlt3 className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden py-4 border-t border-borderColor"
          >
            <div className="flex flex-col space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={400}
                  onClick={() => setIsMenuOpen(false)}
                  activeClass="text-secondary bg-cardHover"
                  className="text-textSecondary hover:text-secondary cursor-pointer transition-all px-4 py-3 rounded-lg hover:bg-cardHover text-sm font-medium tracking-wide"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar 