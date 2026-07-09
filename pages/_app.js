import { useEffect } from 'react';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    function blockImageContextMenu(e) {
      if (e.target.tagName === 'IMG') e.preventDefault();
    }
    document.addEventListener('contextmenu', blockImageContextMenu);
    return () => document.removeEventListener('contextmenu', blockImageContextMenu);
  }, []);

  return <Component {...pageProps} />;
}
