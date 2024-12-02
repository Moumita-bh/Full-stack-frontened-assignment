import React, { useEffect, useState } from "react";
import { fetchProducts, deleteProduct } from "../../services/api";

const ProductList = ({ refresh }) => {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        try {
            const { data } = await fetchProducts();
            setProducts(data);
        } catch (error) {
            alert("Failed to fetch products: " + (error.response?.data?.message || "Unknown error"));
        }
    };

    const handleDelete = async (id) => {
        try {
            await deleteProduct(id);
            refresh();
        } catch (error) {
            alert("Failed to delete product: " + (error.response?.data?.message || "Unknown error"));
        }
    };

    useEffect(() => {
        getProducts();
    }, [refresh]);

    return (
        <div>
            <h1>Products</h1>
            <ul>
                {products.map((product) => (
                    <li key={product._id}>
                        {product.name} - ${product.price}
                        <button onClick={() => handleDelete(product._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
