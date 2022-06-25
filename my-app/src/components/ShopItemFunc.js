/* eslint-disable array-callback-return */
import React from "react";
// import PropTypes from "prop-types";
// import UserModel from "../models/UserModel";

export default function ShopItemFunc(props) {
  const { itemArray } = props;
  // const testSrc = 'img/200.jpg';
  function putItems(itemArray, index) {
    return (
      <img key={index} src={itemArray.img} alt={itemArray.category} />
    )
  };

  return (
    <div className="filterDiv cars">
      {itemArray.map((itemArray, index) => putItems(itemArray, index))}
    </div>
  );
}
/*
ShopItemFunc.propTypes = {
  item: PropTypes.instanceOf(UserModel).isRequired
}*/
