import React, { useEffect, useState } from "react";
import axios from "axios"; // ✅ Import axios

const Card = ({ product }) => {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // ✅ Added missing states

  useEffect(() => {
    const handleScrapeImage = async () => {
      try {
        const response = await axios.get("http://localhost:3000/scrape-image", {
          params: { url: product.product_link }, // ✅ Use product.product_link directly
        });

        if (response.data.imageUrl) {
          setImageUrl(response.data.imageUrl);
        } else {
          setError("Image not found");
        }
      } catch (err) {
        setError("Failed to fetch image");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (product.product_link) {
      handleScrapeImage(); // ✅ Only run if product_link is valid
    }
  }, [product.product_link]); // ✅ Added dependency array

  return (
    <div className="w-[200px]">
      <a href={product.product_link} target="_blank" rel="noopener noreferrer">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <img src={imageUrl} alt="product" className="rounded w-30 md:w-[90%]" />
        )}
      </a>
    </div>
  );
};

export default Card;
