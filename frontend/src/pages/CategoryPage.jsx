import { useParams } from "react-router-dom";
import products from "../../products";
import Card from "../components/Card";

const CategoryPage = () => {
  const { categoryName } = useParams();

  const product = products.filter((x) => x.category === categoryName);
//   console.log(product);

  return (
    <div> {/* Added padding for spacing */}
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {product.length > 0 ? (
          product.map((p) => <Card key={p._id} product={p} />)
        ) : (
          <p className="text-lg col-span-full">No products found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
