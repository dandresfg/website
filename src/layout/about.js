import React from 'react'
import PropTypes from 'prop-types'

const About = (props) => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <span className="h3 d-block py-2">Sobre mí</span>
          </div>
          <div className="col-12 text-justify">
            <p>
              Hola, soy Diego, y te contaré un poco de lo que me gusta y de los proyectos en los que
              he trabajado a lo largo de estos 3 años que tengo como progamador, bueno, sin más nada que agregar
              a esta intrucción empezemos. Tengo 20 años, desde los 17 estoy estudiando programación. Todo
              empieza como un hobbie y puede terminar en una pasión que no conocía pero que acabó convirtiéndose
              en mi día a día. Mi primer lenguaje fue Java, me enamoré de él como un loco mientras aprendía PDO
              (Programación Orientada a Objetos)
            </p>
            <p>
              Siempre he sido muy curioso, así que no me quedé solo con Java, quería aprender más,
              y fue cuando inicié en el mundo de las páginas web. Empecé sin saber cómo funcionaba
              en absoluto un servidor o qué era un Hosting, pero me llené de preguntas a tal punto
              que aún en día, creo que no me sobrará el tiempo para aprender todo lo que quiero saber.
              Desde que entré al mundo moderno, decidí por empezar con PHP, un lenguaje de programación
              de fácil aprendizaje y que era un arma de doble filo, que luego se convertiría en la cuna
              de mis primeros proyectos.
            </p>
            <p>
              Quería que mis aplicaciones y páginas fueran más bonitas, más que solo CSS. Ya sabía mucho
              de páginas estáticas, de conexiones a bases de datos, pero quería subir a un nivel más.
              Fue entonces cuando emprendí con Javascript y los front-end modernos. Empecé con React,
              aunque lo dejé a medio camino, pero lo retomé cuando volvieron los famosos 'hooks' y desde entonces
              me he fascinado por la programación en React, a tal punto de aprender Redux, Next para continuar
              haciendo proyectos más complejos que demanden mejores soluciones.
              De ahí pasé a NodeJS para convertirme en lo que sería un FullStack, una persona que maneja la experiencia
              del usuario sin descuidar la base de datos, la lógica trasfondo de la aplicación, las conexiones,
              los errores y mucho más. Fue entonces cuando mi emoción por seguir aprendiendo cada vez se volvía realidad.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
