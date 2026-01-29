/**
 * Scrolls to an element and centers it in the viewport
 * @param {string} elementId - The ID of the element to scroll to (without #)
 * @param {number} offset - Additional offset from center (default: 0)
 */
export function scrollToCenter(elementId, offset = 0) {
  const element = document.getElementById(elementId)
  if (!element) return

  const elementRect = element.getBoundingClientRect()
  const elementHeight = elementRect.height
  const windowHeight = window.innerHeight
  
  // Calculate the scroll position to center the element
  // For very tall sections, scroll to show the top portion centered
  const targetScroll = window.scrollY + elementRect.top - (windowHeight / 2) + Math.min(elementHeight / 2, windowHeight / 3) + offset
  
  window.scrollTo({
    top: Math.max(0, targetScroll),
    behavior: 'smooth'
  })
}

/**
 * Initializes centered scroll navigation for all hash links
 */
export function initCenteredNavigation() {
  const handleClick = (e) => {
    const target = e.target.closest('a[href^="#"]')
    if (!target) return
    
    const href = target.getAttribute('href')
    if (!href || href === '#') return
    
    const elementId = href.substring(1)
    const element = document.getElementById(elementId)
    
    if (element) {
      e.preventDefault()
      scrollToCenter(elementId)
      
      // Update URL hash without jumping
      history.pushState(null, '', href)
    }
  }
  
  document.addEventListener('click', handleClick)
  
  // Handle initial hash on page load
  if (window.location.hash) {
    const elementId = window.location.hash.substring(1)
    // Small delay to ensure page is rendered
    setTimeout(() => scrollToCenter(elementId), 100)
  }
  
  // Handle browser back/forward with hash
  window.addEventListener('hashchange', () => {
    if (window.location.hash) {
      const elementId = window.location.hash.substring(1)
      scrollToCenter(elementId)
    }
  })
  
  // Return cleanup function
  return () => {
    document.removeEventListener('click', handleClick)
  }
}
