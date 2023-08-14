import React from "react";
import { Rating } from "@mui/material";

// import "./restorantcard.css";
import { Link } from "react-router-dom";

/**
 * Image
 * Name of Res,Start Rating,Cusine,Delivery Time
 * @returns
 */
export function RestorantCard(props) {
  const { id, cloudinaryImageId, name, cuisines, avgRating, deliveryTime } = props?.resCardData || {};
  return (
    <>
      <div className="m-1 p-4 bg-gray-100 hover:bg-gray-200 rounded-md">
        <Link to={`/restrauntant/${id}`} className="">
          <img className="w-56 h-56 rounded-md"
            src={
              `https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/` +
              cloudinaryImageId
            }
          ></img>
          <div className="w-56">
            <label className="text-lg mb-4">{name}</label>
            <br />
            <label style={{ overflowWrap: 'anywhere' }}>{cuisines?.join(",")}</label>
            <div className="res-item">
              <Rating name="read-only" value={avgRating} />
              <label>Delivery Time: {deliveryTime}</label>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export function withPromtedLabel() {
  return (props) => {
    return (<div>
      <label className="absolute bg-black text-white p-2 m-2 rounded-md">Veg</label>
      <RestorantCard {...props}></RestorantCard>
    </div>)
  }
}
