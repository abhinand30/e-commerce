import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

import { selectedUsers } from "../redux/slice/userSlice";
import { loginData } from "../common/data/dataArray";

const LoginPage = () => {
    const userData=useSelector(selectedUsers);
    const navigate=useNavigate()
    
    const [formData, setFormData] = useState<{email:string;password:string}>({
        email:'',
        password:''
    })
    const [errors, setErrors] = useState({})

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
        setErrors((prevState)=>({...prevState,[name]:''}))
    }


    const handleLogin :React.FormEventHandler<HTMLFormElement> = (e) =>{
        e.preventDefault()
        const newErrors:Record<string,string>={}
        const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        Object.keys(formData).forEach((key)=>{
            if(!formData[key].trim()){
                newErrors[key]=`${key} is required`
                
            }
            if(key=='email'&&!formData.email.match(isValidEmail)){
                newErrors[key]=`email is invalid`
            }
        })
        
        if(Object.keys(newErrors).length>0){
            setErrors(newErrors);
            return
        }
            try{
                const currentUser=userData.find((user)=>user.email===formData.email)
                console.log(currentUser)
                if(currentUser){
                    if(currentUser.password===formData.password){
                        localStorage.setItem("loginDetails", JSON.stringify(currentUser));
                        if(currentUser.userType==='admin'){
                            navigate('/admin')
                        }else{
                            navigate('/user')
                        }
                    }else{
                        toast('Invalid password')
                        return
                    }
                    toast('user found')
                }else{
                    toast('user not found')
                }
                
            }catch(error){
                console.log(error);

            }

    }
  return (
    <div className="font-inter overflow-hidden items-center">
     <ToastContainer />
      <div className="mx-auto max-w-lg px-6 lg:px-8 absolute py-20">
       
        <div className="rounded-2xl bg-white shadow-xl">
          <form onSubmit={handleLogin} className="lg:p-11 p-7 mx-auto">
            <div className="mb-11">
              <h1 className="text-gray-900 text-center font-manrope text-3xl font-bold leading-10 mb-2">Welcome Back</h1>
              </div>
              {loginData.map((login,index)=>(
                <div key={index} className="pt-6">
                    <p className="text-red-500 text-right text-transform: capitalize">{errors[login.name]}</p>
                <input type={login.type} name={login.name} value={formData[login.name]}  onChange={handleChange} className="w-full h-12 text-gray-900 placeholder:text-gray-400 text-lg font-normal leading-7 rounded-full border-gray-300 border shadow-sm focus:outline-none px-4 " placeholder={`Enter ${login.name}`}/>
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