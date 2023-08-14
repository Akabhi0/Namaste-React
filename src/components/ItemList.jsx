import { Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../util/cartSlice";

export default ItemList = (props) => {
  const { data } = props;
  const dispatch = useDispatch();

  /**
   * Storing the value into redux 
   * @param {string} name 
   * @param {string} price 
   * @param {string} description 
   */
  const onHnadleStore = (id, name, price, description) => {
    dispatch(
      addItem({
        id: id,
        name: name,
        price: price,
        description: description,
      })
    );
  };


  return (
    <div className="p-3 bg-gray-100">
      {data?.itemCards?.map((e, index) => {
        const id = e?.card?.info?.id;
        const name = e?.card?.info?.name;
        const price = e?.card?.info?.price / 100;
        const description = e?.card?.info?.description;

        return (
          <div
            key={index}
            className="flex flex-col border-b-2 border-gray-500 mb-2 max-w-xl"
          >
            <h3 className="font-bold">{name}</h3>
            <h4 className="font-bold">Rs. {price}</h4>
            <h6 className="flex">{description}</h6>
            <Button
              variant="contained"
              style={{ margin: "1rem" }}
              onClick={() => onHnadleStore(id, name, price, description)}
            >
              Add
            </Button>
          </div>
        );
      })}
    </div>
  );
};
