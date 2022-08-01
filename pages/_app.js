import '../styles/globals.css'
import React, {useState, useEffect} from 'react';
function MyApp({ Component, pageProps }) {

  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);  

  if (isSSR) return null;


  return <Component {...pageProps} />
}

export default MyApp
