import React from "react"
import ReactGA from 'react-ga4'
import { PageRoute } from './PageRoute'

const trackingId = import.meta.env.VITE_GA_MEASUREMENT_ID;

ReactGA.initialize(trackingId);
ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "Home Page" });

function App() {

  return (
    <div className="font-body md:text-xl bg-white">
       <PageRoute />
    </div>
  )
}

export default App
