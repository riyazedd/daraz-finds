import React from 'react'

const Card = ({product}) => {
  return (
    <div className='w-[200px]'>
      <a href={product.link}><img src={product.image} alt="product" className='rounded' /></a>
    </div>
  )
}

export default Card
