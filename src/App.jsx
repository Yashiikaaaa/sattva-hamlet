import React, { useEffect } from "react"
import ReactGA from 'react-ga4'
import { PageRoute } from './PageRoute'

const trackingId = import.meta.env.VITE_GA_MEASUREMENT_ID;

ReactGA.initialize(trackingId);

function App() {
  useEffect(() => {
    // Capture gclid and UTM params from URL and save to localStorage
    const params = new URLSearchParams(window.location.search);
    const gclid = params.get("gclid");
    const utmSource = params.get("utm_source") || params.get("utmSource");
    const utmMedium = params.get("utm_medium") || params.get("utmMedium");
    const utmCampaign = params.get("utm_campaign") || params.get("utmCampaign");
    const utmTerm = params.get("utm_term") || params.get("utmTerm");
    const utmContent = params.get("utm_content") || params.get("utmContent");

    if (gclid) {
      localStorage.setItem("gclid", gclid);
    }
    if (utmSource) localStorage.setItem("utm_source", utmSource);
    if (utmMedium) localStorage.setItem("utm_medium", utmMedium);
    if (utmCampaign) localStorage.setItem("utm_campaign", utmCampaign);
    if (utmTerm) localStorage.setItem("utm_term", utmTerm);
    if (utmContent) localStorage.setItem("utm_content", utmContent);
  }, []);

  return (
    <div className="font-body md:text-xl bg-white">
       <PageRoute />
    </div>
  )
}

export default App
