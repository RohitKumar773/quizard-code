import React from "react";
import { useParams } from "react-router-dom";

function User(){

    const {userid} = useParams()

    return(
        <>
        <h1 className="text-center p-52 text-3xl bg-blue-600 text-white">User : {userid}</h1>
        </>
    )
}

export default User