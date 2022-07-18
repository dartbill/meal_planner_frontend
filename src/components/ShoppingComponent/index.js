import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";



const ShoppingComponent = ({shoppingList}) => {


    return (
        <>
        <h1>Shopping list component</h1>
        {shoppingList.aisles.map(aisle => {
            return (
                <>
                <h2>{aisle.aisle}</h2>
                <div>
                    <ul>
                    {aisle.items.map(aisleItem => {
                        return (
                            <>
                                <li>{aisleItem.name}</li>
                                <li>{aisleItem.measures.metric.amount}</li>
                                <li>{aisleItem.measures.metric.unit}</li>
                                <li>{aisleItem.measures.us.amount}</li>
                                <li>{aisleItem.measures.us.unit}</li>
                                <li>{aisleItem.cost}</li>
                            </>
                            
                        
                        )})}</ul>
                </div>
                </>
            )})}
        <p>Predicted cost: {shoppingList.cost}</p>
        </>
    )

};

export default ShoppingComponent;