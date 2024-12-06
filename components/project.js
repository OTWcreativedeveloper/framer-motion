
import styles from "@/app/styles/project.module.css"

import { motion } from 'framer-motion';
import { useRouter } from "next/navigation";
import { useState } from 'react';



const anim = {
    initial: {width: 0},
    open: {width: "auto", transition: {duration: 0.4, ease: [0.23, 1, 0.32, 1]}},
    closed: {width: 0}
}

export default function index({project}) {

    const [isActive, setIsActive] = useState(false);
    const { title1, title2, src } = project;
    const router = useRouter()
    return (

        <div 
            onMouseEnter={() => {setIsActive(true)}} 
            onMouseLeave={() => {setIsActive(false)}} 
            // onClick={() => console.log(title1 + title2)}
            onClick={() => router.push(`${title1}`)}
            className={styles.project}>

            <p>{title1}</p>
            <motion.div variants={anim} animate={isActive ? "open" : "closed"} className={styles.imgContainer}>
                <img src={src}></img>
            </motion.div>

            <p>{title2}</p>

        </div>

    )

}