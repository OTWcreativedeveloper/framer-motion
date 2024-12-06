'use client'
import { useEffect, useRef, useState } from "react";
import styles from '@/app/styles/mainpage.module.css';
import Project from "@/components/project";

export default function ProjectList() {

  const projects = [
    {
      title1: "scroll",
      title2: "Design",
      src: "https://img.freepik.com/premium-photo/glitch-art-color-distortion-video-damage-frequency-frame-overlay-dark-neon-red-black-green-metallic-geometric-curves-noise-futuristic-abstract-background_279525-11940.jpg"
    },
    {
      title1: "reveal",
      title2: "Grange",
      src: "https://img.freepik.com/premium-photo/glitch-art-color-distortion-video-damage-frequency-frame-overlay-dark-neon-red-black-green-metallic-geometric-curves-noise-futuristic-abstract-background_279525-11940.jpg"
    },
    {
      title1: "Deux Huit",
      title2: "Huit",
      src: "https://img.freepik.com/premium-photo/glitch-art-color-distortion-video-damage-frequency-frame-overlay-dark-neon-red-black-green-metallic-geometric-curves-noise-futuristic-abstract-background_279525-11940.jpg"
    },
    {
      title1: "Nothing",
      title2: "Design Studio",
      src: "https://img.freepik.com/premium-photo/glitch-art-color-distortion-video-damage-frequency-frame-overlay-dark-neon-red-black-green-metallic-geometric-curves-noise-futuristic-abstract-background_279525-11940.jpg"
    },
    {
      title1: "Mambo",
      title2: "Mambo",
      src: "https://img.freepik.com/premium-photo/glitch-art-color-distortion-video-damage-frequency-frame-overlay-dark-neon-red-black-green-metallic-geometric-curves-noise-futuristic-abstract-background_279525-11940.jpg"
    },
    {
      title1: "Mambo",
      title2: "Mambo",
      src: "https://img.freepik.com/premium-photo/glitch-art-color-distortion-video-damage-frequency-frame-overlay-dark-neon-red-black-green-metallic-geometric-curves-noise-futuristic-abstract-background_279525-11940.jpg"
    },
    {
      title1: "Mambo",
      title2: "Mambo",
      src: "https://img.freepik.com/premium-photo/glitch-art-color-distortion-video-damage-frequency-frame-overlay-dark-neon-red-black-green-metallic-geometric-curves-noise-futuristic-abstract-background_279525-11940.jpg"
    },
    {
      title1: "Mambo",
      title2: "Mambo",
      src: "https://img.freepik.com/premium-photo/glitch-art-color-distortion-video-damage-frequency-frame-overlay-dark-neon-red-black-green-metallic-geometric-curves-noise-futuristic-abstract-background_279525-11940.jpg"
    },
    {
      title1: "Mambo",
      title2: "Mambo",
      src: "https://img.freepik.com/premium-photo/glitch-art-color-distortion-video-damage-frequency-frame-overlay-dark-neon-red-black-green-metallic-geometric-curves-noise-futuristic-abstract-background_279525-11940.jpg"
    },
  ]

  return (
    <main className={styles.main}>

      <div className={styles.gallery}>

          <p>Featured Work</p>

          {

            projects.map( (project,index) => {

              return <Project project={project} key={index}/>

            })

          }

      </div>

    </main>
  );
}
