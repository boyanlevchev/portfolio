import React, {useState, Fragment, useEffect} from 'react';

import { motion, AnimatePresence } from 'framer-motion';

import Div100vh from 'react-div-100vh'
import {useMedia} from 'react-use';

import Video from '../components/video'
import ItemList from './item_list';

function Content(props) {
  // const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(null)
  const [expanded, setExpanded] = useState(null)

  const isDesktop = useMedia('(min-width: 900px)');

  useEffect(() => {
    if (expanded) {
      document.body.classList.add('item-expanded');
    } else {
      document.body.classList.remove('item-expanded');
    }
  },[expanded])

  return(
    <Div100vh>
      <div id="content-box">

        <div id="title-box">
          <div className={"title-text-container"}>
            <h1>BOYAN LEVCHEV</h1>
            <h2>FULL STACK WEB DEVELOPER</h2>
            <h2>LINKEDIN:<a href="https://linkedin.com/in/boyanlevchev">linkedin.com/in/boyanlevchev</a></h2>
            <h2>GITHUB:<a href="https://github.com/boyanlevchev">github.com/boyanlevchev</a></h2>
          </div>
        </div>

        <ItemList setHovered={setHovered} setExpanded={setExpanded} hovered={hovered} expanded={expanded}/>

        <div id="media-content">
          <AnimatePresence>
            {hovered === "muse" &&
              <motion.div
                key={"muse-1"}
                initial={{opacity:0, scale: 0.95, x:100}}
                animate={{opacity:1, scale:1, x:0}}
                exit={{opacity:0, scale: 0.9, x:100}}
                transition={{default: {type: 'spring'}, x:{type: 'spring', stiffness: 50, duration: 2.5 }, scale: {type: 'spring', bounce: 0.4, duration: 2.5 }}}
                className="muse-1 images">
                </motion.div>
            }
            {hovered === "muse" &&
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
                className="muse-2 images"></motion.div>
            }

            {hovered === "everything" &&
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
                  className="images nodes-1">
                    <Video
                      desktopHref={"https://res.cloudinary.com/dt47helyp/video/upload/v1620992321/Portfolio/Desktop/everything_1_desktop_agrs8m.mp4"}
                      mobileHref={"https://res.cloudinary.com/dt47helyp/video/upload/v1620992492/Portfolio/Mobile/everything_1_mobile_vqjth1.mp4"}
                      isDesktop={isDesktop} />
                  </motion.div>
            }

            {hovered === "everything" &&
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
                  className="images nodes-2">
                  <Video
                    desktopHref={"https://res.cloudinary.com/dt47helyp/video/upload/v1620992323/Portfolio/Desktop/everything_2_desktop_s4g2xl.mp4"}
                    mobileHref={"https://res.cloudinary.com/dt47helyp/video/upload/v1620992493/Portfolio/Mobile/everything_2_mobile_wfsb9o.mp4"}
                    isDesktop={isDesktop} />
                  </motion.div>
            }


            {hovered === "froala" &&
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
                  className="images froala-1"></motion.div>
            }

            {hovered === "froala" &&
                <motion.div
                  key={"froala-2"}
                  initial={{opacity:0, scale: 0.95, x:-100, y:-100}}
                  animate={{opacity:1, scale:1, x:0, y:0}}
                  exit={{opacity:0, scale: 0.95, x:-100, y: -100}}
                  transition={{default: {type: 'spring'}, x:{type: 'spring', stiffness: 50, duration: 4 }, y:{type: 'spring', stiffness: 50, duration: 4 }, scale: {type: 'spring', bounce: 0.4, duration: 4.5 }}}
                  className="images froala-2"></motion.div>
            }

            {hovered === "froala-2" &&
              <Fragment>

                <motion.div
                  key={"wizard-1"}
                  initial={{opacity:0, scale: 0.95, x:100}}
                  animate={{opacity:1, scale:1, x:0}}
                  exit={{opacity:0, scale: 0.95, x:100}}
                  transition={{ type: "spring", duration: 3, stiffness: 40}}
                  className={"images wizard-1"}></motion.div>

                <motion.div
                  key={"wizard-2"}
                  initial={{opacity:0, scale: 0.95, x:100, y: -50}}
                  animate={{opacity:1, scale:1, x:0, y: 0}}
                  exit={{opacity:0, scale: 0.95, x:100, y: -50}}
                  transition={{ type: "spring", duration: 4.5, stiffness: 65}}
                  className={"images wizard-2"}></motion.div>

                <motion.div
                  key={"wizard-3"}
                  initial={{opacity:0, scale: 0.95, x:-100, y: 50}}
                  animate={{opacity:1, scale:1, x:0, y: 0}}
                  exit={{opacity:0, scale: 0.95, x:-100, y: 50}}
                  transition={{ type: "spring", duration: 7, stiffness: 65, delay: 0.1}}
                  className={"images wizard-3"}>
                    <Video
                      desktopHref={"https://res.cloudinary.com/dt47helyp/video/upload/v1621655370/Portfolio/Desktop/Froala_Wizard_3_qrhjjy.mp4"}
                      mobileHref={"https://res.cloudinary.com/dt47helyp/video/upload/v1621655370/Portfolio/Desktop/Froala_Wizard_3_qrhjjy.mp4"}
                      isDesktop={isDesktop} />
                  </motion.div>
              </Fragment>
            }


            {hovered === "froala-3" &&
                <motion.div
                  key={"froala-3"}
                  initial={{opacity:0, scale: 0.95, x:-100}}
                  animate={{opacity:1, scale:1, x:0}}
                  exit={{opacity:0, scale: 0.95, x:-100}}
                  transition={{ type: "spring", duration: 4, stiffness: 50}}
                  className={"images froala-customizer-1"}></motion.div>
            }
            {hovered === "froala-3" &&
                <motion.div
                  key={"froala-4"}
                  initial={{opacity:0, scale: 0.95, y:-100, x:100}}
                  animate={{opacity:1, scale:1, y:0, x:0}}
                  exit={{opacity:0, scale: 0.95, y:-100, x:100}}
                  transition={{ type: "spring", duration: 4, stiffness: 50}}
                  className={"images froala-customizer-2"}></motion.div>
            }
            {hovered === "froala-3" &&
                <motion.div
                  key={"froala-5"}
                  initial={{opacity:0, scale: 0.95, x:100}}
                  animate={{opacity:1, scale:1, x:0}}
                  exit={{opacity:0, scale: 0.95, x:100}}
                  transition={{ type: "spring", duration: 4, stiffness: 50}}
                  className={"images froala-customizer-3"}></motion.div>
            }


            {hovered === "violeta" &&
              <Fragment>
                <motion.div
                  key={"violeta-1"}
                  initial={{opacity:0, scale: 0.95, x:-100}}
                  animate={{opacity:1, scale:1, x:0}}
                  exit={{opacity:0, scale: 0.95, x:-100}}
                  transition={{ type: "spring", duration: 4, stiffness: 50}}
                  className={"images violeta-1"}></motion.div>
                <motion.div
                  key={"violeta-2"}
                  initial={{opacity:0, scale: 0.95, y:-100, x:100}}
                  animate={{opacity:1, scale:1, y:0, x:0}}
                  exit={{opacity:0, scale: 0.95, y:-100, x:100}}
                  transition={{ type: "spring", duration: 4, stiffness: 50}}
                  className={"images violeta-2"}></motion.div>
                <motion.div
                  key={"violeta-3"}
                  initial={{opacity:0, scale: 0.95, x:100}}
                  animate={{opacity:1, scale:1, x:0}}
                  exit={{opacity:0, scale: 0.95, x:100}}
                  transition={{ type: "spring", duration: 4, stiffness: 50}}
                  className={"images violeta-3"}></motion.div>
              </Fragment>
            }

            {hovered === "wedding" &&
                <motion.div
                  key={"jujubobo-1"}
                  initial={{opacity:0, scale: 0.95, x:-100, y: -50}}
                  animate={{opacity:1, scale:1, x:0, y:0}}
                  exit={{opacity:0, scale: 0.95, x:-100, y: -50}}
                  transition={{ type: "spring", duration: 4, stiffness: 50}}
                  className={"images jujubobo-1"}></motion.div>
            }
            {hovered === "wedding" &&
                <motion.div
                  key={"jujubobo-2"}
                  initial={{opacity:0, scale: 0.8, x:-170, y: 100}}
                  animate={{opacity:1, scale:1, x:0, y:0}}
                  exit={{opacity:0, scale: 0.9, x:-50, y:100}}
                  transition={{
                    default: {type: 'spring'},
                    x:{type: 'spring', stiffness: 50, duration: 2 },
                    y:{duration: 0.7},
                    scale: {type: 'spring', bounce: 0.4, duration: 2.7 },
                    opacity: { duration: 1 }
                  }}
                  className={"images jujubobo-2"}>
                    <Video
                      desktopHref={"https://res.cloudinary.com/dt47helyp/video/upload/v1621646586/Portfolio/Desktop/JujuBobo_dls3nf.mp4"}
                      mobileHref={"https://res.cloudinary.com/dt47helyp/video/upload/v1621646586/Portfolio/Desktop/JujuBobo_dls3nf.mp4"}
                      isDesktop={isDesktop} />
                </motion.div>
            }
          </AnimatePresence>
        </div>
      </div>
    </Div100vh>
  )
}

export default Content;
