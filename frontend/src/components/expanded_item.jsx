import React from 'react';
import { motion } from 'framer-motion';

import { projectDetails } from '../projects';


const container = {
  hidden: { opacity: 1},
  show: {
    transition: {
      staggerChildren: 0.5
    }
  }
}

const item = {
  hidden: {opacity: 0, y: 200},
  show: {opacity: 1, y: 0, transition: {type: 'spring', bounce: 0.2, duration: 4}}
}



function ExpandedItem({layoutId, setExpanded, expanded, id, index, href, title, subtitle}) {

  return(

    <motion.div
      className={'expanded-item'}
      initial={{opacity: 0, zIndex: -1, backgroundColor: 'rgba(255,255,255,0)'}}
      animate={{opacity: 1, zIndex: 101, backgroundColor: 'rgba(255,255,255,0.8)'}}
      transition={{backgroundColor:{delay: 1}, zIndex:{delay:0.4}}}
      exit={{opacity: 0, zIndex: -1, backgroundColor: 'rgba(255,255,255,0)'}}
      >
      <div
        className={'item-width expanded-item-info-panel'}
        onTouchEnd={ e => e.stopPropagation()}
        onClick={ e => e.stopPropagation()}
        >
        <motion.li
          onTouchEnd={() => setExpanded(null)}
          onClick={() => setExpanded(null)}
          className={"expanded-item-header"}
          layoutId={layoutId}
          transition={{type: 'spring', bounce: 0.2, duration: 3}}
          >
          <h2 className="h2-left">> {title}</h2>
          <h2 className="h2-right">{subtitle}</h2>
        </motion.li>

        <motion.div
          initial={{opacity: 0, y: 150, backgroundColor: 'rgba(255,255,255,0)'}}
          animate={{opacity: 1, y: 0, backgroundColor: 'rgba(255,255,255,0.8)'}}
          transition={{type: 'spring', bounce: 0.3, duration: 3, delay: 0.4}}
          exit={{opacity: 0, y: 150, transition:{duration: 0.8}}}
          className={"expanded-item-content"}
          >
          <div className={"underline-link"}>
            <a href={href} target="_blank" rel="noopener noreferrer" >
              <h2 className={"h2-left"}>Visit website</h2>
              <div className={"word-underline"}></div>
              <div className={"arrow-container"}>
                <div><div className={"word-underline-arrow"}></div></div>
              </div>
            </a>
          </div>
          <div className={"tech-used"}>
            <h3>Technologies used</h3>

            <div>
              <div>
                <h4>Frontend</h4>
                <ul>
                  {projectDetails[id].technologies_used.frontend.map( (tech, i) => {
                    return <li key={i}>{tech}</li>
                  })}
                </ul>
              </div>
              <div>
                <h4>Backend</h4>
                <ul>
                  {projectDetails[id].technologies_used.backend.map( (tech, i) => {
                    return <li key={i}>{tech}</li>
                  })}
                </ul>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className={"image-carousel"}
        onTouchEnd={ e => e.stopPropagation()}
        onClick={ e => e.stopPropagation()}
        >
        {projectDetails[id].images.map( (content, i) => {
          let image;
          if (content.type === 'image') {
            image = <motion.img variants={item} key={i} src={content.url} alt={content.alt}/>
          } else {
            image = <motion.video variants={item} key={i} src={content.url} autoPlay={true} loop={true} webkit-playsinline="true" playsInline={true} style={{width: '100%', height: '100%'}}/>
          }
          return image
        })}
        <div className={"carousel-spacer"}>

        </div>
      </motion.div>
    </motion.div>
  )
}

export default ExpandedItem;


