import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return(
        <nav>
            <ul>
                <li>
                    <NavLink to="/Login" >Login</NavLink>
                </li>
                <li>
                    <NavLink to="/Registration" >Registration</NavLink>
                </li>
                <li>
                    <NavLink to="/RestaurantList" >RestaurantList</NavLink>
                </li>
                <li>
                    <NavLink to="/RestaurantMenuList" >RestaurantMenuList</NavLink>
                </li>
                


                
            </ul>
        </nav>
    );
};
export default Navigation; 
