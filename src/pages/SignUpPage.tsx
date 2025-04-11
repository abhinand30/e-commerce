import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';

import { userFormArray } from '../common/data/dataArray';
import { userState } from '../common/type/types';
import { addUsers } from '../redux/slice/userSlice';



function SignUpPage() {
    const dispatch = useDispatch();
    const navigate=useNavigate();
    const [formData, setFormData] = useState<userState>({
        name: '',
        email: '',
        phone: '',
        password: ''
    });
    
    const [errors,setErrors]=useState({})
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
        setErrors((prevState)=>({...prevState,[name]:''}))
    }

    const handleAddUser :React.FormEventHandler<HTMLFormElement> = (e) =>{
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
        if (key === "phone" && formData.phone.length < 10) {
            newErrors[key] = "phone must be at least 10 digits.";
          }
    })
    if(Object.keys(newErrors).length>0){
        setErrors(newErrors);
        return
    }
        try {
            const id=crypto.randomUUID();
            dispatch(addUsers({
                id: id,
                name: formData.name,
                email: formData.email,
                phone: Number(formData.phone),
                password: formData.password,
                userType:'admin'
            }))
            toast('User registration successfull')
        } catch (error) {
            console.log(error)
        }
        finally{
            navigate('/')
        }
    }
    return (
        <div className="font-inter overflow-hidden justify-center">
             <ToastContainer />
            <div className="mx-auto max-w-lg px-6 lg:px-8 absolute py-20">

                <div className="rounded-2xl bg-white shadow-xl">
                    <form noValidate onSubmit={handleAddUser} className="lg:p-11 p-7 mx-auto">
                        <div className="mb-11">
                            <h1 className="text-gray-900 text-center font-manrope text-3xl font-bold leading-10 mb-2">Regitster an Account</h1>
                            {/* <p className="text-gray-500 text-center text-base font-medium leading-6">Let’s get started with your 30 days free trail</p> */}
                        </div>
                        {userFormArray.map((item, index) => (
                            <div key={index} className='py-1'>
                                <p className='text-red-500 text-right'>{errors[item.name]}</p>
                            <input key={index} type={item.type} name={item.name} value={formData[item.name]} onChange={handleChange} className="w-full h-12 text-gray-900 placeholder:text-gray-400 text-lg font-normal leading-7 rounded-lg border-gray-300 border shadow-sm focus:outline-none px-4 mb-1" placeholder={`Enter ${item.name}`} />
                            </div>))}
                        <button type='submit' className="w-full h-12 text-white text-center text-base font-semibold leading-6 rounded-full hover:bg-indigo-800 transition-all duration-700 bg-indigo-600 shadow-sm mb-11">Signup</button>
                        <Link to={'/'} className="flex justify-center text-gray-900 text-base font-medium leading-6"> Already have an account? <span className="text-indigo-600 font-semibold pl-3"> Login</span>
                        </Link>
                    </form>
                </div>
            </div>

            {/* </div> */}
        </div>
    )
}

export default SignUpPage