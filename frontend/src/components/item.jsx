import React, {useState} from 'react';

import { motion } from 'framer-motion';
import {useWindowScroll} from 'react-use';

function Item({layoutId, setHovered, setExpanded, hovered, id, index, href, title, subtitle}) {
  const {y} = useWindowScroll();
  const [scrollPosition, setScrollPosition] = useState(0);

  return(
    <motion.li
      id={id}
      layoutId={layoutId}
      onMouseOver={ e => e.stopPropagation()}
      onHoverStart={ () => setHovered(id)}
      onTouchStart={() => {
        setScrollPosition(y);
      }}
      onTouchEnd={() => {
        if (y - scrollPosition > -5 && y - scrollPosition > 5) {
          setExpanded(id);
          setHovered(null);
        }

      }}
      onClick={() => {
        setExpanded(id);
        setHovered(null);
      }}
      className={"item-width"}
      >
        <h2 className="h2-left">> {title}</h2>
        <h2 className="h2-right">{subtitle}</h2>
    </motion.li>
  )
}

export default Item;


