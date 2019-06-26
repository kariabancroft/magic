import React from 'react';
import './Card.css';

const Card = (props) => {
  return (
    <section className='card'>
        <img src={props.img} alt={props.name}/>
        <div className='card-details'>
          <ul>
            <li>
              <strong>Name: </strong>
              {props.name}
            </li>
            <li>
              <strong>Artist: </strong>
              {props.artist}
            </li>
            <li>
              <strong>Set name: </strong>
              {props.setName}
            </li>
            <li>
              <strong>Original Type: </strong><br/>
              {props.originalType}
            </li>
          </ul>
        </div>
    </section>

  )
}

export default Card
