import React, {useState, Fragment} from 'react';

import { motion, AnimatePresence } from 'framer-motion';

function Content(props) {
  // const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(null)

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
            <motion.li id="muse-li" onHoverStart={() => setHovered(1)} onHoverEnd={() => setHovered(null)} onTouchStart={() => setHovered(1)}>
              <a href="https://www.musei.io" target="_blank" rel="noopener noreferrer">
                <h2 className="h2-left">> Musei</h2>
                <div className={"word-underline"}></div>
                <div className={"arrow-container"}>
                  <div><div className={"word-underline-arrow"}></div></div>
                </div>
              </a>
              <h2 className="h2-right">A DIY virtual reality gallery builder for artists, galleries and curators</h2>
            </motion.li>

            <motion.li id="everything-li" onHoverStart={() => setHovered(2)} onHoverEnd={() => setHovered(null)} onTouchStart={() => setHovered(2)}>
              <a href="https://everythingforever.net/nodes" target="_blank" rel="noopener noreferrer">
                <h2 className="h2-left">> Everything Forever Nodes</h2>
                <div className={"word-underline"}></div>
                <div className={"arrow-container"}>
                  <div><div className={"word-underline-arrow"}></div></div>
                </div>
              </a>
              <h2 className="h2-right">An exploration interface for the Royal College of Art exhibit Everything Forever</h2>
            </motion.li>

            <motion.li id="froala-li"  onHoverStart={() => setHovered(3)} onHoverEnd={() => setHovered(null)} onTouchStart={() => setHovered(3)}>
              <a href="https://froala.com/wysiwyg-editor/whiteboard" target="_blank" rel="noopener noreferrer">
                  <h2 className="h2-left">> Froala Whiteboard</h2>
                  <div className={"word-underline"}></div>
                  <div className={"arrow-container"}>
                    <div><div className={"word-underline-arrow"}></div></div>
                  </div>
              </a>
              <h2 className="h2-right">A collaborative brainstorming tool</h2>
            </motion.li>

            <li id="froala-2-li">
              <a href="https://froala.com/wysiwyg-editor/pricing" target="_blank" rel="noopener noreferrer">
                <h2 className="h2-left">> Froala Pricing Wizard</h2>
                <div className={"word-underline"}></div>
                <div className={"arrow-container"}>
                  <div><div className={"word-underline-arrow"}></div></div>
                </div>
              </a>
              <h2 className="h2-right">A guided questionnaire to help you pick the right plan</h2>
            </li>

            <li id="froala-3-li">
              <a href="https://froala.com/wysiwyg-editor/customizer-v3/" target="_blank" rel="noopener noreferrer">
               <h2 className="h2-left">> Froala Editor Customizer</h2>
               <div className={"word-underline"}></div>
               <div className={"arrow-container"}>
                 <div><div className={"word-underline-arrow"}></div></div>
               </div>
              </a>
              <h2 className="h2-right">A visual tool for granular customization of the Froala WYSIWYG Editor</h2>
            </li>

            <li id="violeta-li" onMouseEnter={() => setHovered(6)} onMouseLeave={() => setHovered(null)} onTouchStart={() => setHovered(6)}>
              <a href="http://violeta-popov-demo.herokuapp.com" target="_blank" rel="noopener noreferrer">
                <h2 className="h2-left">> Violeta Popov M.D.</h2>
                <div className={"word-underline"}></div>
                <div className={"arrow-container"}>
                  <div><div className={"word-underline-arrow"}></div></div>
                </div>
              </a>
              <h2 className="h2-right">A portfolio website for an NY-based medical practitioner - <br/> work in progress...</h2>
            </li>

            <li id="wedding-li">
              <a href="https://jujubobo.wedding" target="_blank" rel="noopener noreferrer">
                <h2 className="h2-left">> Wedding Save the Date</h2>
                <div className={"word-underline"}></div>
                <div className={"arrow-container"}>
                  <div><div className={"word-underline-arrow"}></div></div>
                </div>
              </a>
              <h2 className="h2-right">A save-the-date website created for a couple getting married</h2>
            </li>

          </ul>
        </div>

        <div id="media-content">
          <AnimatePresence>
            {hovered === 1 &&
              <motion.div
                key={"muse-1"}
                initial={{opacity:0, scale: 0.95, x:100}}
                animate={{opacity:1, scale:1, x:0}}
                exit={{opacity:0, scale: 0.9, x:100}}
                transition={{default: {type: 'spring'}, x:{type: 'spring', stiffness: 50, duration: 2.5 }, scale: {type: 'spring', bounce: 0.4, duration: 2.5 }}}
                className="muse-1 muse-images">
                </motion.div>
            }
            {hovered === 1 &&
              <motion.div
                key={"muse-2"}
                initial={{opacity:0, scale: 0.95, x:-100}}
                animate={{opacity:1, scale:1, x:0}}
                exit={{opacity:0, scale: 0.8, x:-170}}
                transition={{
                  default: {type: 'spring'},
                  x:{type: 'spring', stiffness: 50, duration: 3 },
                  scale: {type: 'spring', bounce: 0.4, duration: 2.7 },
                  opacity: { duration: 0.6 }
                }}
                className="muse-2 muse-images"></motion.div>
            }

            {hovered === 2 &&
                <motion.div
                  key={"nodes-1"}
                  initial={{opacity:0, scale: 0.8, x:-150, y: 50}}
                  animate={{opacity:1, scale:1, x:0, y:0}}
                  exit={{opacity:0, scale: 0.9, x:100}}
                  transition={{
                    default: {type: 'spring'},
                    x:{type: 'spring', stiffness: 50, duration: 4 },
                    y:{duration: 0.7},
                    scale: {type: 'spring', bounce: 0.4, duration: 2.7 },
                    opacity: { duration: 1 }
                  }}
                  className="nodes-image nodes-1">
                    <video src="/node-burst-2.mov" autoplay="true" loop="true" webkit-playsinline="true" playsinline="true" style={{width: '100%', height: '100%'}}/>
                  </motion.div>
            }

            {hovered === 2 &&
                <motion.div
                  key={"nodes-2"}
                  initial={{opacity:0, scale: 0.8, x:150, y: 150}}
                  animate={{opacity:1, scale:1, x:0, y:0}}
                  exit={{opacity:0, scale: 0.9, x:50, y:100}}
                  transition={{
                    default: {type: 'spring'},
                    x:{type: 'spring', stiffness: 50, duration: 2 },
                    y:{duration: 0.7},
                    scale: {type: 'spring', bounce: 0.4, duration: 2.7 },
                    opacity: { duration: 1 }
                  }}
                  className="nodes-image nodes-2">
                    <video src="/node-burst.mov" autoplay="true" loop="true" webkit-playsinline="true" playsinline="true" style={{width: '100%', height: '100%'}}/>
                  </motion.div>
            }


            {hovered === 3 &&
                <motion.div
                  key={"froala-1"}
                  initial={{opacity:0, scale: 0.8, x:150}}
                  animate={{opacity:1, scale:1, x:0}}
                  exit={{opacity:0, scale: 0.9, x:100}}
                  transition={{
                    default: {type: 'spring'},
                    x:{type: 'spring', stiffness: 50, duration: 4 },
                    scale: {type: 'spring', bounce: 0.4, duration: 2.7 },
                    opacity: { duration: 1 }
                  }}
                  className="froala-image froala-1"></motion.div>
            }

            {hovered === 3 &&
                <motion.div
                  key={"froala-2"}
                  initial={{opacity:0, scale: 0.95, x:-100, y:-100}}
                  animate={{opacity:1, scale:1, x:0, y:0}}
                  exit={{opacity:0, scale: 0.95, x:-100, y: -100}}
                  transition={{default: {type: 'spring'}, x:{type: 'spring', stiffness: 50, duration: 4 }, y:{type: 'spring', stiffness: 50, duration: 4 }, scale: {type: 'spring', bounce: 0.4, duration: 4.5 }}}
                  className="froala-image froala-2"></motion.div>
            }


          <AnimatePresence>
            {hovered === 6 &&
              <Fragment>
                <motion.div
                  initial={{opacity:0, scale: 0.95, x:-100}}
                  animate={{opacity:1, scale:1, x:0}}
                  exit={{opacity:0, scale: 0.95, x:-100}}
                  transition={{ type: "spring", duration: 4, stiffness: 50}}
                  className="violeta-image violeta-1"></motion.div>
                <motion.div
                  initial={{opacity:0, scale: 0.95, y:-100, x:100}}
                  animate={{opacity:1, scale:1, y:0, x:0}}
                  exit={{opacity:0, scale: 0.95, y:-100, x:100}}
                  transition={{ type: "spring", duration: 4, stiffness: 50}}
                  className="violeta-image violeta-2"></motion.div>
                <motion.div
                  initial={{opacity:0, scale: 0.95, x:100}}
                  animate={{opacity:1, scale:1, x:0}}
                  exit={{opacity:0, scale: 0.95, x:100}}
                  transition={{ type: "spring", duration: 4, stiffness: 50}}
                  className="violeta-image violeta-3"></motion.div>
              </Fragment>
            }
          </AnimatePresence>
          </AnimatePresence>
        </div>
      </div>
    )
}

export default Content;
