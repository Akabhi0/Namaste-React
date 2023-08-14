import React, { useEffect, useState, useContext } from "react";
import { Button, Input, CircularProgress } from "@mui/material";
import { LoadingButton } from "@mui/lab";

// import RestorantCard from "./RestorantCard";
import { withPromtedLabel, RestorantCard } from "./RestorantCard";
import { fitlerList, searchList } from "../util/sharedFunction";
import userContext from "../util/userContext";
// Higher Order Function
const RestorantCardHigherCard = withPromtedLabel(RestorantCard);

export default Body = () => {
  const [cardList, setCardList] = useState([]);
  const [filterRestronant, setFilterRestronant] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const { name, setUserName } = useContext(userContext);
  
  useEffect(() => {
    fetchResData();
  }, []);

  const fetchResData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.93&lng=77.62&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    //optional chaining (?)
    setCardList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRestronant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-center">
        <Input
          placeholder="Search"
          defaultValue={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <Button
          variant="contained"
          onClick={() => {
            setFilterRestronant(searchList(cardList, searchValue));
          }}
        >
          Find
        </Button>
        <Button
          variant="contained"
          style={{ marginLeft: "1rem" }}
          onClick={() => {
            setFilterRestronant(fitlerList(cardList));
          }}
        >
          Filter
        </Button>

        <input
          className="border border-black ml-1 p-1"
          placeholder="enter value"
          value={name}
          onChange={(e) => {
            setUserName({ name: e.target.value })
          }} />

      </div>
      <LoadingButton
        loading={cardList?.length <= 0 ? true : false}
        loadingIndicator={<CircularProgress color="inherit" size={36} />}
      ></LoadingButton>
      <div className="flex flex-row flex-wrap justify-center">
        {filterRestronant?.map((data, index) => {
          return data.info.veg === true ? (
            <RestorantCardHigherCard key={index} resCardData={data?.info} />
          ) : (
            <RestorantCard key={index} resCardData={data?.info} />
          );
        })}
      </div>
    </div>
  );
};
