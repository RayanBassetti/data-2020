import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";

export const ReactLoader = ({loading}) => {
    return (
        <div className="sweet-loading">
            <ClipLoader
            size={150}
            //size={"150px"} this also works
            color={"#00AAFF"}
            loading={loading}
            />
        </div>
    )
}