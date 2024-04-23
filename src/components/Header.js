import React from 'react';
import { auth } from '../utills/firebase';
import { signOut } from 'firebase/auth';
import { useSelector } from 'react-redux';
import { logo } from '../utills/constant';

const Header = () => {
    const user = useSelector(store => store.user);

    const handleSignOut = () => {
        signOut(auth).then(() => {
        }).catch((error) => {
            console.error(error)
        });
    }
    return (
        <div className='absolute z-10 px-8 py-2 w-full bg-gradient-to-b from-black flex justify-between items-center' >
            <img className='w-56' src={logo} alt='Logo' />
            {user && <div className='flex items-center' >
                <div className='flex items-center' >
                    <img alt='userIcon' src={user?.photoURL} className='h-10 rounded-full' />
                    <p className='ml-2' >{user?.displayName}</p>
                </div>
                <button onClick={handleSignOut} className='border-black rounded-md p-2 ml-10 bg-red-600 text-white' >Sign Out</button>
            </div>}
        </div>
    )
}

export default Header