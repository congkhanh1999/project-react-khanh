import React from 'react';
import fire from './config/firebase';
import { useEffect, useState } from "react";
import {
  BrowserRouter, Route, Switch
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import productApi from './api/productApi';
import './App.css';
import Footer from './component/footer/footer';
import Home from './component/home/home';
import Login from './component/login/login';
import Navigation from './component/navbar/navbar';
import NotFound from './component/not-found/notFound';
import EditProduct from './component/product/editProduct';
import ProductDetail from './component/product/productDetail';
import Products from './component/product/products';
import EditUser from './component/register/editUser';
import ListUser from './component/register/listUser';
import Register from './component/register/register';
import ShoppingCart from './component/shopping-cart/shoppingCart';
// Configure Firebase.


function App() {
  const [user, setUser] = useState({

  })
  //handle firebase auth change
  useEffect(() => {
    const unregisterAuthObserver = fire.auth().onAuthStateChanged(async (user) => {
      if (!user) {
        localStorage.removeItem('firebaseui::rememberedAccounts')
        return;
      }
      console.log(user)
      const token = await user.getIdToken()
      localStorage.setItem('firebaseui::rememberedAccounts', JSON.stringify(user.providerData))
    });

    return () => unregisterAuthObserver();
  }, [])
  return (
    <>

      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/products' exact>
            <Products />
          </Route>
          <Route path='/products/detail/:id' >
            <ProductDetail />
          </Route>
          <Route path='/login' >
            <Login />
          </Route>
          <Route path='/register' >
            <Register />
          </Route>
          <Route path='/list-user' exact>
            <ListUser />
          </Route>
          <Route path='/product/edit/:id' >
            <EditProduct />
          </Route>
          <Route path='/list-user/edit/:uid'   >
            <EditUser />
          </Route>
          <Route path='/shopping-cart' >
            <ShoppingCart />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter >
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

    </>
  );
}

export default App;
