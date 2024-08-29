import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Root = () => {
    return (
        <div className="min-h-screen flex">
            {/* Sidebar */}
            <div className="w-64 bg-gray-800 text-white p-6">
                <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>
                <nav>
                    <ul>
                        
                        <li className="mb-4">
                            <Link to="/add-product" className="text-lg hover:text-gray-300">Add Product</Link>
                        </li>
                        <li className="mb-4">
                            <Link to="/productList" className="text-lg hover:text-gray-300">Product List</Link>
                        </li>
                        <li className="mb-4">
                            <Link to="/add-category" className="text-lg hover:text-gray-300">Add Category</Link>
                        </li>
                        <li className="mb-4">
                            <Link to="/categoryList" className="text-lg hover:text-gray-300">Category List</Link>
                        </li>
                        <li className="mb-4">
                            <Link to="/users" className="text-lg hover:text-gray-300">Users List</Link>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6 bg-gray-100">
                <Outlet />
            </div>
        </div>
    );
};

export default Root;
