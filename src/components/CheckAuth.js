import React, { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser, removeUser } from '../utills/appStore/slices/userSlice';
import { auth } from '../utills/firebase';

const CheckAuth = ({ children }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(store => store.user);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            console.log("useEffect called", user)
            if (user) {
                const { uid, email, displayName } = user;
                dispatch(addUser({ uid, email, displayName: displayName || 'NA' }));
                navigate('/browse');
            } else {
                dispatch(removeUser());
                navigate('/');
            }
        });
        return () => unsubscribe();
    }, [])

    return children
}

export default CheckAuth