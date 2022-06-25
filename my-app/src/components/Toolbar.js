import React, { useState } from "react";
import ShopItemFunc from "./ShopItemFunc";

let valueSelected;
let btnSelected; // объект выбранной кнопки фильтра

document.addEventListener('DOMContentLoaded', () => {
  if ((btnSelected === undefined)) btnSelected = document.getElementById('myBtnContainer').querySelector('.active'); // объект выбранной кнопки изначально это кнопка "All"
    console.log('initial btn', btnSelected);
  }
);

export default function Toolbar(props) { // компонент кнопок фильтра
  const { itemsArray } = props;

  const [selected, setSelected] = useState(btnSelected);
  
  const handleSelect = evt => {

    btnSelected.classList.remove('active');
    
    setSelected((prevSelected) => {
      prevSelected = evt.target;
      valueSelected = prevSelected.dataset.selected;
      btnSelected = prevSelected;
    });

    btnSelected.classList.add('active');
};

  return (
    // Control buttons
    <>
      <div id="myBtnContainer" className="myBtnContainer">
        <button className="btn active" onClick={handleSelect} data-selected='all'> All</button>
        <button className="btn " onClick={handleSelect} data-selected='websites'> Websites</button>
        <button className="btn " onClick={handleSelect} data-selected='flayers'> Flayers</button>
        <button className="btn " onClick={handleSelect} data-selected='business_cards'> Business Cards</button>
      </div><div className="container">
        <ShopItemFunc itemArray={itemsArray} />
      </div></>
  );
}