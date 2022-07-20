import React, { useState } from "react";
import { ShoppingComponent } from "../../components";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import axios from 'axios'

import backArrow from '../../images/backArrow.png'

const ShoppingList = () => {
    const navigate = useNavigate();
    
    const stateShoppingList = useSelector(state => state.shopping_list)
    // console.log()
    //TODO: send shopping list to email

    // const emailShopping = async (e) => {
    //     e.preventDefault()
    //     const message = {message: "hi there Bille!", html: `<style>h1 {color:pink}</style><h1>Test from FE</h1>`}
    //     const { data } = await axios.post(`https://mealplannerserver.herokuapp.com/email/`, JSON.stringify(message))
    //     console.log(data)
    // }


    return (
        <>
        <div className="backButton"  data-testid="back" onClick={()=> navigate(-1)}><img src={backArrow} alt="back button"/><p>Back</p></div>
        <h1>ShoppingList</h1>
        {stateShoppingList.length === 0 && (
            <p data-testid="custom-element">You have not got a shopping list, generate a meal plan <span data-testid="mealnav"  onClick={() => navigate('/mealplan')}>here</span> first</p>
        )}
        {stateShoppingList.length !== 0 && (
            <>
            <ShoppingComponent shoppingList={stateShoppingList}/>
            </>
        )}
            {/* <div className="shoppingListButton">
                <button className="emailShoppingList" onClick={emailShopping}>Email me my shopping list</button>
            </div> */}
        </>
    )

};

export default ShoppingList;
