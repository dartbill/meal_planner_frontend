import React, { useState } from "react";
import { ShoppingComponent } from "../../components";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import backArrow from '../../images/backArrow.png'

const ShoppingList = () => {
    const navigate = useNavigate();
    
    const stateShoppingList = useSelector(state => state.shopping_list)
    // console.log(stateShoppingList)
    //TODO: send shopping list to email
    return (
        <>
        <div className="backButton" onClick={()=> navigate(-1)}><img src={backArrow} alt="back button"/><p>Back</p></div>
        <h1>ShoppingList</h1>
        {stateShoppingList.length === 0 && (
            <p>You have not got a shopping list, generate a meal plan <span onClick={() => navigate('/mealplan')}>here</span> first</p>
        )}
        {stateShoppingList.length !== 0 && (
            <ShoppingComponent shoppingList={stateShoppingList}/>
        )}
        </>
    )

};

export default ShoppingList;