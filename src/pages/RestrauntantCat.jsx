import React, { useState } from 'react'
import ItemList from "../components/ItemList";
import { Icon } from "@mui/material";

export const RestrauntantCat = (props) => {
    const { data, showAccordian ,setShowAccordian } = props

    const handleClicked = () => {
        setShowAccordian();
    }

    return (
        <div className="flex flex-col m-auto mb-2 rounded-sm">
            <div className="bg-gray-200 cursor-pointer" onClick={handleClicked}>
                <h1 className="font-bold mx-2"><span>
                    {data?.title}({data?.title?.length})
                </span></h1>
                <Icon material-icons="KeyboardArrowDownIcon" />
            </div>
            {showAccordian && <ItemList classNeme="bg-gray-300" data={data}></ItemList>}
        </div>
    )
}
