import React, { useEffect, useState } from 'react'
import { Steps } from 'intro.js-react'
import 'intro.js/introjs.css'
import './GuideTour.css'

const steps = [
  {
    title: '',
    intro: '',
  },
  {
    element: '.chart-container',
    title: 'Chart',
    intro:
      'This chart displays your test results, highlighting your strengths and areas for improvement. It also shows how each course you add will help enhance specific skills.',
    position: 'left',
  },
  {
    element: '.guide-tour-button',
    title: 'Adding Materials to Your Roadmap:',
    intro:
      'This is your personalized selection of suggested materials. Click "Add" to include any materials that align with your goals in your development roadmap. At least, you have to add one or two materials in each section to ensure a well-rounded development plan.',
    position: 'right',
  },
  {
    element: '.guide-tour-save',
    title: 'Save Roadmap',
    intro:
      'Once you’ve chosen your materials, click "Save Roadmap" to securely store your personalized development plan. After saving, you\'ll move on to the next phase to start your development journey.',
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
