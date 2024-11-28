'use client'
import { useEffect, useRef, useState } from "react";
import {motion,useInView,useAnimation} from 'framer-motion';

const FM_Reveal = ({children}) => {

    const ref = useRef(null);
    const isInView = useInView(ref);
    
    const mainControls = useAnimation();
    const slideControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            console.log(isInView, "isInView");
            mainControls.start("visible");
            slideControls.start("visible");
        } else {
            mainControls.start("hidden");
            slideControls.start("hidden");
        }
    }, [isInView]);

    return (

        <div ref={ref} style={{position:"relative", overflow:"hidden"}}>
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 75,   },
                visible: { opacity: 1, y: 0,  },
            }}
            initial="hidden"
            animate={mainControls}
            // whileInView="visible"
            transition={{ duration: 0.5, delay: 0.25 }}
        >
            {children}
        </motion.div>
        <motion.div
            variants={{
                hidden: {left: 0},
                visible: {left: "100%"},
                // hidden: { opacity: 0, y: 75,   left: 0},
                // visible: { opacity: 1, y: 0,  left: 100},
            }}
            initial="hidden"
            animate={slideControls}
            transition={{ duration: 1, ease: 'easeIn' }}
            style={{
                position: "absolute",
                top:5,
                bottom:5,
                left:0,
                right:0,
                backgroundColor:"red",
                zIndex:20
            }}
        />

        {/* <div 
            style={{
                position: "absolute",
                top:5,
                bottom:5,
                left:0,
                right:0,
                zIndex:20,
                backgroundColor:"red"
            }}
            >

        </div> */}
       
        </div>
    
    ) 
};

export default FM_Reveal;
