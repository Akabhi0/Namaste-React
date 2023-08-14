import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CircularProgress, Icon } from "@mui/material";
import { LoadingButton } from "@mui/lab";

import { LOGO_URL } from "../constants";
import { RestrauntantCat } from "./RestrauntantCat";

export const Restrauntant = () => {
  const { resID } = useParams();
  const [resInfo, setResInfo] = useState([]);
  const [showAccordian, setShowAccordian] = useState(null);

  const resAPIData = async () => {
    const resData = await fetch(LOGO_URL + resID);
    const jsonData = await resData.json();
    setResInfo(
      jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    );
  };

  useEffect(() => {
    resAPIData();
  }, []);

  return (
    <>
      <LoadingButton
        loading={resInfo?.length <= 0 ? true : false}
        loadingIndicator={<CircularProgress color="inherit" size={36} />}
      ></LoadingButton>
      {resInfo
        ?.filter(
          (data) => data?.card?.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        )
        .map((e, index) => {
          return (
            <div key={index} className="flex flex-col m-auto mb-2 rounded-sm">
              <RestrauntantCat
                data={e.card?.card}
                showAccordian={index === showAccordian ? true : false}
                setShowAccordian={() => { setShowAccordian(index) }}>
              </RestrauntantCat>
            </div>
          );
        })}
    </>
  );
};
