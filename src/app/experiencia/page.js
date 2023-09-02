import React from 'react'
import styles from './page.module.css'

export default function Page() {
  return (
    <div className={styles.main}>
      <div className={styles.list__container}>
        <h2>Experiencia laboral</h2>
        <ul>
          <li><h3>ALIMENTOS MANBU SAS</h3>
            <p>Encargado del area de sistemas con el cargo de analista de sistemas, verificacion, actualizacion de la informacion de la base de datos, generacion de reportes mediante el usos del analisis estadisticos, soporte de computo</p>
          </li>
          <li><h3>INSTITUCION TECNICA INDUSTRIAL PEDRO A.OÑORO DE BARANOA</h3>
          <p>Realice una capacitacion sobre el uso de las herramientas de microsoft office </p>
          </li>
          <li><h3>TRABAJO INDEÈNDIENTE</h3>
          <p>Realice una instalacion de camaras de seguridad mediante cableado estructurado para un negocio de cafe de internet</p>
          </li>
        </ul>
      </div>
      <div className={styles.list__container}>
        <h2>Experiencia academica</h2>
        <ul>
          <li><h3>excel intermedio</h3>
         <p>Tome el curso de excel intermedio en la universidad de la costa</p>
          </li>
          <li><h3>Analisis estadistico con excel</h3>
          <p>Realice el curso de analisis de datos con la universidad de la costa</p>
          </li>
          <li><h3>Conceptos basicos de redes</h3>
          <p>Tome este cursco por la compañia de cisco, donde abquiri un mayor conocimiento de las redes</p>
          <li><h3>Conceptos basicos del hardware informatico</h3></li>
          <p>Tome este cursco por la compañia de cisco, donde abquiri un mayor conocimiento de los componentes de los equipos de computo y realizar su mantenimiento preventivo</p>
          </li>
        </ul>
      </div>
    </div>
  )
}
