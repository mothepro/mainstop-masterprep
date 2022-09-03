import type { UaEventOptions } from 'react-ga4/types/ga4'

import ReactGA from "react-ga4"
import reportWebVitals from './reportWebVitals'

const { REACT_APP_GA_MEASURMENT_ID: GA_MEASURMENT_ID } = process.env

if (GA_MEASURMENT_ID) {
  ReactGA.initialize(GA_MEASURMENT_ID)
  reportWebVitals(({ id, name, value }) => event({
    category: 'vitals',
    action: name,
    value: Math.round(value * (name === 'CLS' ? 1000 : 0)), // must be int
    label: id, // unique to page load
    nonInteraction: true, // no bounce rate
  }))
}


/** Send a page view */
export default function () {
  if (GA_MEASURMENT_ID)
    ReactGA.send("pageview")
}

/** Send a custom event */
export function event(args: UaEventOptions) {
  if (GA_MEASURMENT_ID)
    ReactGA.event(args)
}
