import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Recipe = () => {
const navigate = useNavigate();





    return (
        <>
            <h1>Recipe</h1>
            <div onClick={()=> navigate(-1)}>Go back</div>
        </>
    )

};

export default Recipe;
