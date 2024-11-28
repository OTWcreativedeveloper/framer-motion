'use client'
import { useEffect, useRef, useState } from "react";
import {motion,useInView,useAnimation} from 'framer-motion';

const Card = ({children}) => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (

    <section ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75  },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <div className="w-[50vw] h-[200px] bg-red-400 flex justify-center items-center rounded-lg shadow-2xl shadow-zinc-500">
          <p className="text-3xl">{children}</p>          
        </div>
      </motion.div>
    </section>
   
  )
};

export default Card;
