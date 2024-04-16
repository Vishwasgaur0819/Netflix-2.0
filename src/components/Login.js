import React, { useState } from 'react';
import Header from './Header';

const Login = () => {

    const [formData, setFormData] = useState({});
    const [isSignInForm, setIsSignInForm] = useState(true);
    console.log(formData)
    const submitForm = (e) => {
        e.preventDefault();
    }

    const handleSetFormData = (name, e) => {
        setFormData((prev) => ({ ...prev, [name]: e.target.value }));
    }

    const toggleSignForm = () => {
        setIsSignInForm(!isSignInForm)
    }

    return (
        <div className="relative">
            <Header />
            <div className="m-auto relative">
                <img
                    className="h-full w-full shadow-lg"
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                    alt="coverimg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center">
                    <div className="w-2/6 p-10 border border-black bg-black rounded-md bg-opacity-70 text-white h-max mt-32">
                        <form className="" onSubmit={submitForm} >
                            <p className="font-bold text-3xl">{isSignInForm ? 'Sign In' : 'Sign Up'}</p>
                            {!isSignInForm && <input
                                type="text"
                                placeholder="Full Name"
                                className="mt-5 w-full h-16 px-3 border border-gray-400 bg-transparent rounded-md text-white"
                            />}
                            <input
                                type="text"
                                placeholder="Enter email or mobile number"
                                className="w-full h-16 px-3 border mt-5 border-gray-400 bg-transparent rounded-md text-white"
                                onChange={(e) => handleSetFormData('email', e)}
                                value={formData?.['email'] || ''}
                            />

                            <input
                                type="text"
                                placeholder="Enter password"
                                className="mt-5 w-full h-16 px-3 border border-gray-400 bg-transparent rounded-md text-white"
                            />
                            <button type="submit" className="mt-6 w-full h-12 bg-red-700 text-white rounded-md">{isSignInForm ? 'Sign In' : 'Sign Up'}</button>
                            <p onClick={toggleSignForm} className=" cursor-pointer font-medium text-sm mb-6 mt-5">{isSignInForm ? 'New to Netflix? Sign Up Now' : 'Already a user!. Sign In'}</p>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;