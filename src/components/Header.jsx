import React, { useState, useContext, useEffect } from "react";
import { Button } from "@mui/material";
import { itemList } from "../constants";
import { Link } from "react-router-dom";

// importing the component
import userContext from "../util/userContext";
import { useSelector } from "react-redux";

export default Header = () => {
  const [buttonName, setButtonName] = useState("Login")
  const userName = useContext(userContext);
  const addData = useSelector((state) => state.cart);

  return (
    <div className="flex justify-between">
      <img className="w-20 p-1 m-1" src="https://spng.pngfind.com/pngs/s/5-58602_food-and-neverage-png-food-and-beverage-icon.png" />
      <div className="flex p-4">
        <ul className="flex">
          {itemList.nav_itme.map((data, index) => {
            return data.name === 'Cart' ? <li className="p-[10px] m-[10px]" key={index}><Link to={data.to}>{addData.items.length > 0 ? `${data.name}${" " +addData.items.length}` : data.name}</Link></li> :
              <li className="p-[10px] m-[10px]" key={index}><Link to={data.to}>{data.name}</Link></li>;

          })}
        </ul>
        <Button variant="contained" onClick={() => buttonName === 'Login' ? setButtonName('Logout') : setButtonName('Login')}>{buttonName}</Button>
        <lable> User Name {userName.name}</lable>
      </div>
    </div>
  );
};

