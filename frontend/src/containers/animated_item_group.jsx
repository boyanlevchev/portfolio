import React from 'react';
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';

import ExpandedItem from '../components/expanded_item';
import Item from '../components/item';


function AnimatedItemGroup({setHovered, hovered, setExpanded, expanded, id, index, href, title, subtitle}) {

  return(
    <AnimateSharedLayout type="crossfade">

      <Item
        layoutId={`portfolio-item-${id}`}
        id={id}
        index={index}
        href={href}
        title={title}
        hovered={hovered}
        subtitle={subtitle}
        expanded={expanded}
        setExpanded={setExpanded}
        setHovered={setHovered}/>

      {expanded === id &&
        <div
          className={'close-expanded'}
          onTouchEnd={() => setExpanded(null)}
          onClick={() => setExpanded(null)}
          >

        </div>
      }

      <AnimatePresence>
        {expanded === id &&
          <ExpandedItem
            layoutId={`portfolio-item-${id}`}
            id={id}
            index={index}
            href={href}
            title={title}
            subtitle={subtitle}
            expanded={expanded}
            setExpanded={setExpanded}/>
        }
      </AnimatePresence>
    </AnimateSharedLayout>
  )
}

export default AnimatedItemGroup;


