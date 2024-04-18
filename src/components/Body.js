import React, { useEffect } from 'react'
import Browse from '../Browse'
import { RouterProvider, createBrowserRouter, useNavigate } from 'react-router-dom';
import Login from './Login';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider, useDispatch } from 'react-redux';
import { store, persister } from '../utills/appStore';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utills/firebase';
import { addUser, removeUser } from '../utills/appStore/slices/userSlice';

const Body = () => {
    // const dispatch = useDispatch();
    // const navigate = useNavigate();

    // const appRoute = createBrowserRouter([
    //     {
    //         path: '/',
    //         element: <Login />
    //     },
    //     {
    //         path: '/browse',
    //         element: <Browse />
    //     }
    // ])

    // useEffect(() => {
    //     onAuthStateChanged(auth, (user) => {
    //         if (user) {
    //             const { uid, email, displayName } = user;
    //             dispatch(addUser({ uid, email, displayName }));
    //             navigate('/browse');
    //         } else {
    //             dispatch(removeUser());
    //             navigate('/');
    //         }
    //     });

    // }, [])


    return (
        // <Provider store={store}>
        //     <PersistGate loading={null} persistor={persister}>
        //         <RouterProvider router={appRoute} />
        //     </PersistGate>
        // </Provider>
        <></>

    )
}

export default Body