import React from 'react'

const Video = () => {
  return (
    <div className="w-[90%] lg:w-7/12 mx-auto rounded-xl lg:rounded-[24px] overflow-hidden">
      <video width={'100%'} controls>
        <source src={'/videos/CouldBe-LowQ.mp4'} type={'video/mp4'} />
      </video>
    </div>
  )
}

export default Video
