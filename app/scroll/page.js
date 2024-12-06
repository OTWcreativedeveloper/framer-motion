'use client'
import { useEffect, useRef, useState } from "react";
import {motion,useInView,useAnimation,useScroll,useMotionValueEvent,useTransform} from 'framer-motion';
//! SOURCE YOUTUBE = https://www.youtube.com/watch?v=PczQ0qSwe1E&list=PLA4qBVt61k3Phpwt7uqaptIg9NYZ5aNu_&index=8


const WhileInView = () => {
    return (
      <div className="relative mx-auto grid h-32 w-96 place-content-center">
        <h1 className="relative z-0 text-3xl font-black uppercase">
          Show me on scroll
        </h1>
        <motion.div
          initial={{
            opacity: 1,
          }}
          whileInView={{
            opacity: 0,
          }}
          viewport={{
            // once: true,
            // margin: "-200px",
            amount: "all",
          }}
          onViewportEnter={() => console.log("Enter!")}
          onViewportLeave={() => console.log("Exit!")}
          className="absolute bottom-0 left-0 right-0 top-0 z-10 bg-indigo-500"
        />
      </div>
    );
};

const UseInView = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, {
      amount: "all",
    });
  
    useEffect(() => {
      console.log(`The element ${isInView ? "is" : "is NOT"} in view`);
    }, [isInView]);
  
    return (
      <div
        ref={ref}
        className="relative mx-auto grid h-32 w-96 place-content-center"
      >
        <h1 className="relative z-0 text-3xl font-black uppercase">
          Show me on scroll
        </h1>
        <motion.div
          animate={{
            y: isInView ? "-100%" : "0%",
          }}
          className="absolute bottom-0 left-0 top-0 z-10 w-1/3 bg-indigo-500"
        />
        <motion.div
          animate={{
            y: isInView ? "100%" : "0%",
          }}
          className="absolute bottom-0 left-1/3 top-0 z-10 w-1/3 bg-indigo-500"
        />
        <motion.div
          animate={{
            y: isInView ? "-100%" : "0%",
          }}
          className="absolute bottom-0 left-2/3 top-0 z-10 w-1/3 bg-indigo-500"
        />
      </div>
    );
};

const UseScrollBasic = () => {
    const { scrollYProgress } = useScroll();

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        console.log(latest);
    });

    const background = useTransform(
        scrollYProgress,
        [0, 1],
        ["#FFFFFF", "#6366F1"]
    );

    return (
        <motion.div
            style={{
                scaleX: scrollYProgress,
                background,
                x: "-50%",
                y: "-50%",
            }}
            className="fixed left-1/2 top-1/2 h-4 w-screen bg-indigo-500"
        />
    );
};

const UseScrollAdvanced = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
        // offset: ["start start", "end start"],
    });

    const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "180deg"]);

    return (
        <motion.div
            ref={targetRef}
            style={{ rotate }}
            className="mx-auto size-48 bg-indigo-500"
        />
    );
};

const UseScrollWithContainer = () => {
    const containerRef = useRef(null);
    const targetRef = useRef(null);
    const { scrollXProgress } = useScroll({
        container: containerRef,
        target: targetRef,
        axis: "x",
        offset: ["end start", "start start"],
    });

    return (
        <div
            ref={containerRef}
            className="flex w-screen overflow-x-scroll bg-indigo-500/50 py-8"
        >
            <div className="w-screen shrink-0" />
                <motion.div
                    ref={targetRef}
                    style={{ opacity: scrollXProgress }}
                    className="mx-auto size-48 shrink-0 bg-zinc-50"
                />
            <div className="w-screen shrink-0" />
        </div>
    );
};
const ScrollAnimations = () => {
    return (
        
        <div className="">
            <div className="">
                <div className="h-[150vh]" />
                {/* <WhileInView /> */}
                {/* <UseInView /> */}
                {/* <UseScrollBasic /> */}
                {/* <UseScrollAdvanced /> */}
                <UseScrollWithContainer />
                <div className="h-[150vh]" />
            </div>
        </div>  
       
    )
}

export default ScrollAnimations;