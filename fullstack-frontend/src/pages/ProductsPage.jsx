import React, { useEffect, useState } from 'react';
import './ProductsPage.css'; // Add a CSS file for styling

const ProductsPage = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState('');
    const token = localStorage.getItem('accessToken'); // Simulate token retrieval

    useEffect(() => {
        // If no token, set error and return
        if (!token) {
            setError('You must be logged in to view products');
            return;
        }

        // Fetch products from a public API
        fetch('https://fakestoreapi.com/products', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`, // Include token in the request header
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                return response.json();
            })
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => {
                setError(error.message);
            });
    }, [token]);

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="page-container">
            <h1>Product Management</h1>
            {products.length > 0 ? (
                <div className="products-grid">
                    {products.map((product) => (
                        <div key={product.id} className="product-card">
                            <img src={product.image} alt={product.title} />
                            <h3>{product.title}</h3>
                            <p>Price: ${product.price}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No products available.</p>
            )}
        </div>
    );
};

export default ProductsPage;
