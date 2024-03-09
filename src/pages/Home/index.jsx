import React from "react";
import useProductData from "../../hooks/useProductData";
function Home() {
  const { loading, products, error } = useProductData();
  console.log(products);

  return (
    <div>
      <div id="hero" className="flex justify-between gap-24 mt-20">
        <div>
          <h1 className="text-6xl font-bold">
            We are changing the way people shop
          </h1>
          <p className="mt-6 text-xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
            repellat explicabo enim soluta temporibus asperiores aut obcaecati
            perferendis porro nobis.
          </p>
          <button className="btn bg-blue-500 mt-6 text-lg text-white">
            Our products
          </button>
        </div>
        <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
          <div className="carousel-item">
            <img
              src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
              className="rounded-box"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
              className="rounded-box"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
              className="rounded-box"
            />
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-4xl mt-20 mb-12">Featured Products</h2>
        <hr className="mb-16" />
        <div>
          <div>
            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p>Error: {error}</p>
            ) : (
              <div>
                <h2>Featured Products</h2>
                <ul>
                  {Array.isArray(products) && products.length > 0 ? (
                    products.map((product) => (
                      <li key={product.id}>{product.name}</li>
                    ))
                  ) : (
                    <p>No products found.</p>
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
