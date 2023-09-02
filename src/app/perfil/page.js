import React from 'react'
import styles from './page.module.css'

export default function Page() {
  return (
    <div className={styles.main}>
      <div className={styles.presentacion}>
        <h2>PERFIL PROFESIONAL</h2>
        
      </div>
      <div className={styles.father}>
        <div className={styles.list__container}>
          <h2>Conocimientos</h2>
          <ul>
            <li>Administracion de base de datos</li>
            <li>Tecnico en reparacion de equipos de computo</li>
            <li>Ofimatica</li>
            <li>Analista de datos estadisticos</li>
            <li>Redes convergentes</li>
            <li>Exploracion de redes con Packet tracer</li>
          </ul>
        </div>
        <div className={styles.list__container}>
          <h2>Certificados</h2>
          <ul>
            <li>Ingeniero de sistema - Universidad de la costa</li>
            <li>Conocimientos basicos en redes - Cisco</li>
            <li>Conocimiento basicos de hardware informatico - Cisco</li>
            <li>Tecnico industrial con enfasis en la especialidad de informatica - Institucion tecnica industrial pedro a oñoro de baranoa</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
