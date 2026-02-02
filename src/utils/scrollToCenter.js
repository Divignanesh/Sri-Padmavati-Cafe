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
 * Get element id from href (supports "#id" and "/#id" from React Router Link)
 */
function getHashId(href) {
  if (!href || typeof href !== 'string') return null
  const idx = href.indexOf('#')
  if (idx === -1) return null
  const id = href.slice(idx + 1).trim()
  return id || null
}

/**
 * Initializes centered scroll navigation for all hash links
 * Handles both <a href="#section"> and <Link to="/#section"> (href="/#section")
 */
export function initCenteredNavigation() {
  const handleClick = (e) => {
    const target = e.target.closest('a[href*="#"]')
    if (!target) return

    const href = target.getAttribute('href')
    const elementId = getHashId(href)
    if (!elementId) return

    const element = document.getElementById(elementId)
    if (element) {
      e.preventDefault()
      scrollToCenter(elementId)
      // Update URL hash without full navigation
      const newHash = '#' + elementId
      if (window.location.hash !== newHash) {
        history.pushState(null, '', window.location.pathname + newHash)
      }
    }
  }

  document.addEventListener('click', handleClick)

  // Handle initial hash on page load (e.g. landing on /#contact or after navigating from another page)
  if (window.location.hash) {
    const elementId = getHashId(window.location.hash)
    if (elementId) {
      setTimeout(() => scrollToCenter(elementId), 100)
    }
  }

  // Handle browser back/forward with hash
  const onHashChange = () => {
    const elementId = getHashId(window.location.hash)
    if (elementId) scrollToCenter(elementId)
  }
  window.addEventListener('hashchange', onHashChange)

  return () => {
    document.removeEventListener('click', handleClick)
    window.removeEventListener('hashchange', onHashChange)
  }
}
