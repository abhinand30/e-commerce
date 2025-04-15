import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify'
import { changePassword, selectedUsers } from '../redux/slice/userSlice';
import { forgotPasswordData } from '../common/data/dataArray';
import { formType } from '../common/type/types';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
    const userData = useSelector(selectedUsers);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState<formType>({
        email: '',
        password: ''
    })
    const [isValidEmail, setIsValidEmail] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    const handleCheckEmail: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        const findUser = userData.find((user) => user.email === formData.email)
        if (findUser) {
            // setCurrentUser(findUser)
            setIsValidEmail(true)
        } else {
            toast.error("We coundn't find your account")
        }
    }
    const handleForgetPassword: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        try {
            dispatch(changePassword({
                email: formData.email,
                password: formData.password
            }))
            toast.success('Password changed Successfully');
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="flex items-center justify-center h-screen w-screen">

            <ToastContainer />
            <div className="mx-auto max-w-lg px-6 lg:px-8 absolute py-20">

                <div className="rounded-2xl w-100 maax-w-130  bg-white shadow-xl">
                    <form onSubmit={isValidEmail ? handleForgetPassword : handleCheckEmail} className="lg:p-11 p-7 mx-auto">
                        <div className="mb-11">
                            <h1 className="text-gray-900 text-center font-manrope text-3xl font-bold leading-10 mb-2">Reset Password</h1>
                        </div>
                        {forgotPasswordData.map((forgot, index) => (
                            <div key={index} className="pt-6 pb-6 ">
                                <input type={forgot.type} name={forgot.name} value={formData[forgot.name as keyof formType]} onChange={handleChange} className="w-full h-12 text-gray-900 placeholder:text-gray-400 text-lg font-normal leading-7 rounded-full border-gray-300 border shadow-sm focus:outline-none px-4 " placeholder={`Enter ${forgot.name}`} />
                            </div>
                        ))}
                        <button type="submit" className="w-full h-12 text-white text-center text-base font-semibold leading-6 rounded-full hover:bg-indigo-800 transition-all duration-700 bg-indigo-600 shadow-sm mb-11">
                            {isValidEmail ? 'Change Password' : 'Continue'}</button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default ForgotPassword