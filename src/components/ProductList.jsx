import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BASE_URL}/products`)
            .then(response => setProducts(response.data))
            .catch(error => console.error('Error fetching product list:', error));
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-semibold mb-4">Products List</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="text-left py-2 px-4 border-b">#</th>
                            <th className="text-left py-2 px-4 border-b">Image</th>
                            <th className="text-left py-2 px-4 border-b">Name</th>
                            <th className="text-left py-2 px-4 border-b">Price</th>
                            <th className="text-left py-2 px-4 border-b">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr key={product._id} className="hover:bg-gray-100">
                                <td className="py-2 px-4 border-b">{index + 1}</td>
                                <td className="py-2 px-4 border-b">
                                    <img className='w-20 h-20 object-cover' src={product.picture.secure_url} alt={product.name} />
                                </td>
                                <td className="py-2 px-4 border-b">{product.name}</td>
                                <td className="py-2 px-4 border-b">${product.price}</td>
                                <td className="py-2 px-4 border-b">
                                    <button className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600">
                                        Edit
                                    </button>
                                    <button className="bg-red-500 text-white px-4 py-1 rounded ml-2 hover:bg-red-600">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductList;
