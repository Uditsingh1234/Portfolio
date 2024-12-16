import { message } from 'antd';
import axios from 'axios';
import React from 'react';
import { ShowLoading, HideLoading } from '../../redux/rootSlice';
import { useDispatch } from 'react-redux';

function AdminLogin() {
    const [user, setUser] = React.useState({
        username: '',
        password: ''
    });
    const dispatch = useDispatch();

    const login = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        try {
            dispatch(ShowLoading());
<<<<<<< HEAD
            // const response = await axios.post("http://localhost:5000/api/portfolio/admin-login", user);
=======
>>>>>>> 281f5c30d1661b30fb4a359282c01ae8033f2f85
            const response = await axios.post(`${import.meta.env.VITE_API_RENDER_LINK}/api/portfolio/admin-login`, user);
            dispatch(HideLoading());
            console.log("Logging in...");

            if (response.data.success) {
                message.success(response.data.message);
                localStorage.setItem("token", JSON.stringify(response.data));
                window.location.href = '/admin'; // Redirect to admin page
            } else {
                message.error(response.data.message); // Display the exact error message
            }
        } catch (error) {
            message.error("Login failed. Please try again.");
            dispatch(HideLoading());
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-primary">
            <div className="bg-card shadow-xl shadow-tertiary rounded-lg p-8 w-full max-w-md glasss">
                <h2 className="text-2xl font-bold text-secondary mb-4">Admin Login</h2>
                <form onSubmit={login}>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-sm font-medium text-text">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Enter your username"
                            className="w-full px-3 py-2 mt-1 text-input border rounded-md focus:outline-none focus:ring focus:ring-primary"
                            value={user.username}
                            onChange={(e) => setUser({ ...user, username: e.target.value })}
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-text">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            className="w-full px-3 py-2 mt-1 text-input border rounded-md focus:outline-none focus:ring focus:ring-primary"
                            value={user.password}
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                        />
                    </div>
                    <button type="submit" className="btn w-full bg-primary text-white p-3 rounded-md hover:bg-primary/80 focus:outline-none focus:ring focus:ring-primary">Login</button>
                </form>
            </div>
        </div>
    );
}

export default AdminLogin;
