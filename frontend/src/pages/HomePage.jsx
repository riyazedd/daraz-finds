import React from 'react'
import products from '../../products'
import Card from '../components/Card.jsx'

const HomePage = () => {
  return (
    <div>
      <div className='w-full grid grid-cols-3 gap-5'>
        {products.map(product=>(
            <Card key={product._id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default HomePage
