import React from 'react'
import iosCommingSoon from "../Assets/iosCommingSoon.jpg"
import androidCommingSoon from "../Assets/androidCommingSoon.jpg"
import logoblack from "../Assets/logoblack.jpg"
function AppBanner() {
  return (
    <div className='bannerMain'>

      <div className='bannerTitle'>

        <h1> Something Awesome is Brewing... </h1>

      </div>

      <div className='appInfo'>

        <div className='appImages'>  

          <div className='brandLogo'></div>

        </div>

        <div className='appInfoText'>

          <h1 className='textssss'>Soon avaialable on...</h1>

          <div className='availableOptions'>
            <img src={iosCommingSoon} width={250} />
            <img src={androidCommingSoon} width={250} />
          </div>

        </div>

      </div>

    </div>
  )
}

export default AppBanner