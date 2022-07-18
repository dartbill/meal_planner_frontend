import React, { useState } from "react";
import { ShoppingComponent } from "../../components";
import { useSelector, useDispatch } from 'react-redux';
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

    

    return (
        <>
        <h1>ShoppingList</h1>
        <ShoppingComponent shoppingList={stateShoppingList}/>
        </>
    )

};

export default ShoppingList;