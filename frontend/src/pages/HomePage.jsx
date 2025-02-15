import React from 'react';
import products from '../../products';
import Card from '../components/Card.jsx';

const HomePage = () => {
  return (
    <div className=""> {/* Added padding for better spacing */}
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {products.map(product => (
          <Card key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
