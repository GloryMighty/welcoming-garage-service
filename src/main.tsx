import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById("root")!).render(<App />);

// Add scroll event listener to change background color
function handleScrollBackgroundChange() {
  const scrollThreshold = window.innerHeight * 2; // Scroll more than 2 screen heights
  const bodyElement = document.body;
  
  if (window.scrollY > scrollThreshold) {
    bodyElement.classList.add('scrolled-far');
  } else {
    bodyElement.classList.remove('scrolled-far');
  }
}

// Add event listener
window.addEventListener('scroll', handleScrollBackgroundChange);

// Initial check in case page is already scrolled
handleScrollBackgroundChange();
