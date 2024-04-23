
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter, } from "react-router-dom";
import { PersistGate } from "redux-persist/lib/integration/react";
import Login from "./components/Login";
import Browse from "./Browse";
import { persister, store } from "./utills/appStore";
import CheckAuth from "./components/CheckAuth";

function App() {


  const appRoute = createBrowserRouter([
    {
      path: '/',
      element: <CheckAuth><Login /></CheckAuth>
    },
    {
      path: '/browse',
      element: <CheckAuth><Browse /></CheckAuth>
    }
  ])


  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <RouterProvider router={appRoute} />
      </PersistGate>
    </Provider>

  );
}

export default App;
