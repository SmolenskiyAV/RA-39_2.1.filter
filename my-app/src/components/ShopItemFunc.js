/* eslint-disable array-callback-return */
import React, { useState } from "react";
// import PropTypes from "prop-types";
// import UserModel from "../models/UserModel";

export default function ShopItemFunc(props) {
  const { itemArray } = props;
  const { onSelected } = props;
  
  let filteredArray;
  
    if (onSelected !== "All") {
      filteredArray = itemArray.filter((o) => o.category === onSelected);
    } else filteredArray = itemArray;

    
    console.log("filter length =", filteredArray.length); // КОНТРОЛЬНАЯ ТОЧКА (длина результирующего отфильтрованного массива)
    console.log("===========================================================");

   

  function putItems(itemArray, index) { // функция отрисовки элемента
    return (
      <img key={index} src={itemArray.img} alt={itemArray.category} />
    )
  };
  
  return ( // отрисовка всего отфтльтрованного массива элементов
    <div className="filterDiv">
      {filteredArray.map((itemArray, index) => putItems(itemArray, index))}
    </div>
  );
}
/*
ShopItemFunc.propTypes = {
  item: PropTypes.instanceOf(UserModel).isRequired
}*/
