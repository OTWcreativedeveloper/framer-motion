'use client'
import { useEffect, useRef, useState } from "react";
import {motion,useInView,useAnimation} from 'framer-motion';
import FM_Reveal from "@/utils/FM_Reveal";
//! source YOUTUBE = https://www.youtube.com/watch?v=hjbxaYTMhy0&list=PLA4qBVt61k3Phpwt7uqaptIg9NYZ5aNu_
export default function Home() {
  const [data,setData] = useState([]);
  const [loading,setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    setLoading(false);
    setData(data.products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if(loading) return <p>Loading...</p>;

  return (
      <div className="grid grid-cols-1 gap-10 justify-items-center my-28">
        <div className="w-[50vw] h-[200px] bg-blue-400 flex justify-center items-center rounded-lg shadow-2xl shadow-zinc-500">
            <p className="text-3xl uppercase font-bold">dynamic div</p>          
        </div>

        {
          data.map((item, index) => {
            return (
              <FM_Reveal key={index}>
                <div key={index} className="w-[50vw] h-[200px] bg-indigo-400 flex justify-center items-center rounded-lg shadow-2xl shadow-zinc-500">
                  <p className="text-3xl">{item.title}</p>          
                </div>
              </FM_Reveal>
            )
          })
        }

        <div className="w-[50vw] h-[200px] bg-blue-400 flex justify-center items-center rounded-lg shadow-2xl shadow-zinc-500">
            <p className="text-3xl uppercase font-bold">static div</p>          
        </div>
        <FM_Reveal>
          <div className="w-[50vw] h-[200px] bg-blue-400 flex justify-center items-center rounded-lg shadow-2xl shadow-zinc-500">
            <p className="text-3xl">hello</p>          
          </div>
        </FM_Reveal>

        <FM_Reveal>
          <div className="w-[50vw] h-[200px] bg-blue-400 flex justify-center items-center rounded-lg shadow-2xl shadow-zinc-500">
              <p className="text-3xl">hello</p>          
          </div>
        </FM_Reveal>

        <FM_Reveal>
          <div className="w-[50vw] h-[200px] bg-blue-400 flex justify-center items-center rounded-lg shadow-2xl shadow-zinc-500">
              <p className="text-3xl">hello</p>          
          </div>
        </FM_Reveal>

        <FM_Reveal>
          <div className="w-[50vw] h-[200px] bg-blue-400 flex justify-center items-center rounded-lg shadow-2xl shadow-zinc-500">
              <p className="text-3xl">hello</p>          
          </div>
        </FM_Reveal>

        <FM_Reveal>
          <div className="w-[50vw] h-[200px] bg-blue-400 flex justify-center items-center rounded-lg shadow-2xl shadow-zinc-500">
              <p className="text-3xl">hello</p>          
          </div>
        </FM_Reveal>

        <FM_Reveal>
          <div className="w-[50vw] h-[200px] bg-blue-400 flex justify-center items-center rounded-lg shadow-2xl shadow-zinc-500">
              <p className="text-3xl">hello</p>          
          </div>
        </FM_Reveal>

        <FM_Reveal>
          <div className="w-[50vw] h-[200px] bg-blue-400 flex justify-center items-center rounded-lg shadow-2xl shadow-zinc-500">
              <p className="text-3xl">hello</p>          
          </div>
        </FM_Reveal>

        


       
        <div className="w-[50vw] h-[200px] bg-yellow-400 flex justify-center items-center rounded-lg shadow-2xl shadow-zinc-500"></div>
        <motion.div
          // variants={{
          //   hidden: { opacity: 0, x: -100 },
          //   visible: { opacity: 1, x: 0 },
          // }}
          // initial="hidden"
          // animate="visible"
          // transition={{ duration: 0.5, delay: 0.25 }}
          // animate={{ x: -100 }}
          initial={{ scale: 0, opacity:0 }} 
          animate={{ scale: 1, opacity:1, transition: { duration: 0.5, delay: 0.25 } }}
          // transition={{ duration: 2, delay: 0.25 }}
          whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => console.log('hover started!')}
        >
        <div className="w-[50vw] h-[200px] bg-red-400 flex justify-center items-center rounded-lg shadow-2xl shadow-zinc-500">
            <p className="text-3xl">hello</p>          
        </div>
        </motion.div>

        <div className="w-[50vw] h-[200px] bg-red-400 flex justify-center items-center rounded-lg shadow-2xl shadow-zinc-500">
            <p className="text-3xl">hello</p>          
        </div>
        <div className="w-[50vw] h-[200px] bg-red-400 flex justify-center items-center rounded-lg shadow-2xl shadow-zinc-500">
            <p className="text-3xl">hello</p>          
        </div>
        <div className="w-[50vw] h-[200px] bg-red-400 flex justify-center items-center rounded-lg shadow-2xl shadow-zinc-500">
            <p className="text-3xl">hello</p>          
        </div>
        <div className="w-[50vw] h-[200px] bg-red-400 flex justify-center items-center rounded-lg shadow-2xl shadow-zinc-500">
            <p className="text-3xl">hello</p>          
        </div>
        <div className="w-[50vw] h-[200px] bg-red-400 flex justify-center items-center rounded-lg shadow-2xl shadow-zinc-500">
            <p className="text-3xl">hello</p>          
        </div>
        <div className="w-[50vw] h-[200px] bg-red-400 flex justify-center items-center rounded-lg shadow-2xl shadow-zinc-500">
            <p className="text-3xl">hello</p>          
        </div>
        <div className="w-[50vw] h-[200px] bg-red-400 flex justify-center items-center rounded-lg shadow-2xl shadow-zinc-500">
            <p className="text-3xl">hello</p>          
        </div>
        <div className="w-[50vw] h-[200px] bg-red-400 flex justify-center items-center rounded-lg shadow-2xl shadow-zinc-500">
            <p className="text-3xl">hello</p>          
        </div>
        <div className="w-[50vw] h-[200px] bg-red-400 flex justify-center items-center rounded-lg shadow-2xl shadow-zinc-500">
            <p className="text-3xl">hello</p>          
        </div>
        <div className="w-[50vw] h-[200px] bg-red-400 flex justify-center items-center rounded-lg shadow-2xl shadow-zinc-500">
            <p className="text-3xl">hello</p>          
        </div>
        <div className="w-[50vw] h-[200px] bg-red-400 flex justify-center items-center rounded-lg shadow-2xl shadow-zinc-500">
            <p className="text-3xl">hello</p>          
        </div>
       
    </div>
  );
}
