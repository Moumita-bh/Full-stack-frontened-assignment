import React, { useState } from "react";
import { createProduct } from "../../services/api";

const ProductForm = ({ refresh }) => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createProduct({ name, price });
            setName("");
            setPrice("");
            refresh();
        } catch (error) {
            alert("Failed to create product: " + (error.response?.data?.message || "Unknown error"));
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Product Name"
                required
            />
            <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Price"
                required
            />
            <button type="submit">Add Product</button>
        </form>
    );
};

export default ProductForm;
