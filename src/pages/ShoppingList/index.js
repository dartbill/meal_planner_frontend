import React, { useState } from "react";
import { ShoppingComponent } from "../../components";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

const ShoppingList = () => {
    // const dbJSON = [{'calories_limit': 3, 'intolorences': ['1', '2'], 'budget': 2},{'calories_limit': "{'breakfast': 2, 'lunch': 2, 'dinner': 2, 'snack': 2, 'dessert': 2}", 'intolorences': ['dairy', 'egg'], 'budget': "{'breakfast': 2, 'lunch': 2, 'dinner': 2, 'snack': 2, 'dessert': 2}"}]
    // console.log(dbJSON[1].calories_limit)
    // const string = dbJSON[1].calories_limit
    // console.log(JSON.stringify(string))
    // const formattedString = string.replaceAll(`'`, `"`)
    // console.log(formattedString)
    // console.log(JSON.parse(formattedString))
    // const object = JSON.parse(formattedString)
    // console.log(object.breakfast)
    const stateShoppingList = useSelector(state => state.shopping_list)
    console.log(stateShoppingList)
    const navigate = useNavigate();
    

    return (
        <>
        <h1>ShoppingList</h1>
        {stateShoppingList.length === 0 && (
            <p>You have not shopping list, generate a meal plan <span onClick={() => navigate('/mealplan')}>here</span> first</p>
        )}
        {stateShoppingList.length !== 0 && (
            <ShoppingComponent shoppingList={stateShoppingList}/>
        )}
        
        </>
    )

};

export default ShoppingList;