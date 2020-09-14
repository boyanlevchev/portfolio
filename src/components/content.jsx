import React from 'react';

function Content(props) {
  // const [open, setOpen] = useState(false);



  return(
      <div id="content-box">

        <div id="title-box">
          <h1>BOYAN LEVCHEV</h1>
          <h2>FULL STACK WEB DEVELOPER</h2>
          <h2>LINKEDIN:<a href="https://linkedin.com/in/boyanlevchev">linkedin.com/in/boyanlevchev</a></h2>
          <h2>GITHUB:<a href="https://github.com/boyanlevchev">github.com/boyanlevchev</a></h2>
        </div>

        <div id="links-box">

          <ul id="links">
            <li id="muse-li"><a href="https://www.musevr.art" target="_blank"><h2 className="h2-left">> Muse VR</h2><h2 className="h2-right">A DIY virtual reality gallery builder for artists and curators</h2></a></li>
            <li id="froala-li"><a href="https://froala.com/wysiwyg-editor/whiteboard" target="_blank"><h2 className="h2-left">> Froala Whiteboard</h2><h2 className="h2-right">A collaborative brainstorming tool</h2></a></li>
            <li id="violeta-li"><a href="http://violeta-popov-demo.herokuapp.com" target="_blank"><h2 className="h2-left">> Violeta Popov M.D.</h2><h2 className="h2-right">A portfolio website for an NY-based medical practitioner</h2></a></li>
            <div className="muse-1 muse-images"></div>
            <div className="muse-2 muse-images"></div>
            <div className="violeta-image violeta-1"></div>
            <div className="violeta-image violeta-2"></div>
            <div className="violeta-image violeta-3"></div>
            <div className="froala-image"></div>
          </ul>
        </div>

      </div>
    )
}

export default Content;
