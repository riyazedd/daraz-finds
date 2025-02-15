import { useParams } from "react-router-dom";
import products from "../../products";
import Card from "../components/Card";

const CategoryPage = () => {
  const { categoryName } = useParams();

  const product=products.filter((x)=>x.category===categoryName)
  console.log(product);

  return (
    <div className="text-white text-center">
    <div className='w-full grid grid-cols-3 gap-5'>
    {
        product.map((p=>(
            <Card key={p._id} product={p} />
        )))
    }
    </div>
    </div>
  );
};

export default CategoryPage;
