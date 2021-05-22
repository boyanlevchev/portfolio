import React, {useState} from 'react';
import { motion } from 'framer-motion';

import { projectDetails } from '../projects';

import AnimatedItemGroup from './animated_item_group';



function ItemList({setExpanded, setHovered, expanded, hovered}) {
  const [keys] = useState(Object.keys(projectDetails));

  return(
      <div
        onMouseOver={() => setHovered(null)}
        className={`links-box ${expanded !== null ? "item-expanded" : undefined}`}
        >
        <motion.ul id="links">
          {keys.map((key, i) => {
            return <AnimatedItemGroup
                      key={key}
                      id={key}
                      index={i+1}
                      href={projectDetails[key].href}
                      title={projectDetails[key].title}
                      subtitle={projectDetails[key].subtitle}
                      setExpanded={setExpanded}
                      hovered={hovered}
                      setHovered={setHovered}
                      expanded={expanded}/>
          })}

        </motion.ul>
      </div>
    )
}

export default ItemList;
