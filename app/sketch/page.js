'use client'

import {motion, useAnimation} from 'framer-motion'

const Sketch = () => {

    const controls = useAnimation(); // Control the animation manually
    const controlsImage = useAnimation();
    const handleHoverStart = () => {
        controls.start({
            y: 0,
            transition: { duration: 0.5, ease: "easeIn" },
            opacity:0.5
        });
    };

    const handleHoverEnd = () => {
        controls.start({
            y: 700,
            transition: { duration: 0.5, ease: "easeOut"},
            opacity:0
        });
    };
    const handleHoverEndImage = () => {
        controlsImage.start({
            scale: 1,
            transition: { duration: 0.5 }
       
        });
    };
    return (
        <div className='flex flex-col items-center'>
            <div className='mt-60'></div>
            <motion.div className='bg-red-300 w-[500px] h-[500px] relative overflow-hidden'>
                <motion.div 
                    initial={{x:-500}}
                    whileHover={{x:0 , transition:{ease:"anticipate", duration:1}}}
                    className='bg-black absolute w-[100%] h-full opacity-50 z-40'></motion.div>
            </motion.div>
            <div className="mt-60"></div>

            <motion.div 
                className="bg-red-300 w-[500px] h-[500px] relative overflow-hidden"
                whileHover="hover"
            >
                <motion.div 
                    initial={{ x: -500 }}
                    variants={{
                        hover: { x: 0, transition: { ease: "anticipate", duration: 1 } },
                    }}
                    className="bg-black absolute w-full h-full opacity-50 z-40"
                ></motion.div>
            </motion.div>
            <div className="mt-60"></div>
            <motion.div
                className="bg-red-300 w-[500px] h-[500px] relative overflow-hidden"
                whileHover="visible"
            >
                <motion.div
                    initial={{ x: -500 }}
                    animate={{ x: -500 }} // Default position when not hovering
                    variants={{
                        visible: { x: 0, transition: { ease: "anticipate", duration: 1 } },
                        hidden: { x: -500, transition: { ease: "easeOut", duration: 5 } },
                    }}
                    className="bg-black absolute w-full h-full opacity-50 z-40"
                />
            </motion.div>
            <div className="mt-60"></div>
            <motion.div
                className="w-[500px] h-[700px] relative overflow-hidden "
                style={{
                    backgroundImage: "url('https://balimodelagency.com/agencyapps/uploads/images/talent/TLT1179/headshot-Lara-headshotJPG.JPG')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                onHoverStart={handleHoverStart}
                onHoverEnd={handleHoverEnd}
            >
                <motion.div
                    animate={controls}
                    initial={{ y: 700 }}
                    className="bg-white absolute w-full h-full opacity-50 z-40 text-black flex flex-col items-center justify-center gap-5 font-semibold"
                >
                   
                    <h1 className='text-3xl'> Model Name</h1>
                   
                    <p className='uppercase'>HEIGHT: 181 CM</p>

                    <p className='uppercase'>BUST: 81 CM</p>

                    <p className='uppercase'>WAIST: 62 CM</p>

                    <p className='uppercase'>HIPS: 91 CM</p>

                    <p className='uppercase'>SHOE: 8 US</p>

                    <p className='uppercase'>HAIR: DARK BROWN</p>

                    <p className='uppercase'>EYES: BLUE</p>
                </motion.div>
            </motion.div>
            <div className="mt-60"></div>
            <motion.div
                className="w-[500px] h-[700px] relative overflow-hidden bg-red-50 "
                onHoverStart={handleHoverStart}
                onHoverEnd={handleHoverEnd}
                
            >   
                <motion.div 
                    animate={controlsImage}
                    initial={false}
                    whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.2 }
                    }}
                    onHoverEnd={handleHoverEndImage}
                    className='w-full h-full bg-black absolute'>
                    <img 
                        src='https://balimodelagency.com/agencyapps/uploads/images/talent/TLT1179/headshot-Lara-headshotJPG.JPG'
                        className='object-cover w-full h-full'

                    />

                </motion.div>

                <motion.div
                    animate={controls}
                    initial={{ y: 700 }}
                    className="bg-white absolute w-full h-full opacity-50 z-40 text-red-800 flex flex-col items-center justify-center gap-5 font-semibold"
                >
                   
                    <h1 className='text-3xl'> Model Name</h1>
                   
                    <p className='uppercase'>HEIGHT: 181 CM</p>

                    <p className='uppercase'>BUST: 81 CM</p>

                    <p className='uppercase'>WAIST: 62 CM</p>

                    <p className='uppercase'>HIPS: 91 CM</p>

                    <p className='uppercase'>SHOE: 8 US</p>

                    <p className='uppercase'>HAIR: DARK BROWN</p>

                    <p className='uppercase'>EYES: BLUE</p>
                </motion.div>
            </motion.div>
            <div className="mt-60"></div>

        </div>
    );
}
export default Sketch;