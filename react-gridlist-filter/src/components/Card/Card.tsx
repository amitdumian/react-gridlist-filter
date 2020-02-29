import React from 'react';
import './Card.scss';
import CardpProps from './CardProps';

function Card(CardProps:any) {
  return (
    <div className='wrapper-div'>
            <span className='img-span'>
              <img src ={CardProps.cardData.imageUrl} className='img' alt = {CardProps.cardData.imageUrl}>
              </img>
            </span>  
            <div className='card-info'>
            <div><span className='bold'>Name: </span>{CardProps.cardData.name}</div> 
            <div><span className='bold'>Text: </span>{CardProps.cardData.text}</div>
            <div><span className='bold'>Set Name: </span>{CardProps.cardData.set && CardProps.cardData.set.name}</div> 
            <div><span className='bold'>Type: </span>{CardProps.cardData.type}</div> 
        </div>
    </div>  

   );
}
export default Card;