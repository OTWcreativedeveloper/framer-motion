'use client'
import {motion} from 'motion/react'

const framer = () => {
    return (
        <section className="h">

            {/* <div className="h-[50vh]"></div>

            <div className="bg-blue-100 flex items-center justify-center">
                <motion.div 
                    // animate={{ x: 100 }}
                    // initial={{scale: 0}}
                    // initial={false} //! kalau false tidak ada intial poinnya
                    initial={{
                        x:100
                    }}
                    animate={{
                        scale: 1,
                        x:0
                        
                        // transition: { duration: 2 },
                    }}
                    whileTap={{ scale: 0.95,rotate: 3 }}
                    whileHover={{ scale: 1.05 }}
                    // drag 
                    // whileDrag={{ scale: 1.2, backgroundColor: "#f00" }}
                    className="w-[300px] h-[300px] bg-red-400" />
            </div>

            <div className="h-[50vh]"></div> */}


            <motion.div 
                // animate={{ scale: 1,transition: { duration: 1 },opacity:1 }}
                // initial={{scale: 0,opacity:0}}
                className='bg-red-400 w-screen h-screen flex items-center justify-center'>
                    <div className='flex items-center'>

                        <div
                            className='overflow-hidden'
                        >
                            <motion.h1 
                                initial={{
                                    // scale: 0,
                                    // opacity:0
                                    x:300,
                                    zIndex:0
                                }}
                                animate={{
                                    // scale: 1,
                                    // opacity:1, 
                                    transition: { duration: 0.3, ease: 'easeOut',delay:1 }, 
                                    x:0

                                }}
                                className='text-6xl'
                            >REIGN
                            </motion.h1>
                        </div>

                        
                        <motion.div 
                            initial={{
                                scale: 0,
                                opacity:0
                            }}
                            animate={{
                                scale: 1,
                                opacity:1, 
                                transition: { duration: 0.3, ease: 'easeOut' }, 
                            }}
                            className='w-[100px] h-[100px] bg-blue-400 rounded-full'/>
                        

                        <div
                            className='overflow-hidden'  
                        >
                            <motion.h1 
                                initial={{
                                    // scale: 0,
                                    // opacity:0
                                    x:-300,
                                    zIndex:0
                                }}
                                animate={{
                                    // scale: 1,
                                    // opacity:1, 
                                    transition: { duration: 0.3, ease: 'easeOut',delay:1  }, 
                                    x:0
                                }}
                                className='text-6xl'
                            >
                            MODELS
                            </motion.h1>
                        </div>
                    </div>
                </motion.div>

                <div className='h-[50vh] flex justify-center items-center'>
                    <div className='w-[300px] h-[150px] bg-red-400 flex justify-center items-center overflow-hidden'>
                        <h1 className='relative text-6xl left-36'>TEST</h1>
                    </div>
                </div>
                
                <div className='w-[500px]'>
                    <div className='flex flex-col items-center justify-center text-center'>
                        <div className='relative'>
                            <motion.svg 
                                animate={{rotate:360}}
                                transition={{duration:8,ease:"linear", repeat:Infinity}}
                                viewBox="0 0 300 300"
                                className="w-64 h-64"
                            >
                                <defs>
                                    <path
                                        id="circlePath"
                                        d='M 150, 150 m -60, 0 a 60, 60 0 0, 1 120,0 a 60,60 0 0,1 -120,0'
                                    />
                                </defs>
                                <text fill='#000'>
                                    <textPath xlinkHref='#circlePath' className='text-xl'>
                                        Example text
                                    </textPath>
                                </text>

                            </motion.svg>
                            <div className='w-16 h-16 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center'>

                            </div>
                        </div>
                    </div>
                </div>
               
               
        </section>
    )
}

export default framer