import React from "react";
// import PropTypes from "prop-types";
// import UserModel from "../models/UserModel";

export default function ShopItemFunc(props) {
  const { itemArray } = props;

  return (
    <div class="filterDiv cars">
      <img src={itemArray.img} alt={itemArray.category} />
    </div>
  );
}
/*
ShopItemFunc.propTypes = {
  item: PropTypes.instanceOf(UserModel).isRequired
}*/
