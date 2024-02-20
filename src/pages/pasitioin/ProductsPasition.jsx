// ... (imports and other code)

import { useEffect, useState } from "react";

const ProductsPasition = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const itemsPerPage = 10; // Set the number of items per page

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/products?page=${currentPage}&perPage=${itemsPerPage}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

        // Ensure data.products is an array before setting state
        if (Array.isArray(data.products)) {
          setProducts(data.products);
        } else {
          console.error('Invalid data format received from the server:', data);
        }

        setTotalPages(data.totalPages);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, [currentPage, itemsPerPage]);

  return (
    <div>
      <h2>Product List</h2>
      {Array.isArray(products) && products.length > 0 ? (
        products.map((product) => (
          <div key={product._id}>
            <p>{product.name}</p>
            <h4>seller:{product.length}</h4>
          </div>
        ))
      ) : (
        <p>No products available.</p>
      )}

      <div>
        <button disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}>
          Previous
        </button>
        <span> Page {currentPage} of {totalPages} </span>
        <button disabled={currentPage === totalPages} onClick={() => handlePageChange(currentPage + 1)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductsPasition;
