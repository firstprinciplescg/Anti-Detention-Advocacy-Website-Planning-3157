import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useScrollToHash() {
  const { hash } = useLocation();
  
  useEffect(() => {
    // If there's a hash in the URL
    if (hash) {
      // Remove the # from the hash
      const elementId = hash.replace('#', '');
      
      // Find the element by id
      const element = document.getElementById(elementId);
      
      // If the element exists, scroll to it
      if (element) {
        // Small delay to ensure DOM is ready
        setTimeout(() => {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }, 100);
      }
    } else {
      // If no hash, scroll to top of page
      window.scrollTo(0, 0);
    }
  }, [hash]); // Re-run when hash changes
}

// Custom hook for handling anchor link clicks
export function useAnchorLinkHandler() {
  const handleAnchorClick = (e) => {
    // For links that start with #
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      
      const elementId = href.substring(1);
      const element = document.getElementById(elementId);
      
      if (element) {
        // Update URL without reload
        window.history.pushState(null, '', href);
        
        // Smooth scroll to element
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };
  
  return handleAnchorClick;
}