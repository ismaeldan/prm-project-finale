import { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import styles from './header.module.css'
import logoColor from '../../assets/LOGOS PRM color.png'

// Simple Hamburger Icon SVG
const HamburgerIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
)

// Simple Close Icon SVG
const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
)

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const headerRef = useRef<HTMLElement | null>(null)
  const location = useLocation()

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Active link highlighting based on scroll
  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection('')
      return
    }

    const sections = document.querySelectorAll('section[id]')
    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      entries => {
        let currentActive = activeSection
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            currentActive = entry.target.id
          }
        })
        // Only update if a new section is intersecting
        if (entries.some(entry => entry.isIntersecting)) {
          setActiveSection(currentActive)
        }
      },
      {
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0
      }
    )

    sections.forEach(section => observer.observe(section))

    return () => {
      sections.forEach(section => observer.unobserve(section))
      observer.disconnect()
    }
    // Rerun only when pathname changes, not activeSection to avoid loops
  }, [location.pathname])

  // Function to determine if a link is active
  const isLinkActive = (linkId: string, dedicatedPath?: string) => {
    // Check dedicated path first
    if (dedicatedPath && location.pathname === dedicatedPath) {
      return true
    }
    // Check scroll-based active section on homepage
    if (location.pathname === '/' && activeSection === linkId) {
      return true
    }
    // Fallback for hash links on initial load or direct navigation
    if (
      location.pathname === '/' &&
      activeSection === '' &&
      location.hash === `#${linkId}`
    ) {
      return true
    }

    return false
  }

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  // // Close mobile menu when a link is clicked
  // const handleMobileLinkClick = () => {
  //   setIsMobileMenuOpen(false)
  // }

  // Combine base class with scroll class
  const headerClass = `${styles.headerBase} ${isScrolled ? styles.scroll : ''}`
  // Combine mobile menu base class with open class
  const mobileMenuClass = `${styles.mobileMenu} ${
    isMobileMenuOpen ? styles.open : ''
  }`

  return (
    <header id="header" ref={headerRef} className={headerClass}>
      <nav className={`${styles.header} container`}>
        {/* Logo */}
        <a href="/">
          <img className={styles.logo} src={logoColor} alt="PRM TECPRINT" />
        </a>

        {/* Desktop Menu */}
        <div className={styles.menu}>
          <a
            className={`${isLinkActive('home') ? styles.active : ''}`}
            href="/"
          >
            Home
          </a>
          <a
            className={`${
              isLinkActive('sobre', '/sobre') ? styles.active : ''
            }`}
            href="/sobre"
          >
            Sobre
          </a>
          <a
            className={`${
              isLinkActive('servicos', '/servicos') ? styles.active : ''
            }`}
            href="/servicos"
          >
            Serviços
          </a>
          <a
            className={`${isLinkActive('prw', '/prw') ? styles.active : ''}`}
            href="/prw"
          >
            PRW Embalagens
          </a>
          <a
            className={`${isLinkActive('contact') ? styles.active : ''}`}
            href="/fale-conosco"
          >
            Contato
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className={styles.menuToggle}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
        </button>

        {/* Mobile Menu Container */}
        <div className={mobileMenuClass}>
          <a
            className={`${isLinkActive('home') ? styles.active : ''}`}
            href="/"
          >
            Home
          </a>
          <a
            className={`${
              isLinkActive('sobre', '/sobre') ? styles.active : ''
            }`}
            href="/sobre"
          >
            Sobre
          </a>
          <a
            className={`${
              isLinkActive('servicos', '/servicos') ? styles.active : ''
            }`}
            href="/servicos"
          >
            Serviços
          </a>
          <a
            className={`${isLinkActive('prw', '/prw') ? styles.active : ''}`}
            href="/prw"
          >
            PRW Embalagens
          </a>
          <a
            className={`${isLinkActive('contact') ? styles.active : ''}`}
            href="/fale-conosco"
          >
            Contato
          </a>
        </div>
      </nav>
    </header>
  )
}
