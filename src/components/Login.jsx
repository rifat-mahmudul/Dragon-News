/* eslint-disable react/no-unescaped-entities */

import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const {signInEmailPass} = useContext(AuthContext);

    const handleLogIn = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInEmailPass(email, password)
        .then(() => {
            toast.success('Successfully logged in');
            navigate(location?.state ? location.state : '/')
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <div className="flex flex-col max-w-md p-6 mx-auto mt-4 mb-16 rounded-md sm:p-10 bg-gray-900 text-gray-100">
            <div className="mb-8 text-center">
                <h1 className="my-3 text-4xl font-bold">log in</h1>
                <p className="text-sm text-gray-400">log in to access your account</p>
            </div>
            <form onSubmit={handleLogIn} noValidate="" action="" className="space-y-12">
                <div className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                        <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" required />
                    </div>
                    <div>
                        <div className="flex justify-between mb-2">
                            <label htmlFor="password" className="text-sm">Password</label>
                            <a rel="noopener noreferrer" href="#" className="text-xs hover:underline text-gray-400">Forgot password?</a>
                        </div>
                        <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" required />
                    </div>
                </div>
                <div className="space-y-2">
                    <div>
                        <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-violet-400 text-gray-900">log in</button>
                    </div>
                    <p className="px-6 text-sm text-center text-gray-400">Don't have an account yet?
                        <Link to='/register' rel="noopener noreferrer" href="#" className="hover:underline text-violet-400">Register</Link>.
                    </p>
                </div>
            </form>
        </div>
    )
}

export default Login
