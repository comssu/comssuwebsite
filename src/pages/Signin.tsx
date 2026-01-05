import { Eye, EyeOff } from 'lucide-react';
import React, { useState, type ChangeEvent, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import type { SigninFormData, ToastProps } from '../utils/types';
import { signInValidationRules, type SignInValidationErrors } from '../utils/validationRules';
import { setCredentials } from '../app/authSlice';
import { useSignInMutation } from '../app/api/auth';
import { useAppDispatch } from '../app/hooks';
import Toast from '../components/Toast';


const Signin: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [signIn, { isLoading: signingIn }] = useSignInMutation();
    const [showPwd, setShowPwd] = useState<boolean>(false);
    const [formData, setFormData] = useState<SigninFormData>({ email: "", password: "" });
    const [validationErrors, setValidationErrors] = useState<SignInValidationErrors>({ email: null, password: null });
    const [toastProps, setToastProps] = useState<ToastProps>({ message: null, timeout: 0, isError: false });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setValidationErrors((prev: SignInValidationErrors) => ({...prev, [name]: null}));
        setFormData(prev => ({ ...prev, [name]: value })); }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const errors = signInValidationRules(formData);
        setValidationErrors(errors)
        if(Object.values(errors).filter(value => value !== null).length > 0) return
        try{
            const response = await signIn(formData).unwrap();
            console.log(response)
            if(response.token) {
                dispatch(setCredentials(response));
                navigate("/admin");}
        }catch(err){
            console.log(err)
            if(err && typeof err === "object" && "data" in err){
                const e = err as { data: { message: string } };
                setToastProps({ message: e.data.message, timeout: 5000, isError: true });
            }
        }}

    return (
        <main className="fixed top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center px-10 bg-[url('/images/mainbg.jpg')] bg-cover bg-center">
          <div className='absolute inset-0 bg-[#f6f6f6]/70'></div>
            <Toast toastProps={toastProps} setToastProps={setToastProps}/>
            <div className='flex flex-col items-center gap-1 z-50'>
                <img src="/images/[000213].png" alt="" className='w-25' />
                <h1 className='text-[0.75rem] mb-2'>Signin to access your account!</h1>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center w-full gap-2 max-w-75 z-50">
                <div className="w-full">
                    <label htmlFor='email' className='offscreen'>Email</label>
                    <input type="text" name='email' className='input-field' placeholder='Email' value={formData.email} onChange={handleInputChange} />
                    {validationErrors.email && <p className='text-[0.65rem] text-red-600 mt-0.5 font-semibold'>{validationErrors.email}</p>}
                </div>
                <div className="w-full">
                    <div className='w-full relative'>
                        <label htmlFor='password' className='offscreen'>Password</label>
                        <input type={showPwd ? "text" : "password"} name='password' className='input-field' placeholder='Password' value={formData.password} onChange={handleInputChange} />
                        {showPwd ? <EyeOff  onClick={() => setShowPwd(false)} size={20} className='absolute top-1/2 -translate-y-1/2 right-3'/> : <Eye onClick={() => setShowPwd(true)} size={20} className='absolute top-1/2 -translate-y-1/2 right-3'/>} 
                    </div> 
                    {validationErrors.password && <p className='text-[0.65rem] text-red-600 mt-0.5 font-semibold'>{validationErrors.password}</p>}                  
                </div>
                <button type='submit' className='bg-pri cursor-pointer hover:opacity-90 transition-all w-full p-2.5 rounded-xl text-sm font-bold text-white'>
                    {signingIn ? "Signingin..." : "Signin"}
                </button>
            </form>
        </main>
    );
}

export default Signin;