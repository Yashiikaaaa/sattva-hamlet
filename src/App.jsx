import React from "react"
import ReactGA from 'react-ga4'
import { PageRoute } from './PageRoute'

const trackingId = import.meta.env.VITE_GA_MEASUREMENT_ID;

ReactGA.initialize(trackingId);

function App() {

  return (
    <div className="font-body md:text-xl bg-white">
       <PageRoute />
    </div>
  )
}

export default App
