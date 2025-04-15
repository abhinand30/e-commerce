import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

import { selectedUsers } from "../redux/slice/userSlice";
import { loginData } from "../common/data/dataArray";
import { loginSuccess } from "../redux/slice/authSlice";
import { errorType } from "../common/type/types";

interface formType {
    email: string;
    password: string
}

const LoginPage = () => {
    const userData = useSelector(selectedUsers);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [formData, setFormData] = useState<formType>({
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState<errorType>({})

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
        setErrors((prevState) => ({ ...prevState, [name]: '' }))
    }

    useEffect(() => {
        const fetchLoginDetails = () => {
            try {
                const item = localStorage.getItem('loginDetails');
                const loginDetails = item ? JSON.parse(item) : null;


                if (!loginDetails) {
                    return
                } else {
                    dispatch(loginSuccess(loginDetails));
                    console.log(loginDetails, '>>>')
                    navigate(loginDetails.userType === "admin" ? "/admin" : "/user");
                }

            } catch (error) {
                console.log(error)
            }
        }
        fetchLoginDetails()
    })


    const handleLogin: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();

        const newErrors: Record<string, string> = {}
        const isValidEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

        for (const key in formData) {
            const value = formData[key as keyof formType]?.trim?.() || "";

            if (!value) {
                newErrors[key] = `${key} is required`;
            }

            if (key === "email" && value && !isValidEmail.test(value)) {
                newErrors[key] = "Invalid email format";
            }
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return
        }
        try {
            const currentUser = userData.find((user) => user.email === formData.email)
            console.log(currentUser)
            if (!currentUser) {
                toast("User not found");
                return;
            }
            if (currentUser.password !== formData.password) {
                toast("Invalid password");
                return;
            }
            dispatch(loginSuccess(currentUser));
            localStorage.setItem("loginDetails", JSON.stringify(currentUser));
            toast("Login successful");

            navigate(currentUser.userType === "admin" ? "/admin" : "/user");

        } catch (error) {
            console.log(error);

        }

    }
    return (
        <div className="flex items-center justify-center h-screen w-screen">

            <ToastContainer />
            <div className="mx-auto max-w-lg px-6 lg:px-8 absolute py-20">

                <div className="rounded-2xl w-100 maax-w-130  bg-white shadow-xl">
                    <form onSubmit={handleLogin} className="lg:p-11 p-7 mx-auto">
                        <div className="mb-11">
                            <h1 className="text-gray-900 text-center font-manrope text-3xl font-bold leading-10 mb-2">Welcome Back</h1>
                        </div>
                        {loginData.map((login, index) => (
                            <div key={index} className="pt-6 w-80">
                                <p className="text-red-500 text-right text-transform: capitalize">{errors[login.name]}</p>
                                <input type={login.type} name={login.name} value={formData[login.name as keyof formType]} onChange={handleChange} className="w-full h-12 text-gray-900 placeholder:text-gray-400 text-lg font-normal leading-7 rounded-full border-gray-300 border shadow-sm focus:outline-none px-4 " placeholder={`Enter ${login.name}`} />
                            </div>
                        ))}

                        <a className="flex justify-end mb-6">
                            <span className="text-indigo-600 text-right text-base font-normal leading-6">Forgot Password?</span>
                        </a>
                        <button type="submit" className="w-full h-12 text-white text-center text-base font-semibold leading-6 rounded-full hover:bg-indigo-800 transition-all duration-700 bg-indigo-600 shadow-sm mb-11">Login</button>
                        <Link to={'/signup'} className="flex justify-center text-gray-900 text-base font-medium leading-6"> Don’t have an account? <span className="text-indigo-600 font-semibold pl-3"> Sign Up</span>
                        </Link>
                    </form>
                </div>
            </div>

            {/* </div> */}
        </div>

    )
}

export default LoginPage;