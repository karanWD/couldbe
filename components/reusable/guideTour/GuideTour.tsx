import React, { useEffect, useState } from 'react'
import { Steps } from 'intro.js-react'
import 'intro.js/introjs.css'
import './GuideTour.css'

const steps = [
  {
    title: 'Very well',
    intro:
      'Your test is completed and its time to check your result and choose between courses that suggested for you based on test you had done',
  },
  {
    element: '.chart-container',
    title: 'Chart',
    intro:
      'This chart shows you in which skills you `are better and with each course which one of your skills will grow',
    position: 'left',
  },
  {
    element: '.guide-tour-button',
    title: 'Courses',
    intro:
      'Here is list of courses that is suggested for you and you can add each of this courses to your roadmap by clicking Add button',
    position: 'right',
  },
  {
    element: '.guide-tour-save',
    title: 'Save Roadmap',
    intro:
      'Finally when you are ready and choose all of your courses you can save the roadmap so you can access it later',
    position: 'right',
  },
]

const GuideTour = () => {
  const [startTour, setStartTour] = useState(false)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setStartTour(true)
    }, 1500)

    return () => clearTimeout(timeout)
  }, [])
  return (
    <>
      <Steps
        options={{
          nextLabel: 'Next',
          hidePrev: true,
          showBullets: false,
          showSkip: false,
          scrollToElement: true,
          tooltipClass: 'guide-tour-tooltip',
          buttonClass: 'guide-tour-buttons',
        }}
        enabled={startTour}
        steps={steps}
        initialStep={0}
        onExit={() => setStartTour(false)}
      />
    </>
  )
}

export default GuideTour
