'use client'
import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import 'intro.js/introjs.css'
import './GuideTour.css'

const Steps = dynamic(() => import('intro.js-react').then((mod) => mod.Steps), {
  ssr: false,
})

const steps = [
  {
    element: '.chart-container',
    title: 'Chart Overview',
    intro:
      'This chart displays your test results, highlighting your strengths and areas for improvement. It also shows how each course you add will help enhance specific skills.',
    position: 'left',
  },
  {
    element: '.guide-tour-button',
    title: 'Adding Materials to Your Roadmap:',
    intro: 'Click "Add" to include any materials that align with your goals in your development roadmap.',
    position: 'right',
  },
  {
    element: '.guide-tour-save',
    title: 'Save Roadmap',
    intro:
      'Once you’ve chosen your materials, click "Save Roadmap" to securely store your personalized development plan.',
    position: 'right',
  },
]

const GuideTour = () => {
  const [startTour, setStartTour] = useState(false)

  useEffect(() => {
    const checkElementsReady = () => steps.every((step) => !step.element || document.querySelector(step.element))

    const tryStartTour = () => {
      if (checkElementsReady()) {
        setStartTour(true)
      } else {
        setTimeout(tryStartTour, 300)
      }
    }

    const timeout = setTimeout(tryStartTour, 1000)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <Steps
      enabled={startTour}
      steps={steps}
      initialStep={0}
      onExit={() => setStartTour(false)}
      options={{
        nextLabel: 'Next',
        prevLabel: 'Back',
        doneLabel: 'Finish',
        hidePrev: true,
        showBullets: false,
        showStepNumbers: false,
        scrollToElement: true,
        tooltipClass: 'guide-tour-tooltip',
        buttonClass: 'guide-tour-buttons',
      }}
    />
  )
}

export default GuideTour
