import React from 'react';

function Video({desktopHref, mobileHref, isDesktop}) {

  const video = isDesktop ?
    <video src={desktopHref} muted autoPlay={true} loop={true} webkit-playsinline="true" playsInline={true} style={{width: '100%', height: '100%'}}/>
    : <video src={mobileHref} muted autoPlay={true} loop={true} webkit-playsinline="true" playsInline={true} style={{width: '100%', height: '100%'}}/>

  return video;
}

export default Video;


