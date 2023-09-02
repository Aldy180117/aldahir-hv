'use client'
import React, {useEffect, useRef} from 'react'
import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {


  return (
    <div className={styles.main}>
      <div className={styles.presentation__container}>
        <Image height={200} width={200} alt='red' src={'/foto_ing.webp'}/>
        <div>
          <h1>MI HOJA DE VIDA</h1>
          <h1>ALDAHIR ALEXANDER PEREZ VILLA</h1>
          </div>
          <div className={styles.desc}>
          <p>Cuento con formación técnica industrial en la especialidad de informática, manejo base de datos, 
            y actualmente me estoy esoecializando en redes convergentes.
            Soy estudiante de la universidad de la costa actualmente cursando 
            VIII semestre de ingenieria de sistema, capacidad de tomar decisiones y plena 
            disposición para trabajar en equipo, asumo todo trabajo con mucha responsabilidad y sentido y 
            pertemencia, Con muchas ganas de aprender y conocer todo sobre el mundo que me rodea para adquirir 
            bases que permitan aportar a los procesos de las organizaciones</p>
        </div>
      </div>
    </div>
  )
}
