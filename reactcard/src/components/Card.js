import React from 'react'
// rfc
import '../styles/Card.css'

function Card(props) {
  return (
    <div>
      <div className='card'>
        <div className='cardBody'>
        <img src={props.img} alt={props.title} />
            <div className='about'>
            <h2 className='cardTitle'>{props.title}</h2>
          <p className='cardDescription'>{props.description}</p>
            </div>
        </div>
      </div>
    </div>
  )
}


export default Card;
