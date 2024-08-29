import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const UsersList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BASE_URL}/users`)
            .then(response => setUsers(response.data))
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6">Users List</h1>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <table className="min-w-full bg-white">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 bg-gray-200 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                                User Name
                            </th>
                            <th className="px-6 py-3 bg-gray-200 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                                role
                            </th>
                            <th className="px-6 py-3 bg-gray-200"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user._id} className="hover:bg-gray-100">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    {user.name}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    {user.role}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <Link to={`/edit-user/${user._id}`} className="text-blue-600 hover:text-blue-900">
                                        Edit
                                    </Link>
                                    <button className="ml-4 text-red-600 hover:text-red-900">
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

export default UsersList;
