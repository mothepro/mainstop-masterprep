import ReactGA from "react-ga4"
import type { UaEventOptions } from 'react-ga4/types/ga4'

const { REACT_APP_GA_MEASURMENT_ID } = process.env

if (REACT_APP_GA_MEASURMENT_ID)
  ReactGA.initialize(REACT_APP_GA_MEASURMENT_ID)

/** Send a page view */
export default function () {
  if (REACT_APP_GA_MEASURMENT_ID)
    ReactGA.send("pageview")
}

/** Send a custom event */
export function event(args: UaEventOptions) {
  if (REACT_APP_GA_MEASURMENT_ID)
    ReactGA.event(args)
}
