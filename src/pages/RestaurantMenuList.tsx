import axios from 'axios';
import React, { useState, useEffect }  from 'react'
import { useParams } from 'react-router-dom';
import RestaurantMenu from './RestaurantMenu';
type Props = {};
type RestaurantMenuType = {
  
    restaurant_id:String;
    menu_id:String;
    cusine:String;
    name:String;
    price:String;
    desc:String
  

}
const RestaurantMenuList = (props: Props) => {
  const params = useParams();
  console.log(params.id)
  const [restaurantmenu, setRestaurantmenu] = useState<RestaurantMenuType[]>([]);

  const sendGetRequest = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/fetchRestaurantMenu/${params.id}`
      );
      setRestaurantmenu(response.data);
      console.log(response);
      console.log(restaurantmenu)
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {

    sendGetRequest();
    
     }, []);
  return (
    <div>
      {restaurantmenu.map((r) => (
        <RestaurantMenu restaurantmenu={{
    restaurant_id: r.restaurant_id,
    menu_id:r.menu_id,
    cusine:r.cusine,
    name:r.name,
    price:r.price,
    desc:r.desc
  }}/>
      ))}

    </div>
  )
}

export default RestaurantMenuList