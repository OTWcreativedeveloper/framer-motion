'use client'

import { motion,useScroll } from 'framer-motion'
import { ReactLenis, useLenis } from 'lenis/react'

const gridContainerVariants = {
    hidden : {opacity : 0},
    show : {
        opacity : 1,
        transition : {
            staggerChildren : 0.25,
            // delayChildren : 4 //! delay dulu 4 detik baru animasi keluar
        }
    }
}

const gridSquareVariants = {
    hidden : {opacity : 0},
    show : {opacity : 1}
}

const Page = () => {
    const lenis = useLenis(({ scroll }) => {
        // called every scroll
    })
    const {scrollYProgress,} = useScroll();
    return (
        <>
        <ReactLenis root>
            <div className='h-[25vh]'></div>
            <div className="flex flex-col gap-10 overflow-x-hidden">
                <motion.section 
                    variants={gridContainerVariants}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-3 p-10 gap-10">
                    
                    {/* //! Fade up and down animation */}
                    <motion.div 
                        variants={gridSquareVariants}
                    className="bg-slate-800 aspect-square rounded-lg flex justify-center items-center gap-10">
                        <motion.div 
                            initial={{
                                opacity : 0,
                                y:100
                            }}
                            animate={{
                                opacity: 1,
                                y:0,
                                transition : {
                                    delay : 0.2,
                                    duration: 0.5,
                                    ease : "easeOut"
                                }
                            }}
                            className='w-20 h-20 bg-stone-100 rounded-lg'></motion.div>
                        <motion.div 
                            initial={{
                                opacity : 0,
                                y:-100
                            }}
                            animate={{
                                opacity: 1,
                                y:0,
                                transition : {
                                    delay : 0.4,
                                    duration: 0.7,
                                    ease : "easeOut"
                                }
                            }}
                            className='w-20 h-20 bg-stone-100 rounded-full'></motion.div>
                    </motion.div>
                    {/* //! Fade up and down animation */}
                
                    {/* //! Shape Shifting */}
                    <motion.div 
                        variants={gridSquareVariants}
                    className="bg-slate-800 aspect-square rounded-lg flex justify-center items-center gap-10">
                        <motion.div
                            className='w-1/3 h-1/3 shadow-md bg-red-300'
                            animate={{
                                scale:[1,2,2,1],
                                rotate:[0, 90, 90, 0],
                                borderRadius: ["10%","10%","50%","10%"],
                            }}
                            transition={{
                                duration:5,
                                ease:"easeInOut",
                                // times:[0.2,3,0.4,1],
                                // repeat:Infinity,
                                repeat:2,
                                repeatDelay:1
                            }}
                        ></motion.div>
                    </motion.div>
                    {/* //! Shape Shifting */}
                    
                    {/* //! Click motion */}
                    <motion.div 
                        variants={gridSquareVariants}
                    className="bg-slate-800 aspect-square rounded-lg flex justify-center items-center gap-10">
                        <motion.button 
                            whileTap={{
                                scale: 0.95
                            }}
                            whileHover={{
                                scale: 1.1,
                                background: "#d1d5db",
                                color: "black",
                                // transition: { duration: 1 },
                            }}
                            transition={{
                                bounceDamping:10,
                                bounceStiffness: 600,
                                // duration:0.7
                            }}
                            
                            className='bg-emerald-500 w-1/2 py-4 rounded-lg text-gray-100 font-light tracking-wide'>Click me</motion.button>    
                    </motion.div>
                    {/* //! Click motion */}

                    {/* //! Drag motion */}
                    <motion.div 
                        variants={gridSquareVariants}
                    className="bg-slate-800 aspect-square rounded-lg flex justify-center items-center gap-10 overflow-hidden">
                        <motion.div
                            drag
                            dragConstraints={{
                                top: -80,
                                right: 80,
                                left: -80,
                                bottom: 80
                            }}
                            dragTransition={{
                                bounceDamping:10,
                                bounceStiffness:600
                            }}
                            className='w-1/3 h-1/3 shadow-md bg-orange-500 rounded-lg'
                        ></motion.div>
                    </motion.div>
                    {/* //! Drag motion */}
                    
                    {/* //! Scroll */}
                    <motion.div 
                        variants={gridSquareVariants}
                    className="bg-slate-800 aspect-square rounded-lg flex justify-center items-center gap-10">
                        <motion.div className='w-40 aspect-square bg-gray-50/20 rounded-xl'>
                            <motion.div 
                                style={{scaleY: scrollYProgress}}
                                className='w-full bg-gray-400 rounded-xl h-full origin-bottom '/>
                        </motion.div>    
                    </motion.div>
                    {/* //! Scroll */}

                    <motion.div 
                        variants={gridSquareVariants}
                    className="bg-slate-800 aspect-square rounded-lg flex justify-center items-center gap-10">
                        
                    </motion.div>
                
                
                
                
                </motion.section>
            </div>
            <div className='h-[55vh]'></div>
        </ReactLenis>
        </>
    )
}

export default Page;