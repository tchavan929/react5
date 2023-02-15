import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App';
import Navigation from './pages/Navigation';
import Login from './pages/Login';
import Registration from './pages/Registration';
import RestaurantList from './pages/RestaurantList';
//import RestaurantList1 from './pages/RestaurantList1';
import RestaurantMenuList from './pages/RestaurantMenuList';
import './App.css';
const App2 = () => {

    return(
        <div>
            <Navigation/>
                    <Routes>
                        <Route path='Login' element={<Login/>}/>
                        <Route path='Registration' element={<Registration/>}/>
                        <Route path='RestaurantList' element={<RestaurantList/>}/>
                        <Route path='RestaurantMenuList/:id' element={<RestaurantMenuList/>}/>
                        
                    </Routes>
        </div>
    )
}
export default App2;