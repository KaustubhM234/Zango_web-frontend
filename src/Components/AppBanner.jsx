import React from 'react';
import iosCommingSoon from '../Assets/iosCommingSoon.jpg';
import androidCommingSoon from '../Assets/androidCommingSoon.jpg';
import logoblack from '../Assets/logoblack.jpg';

function AppBanner() {
  return (
    <div className="bannerMain">
      <div className="bannerTitle">
        <h1>Something Awesome is Brewing...</h1>
      </div>

      <div className="appInfo">
        <div className="appImages">
          <div className="brandLogo">
            <img src={logoblack} alt="Logo" style={{ width: '40%', borderRadius: '8px' }} />
          </div>
        </div>

        <div className="appInfoText">
          <h2 className="textssss">Soon available on...</h2>
          <div className="availableOptions">
            <div className="option">
              <img src={iosCommingSoon} alt="iOS Coming Soon" width={250} />
              <p>iOS</p>
            </div>
            <div className="option">
              <img src={androidCommingSoon} alt="Android Coming Soon" width={250} />
              <p>Android</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppBanner;
