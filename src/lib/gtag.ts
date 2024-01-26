import script from 'next/script';
import React from 'react';
import React from 'react';
import React from 'react';
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

const GtagScript = () => {
  React.useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    gtag('js', new Date());
    gtag('config', process.env.GOOGLE_TAG_MANAGER);
  }, []);

};