import React, { useState } from "react";
import ShopItemFunc from "./ShopItemFunc";

let valueSelected; // дуфолтное значение фильтра при первоначальной загрузке страницы
let btnSelected; // объект выбранной кнопки фильтра

document.addEventListener('DOMContentLoaded', () => {
    if ((btnSelected === undefined)) btnSelected = document.getElementById('myBtnContainer').querySelector('.active'); // объект выбранной кнопки изначально это кнопка "All"
  }
);

export default function Toolbar(props) { // компонент кнопок фильтра
  const { itemsArray } = props;

  const [selected, setSelected] = useState('All');
    
  const handlePush = evt => { // ОБРАБОТКА НАЖАТИЯ КНОПОК ФИЛЬТРА

    btnSelected.classList.remove('active');
        
    valueSelected = evt.target.dataset.selected; // получаем текущее значение фильтра по нажатой кнопке
    btnSelected = evt.target;
       
    console.log('valueSelected = ', valueSelected); // КОНТРОЛЬНАЯ ТОЧКА (выбранное значение фильтра)
    setSelected(prevSelected => valueSelected);
    
    btnSelected.classList.add('active');
  };
  
  return (
    // Control buttons
    <>
      <div id="myBtnContainer" className="myBtnContainer">
        <button className="btn active" onClick={handlePush} data-selected='All'> All</button>
        <button className="btn " onClick={handlePush} data-selected='Websites'> Websites</button>
        <button className="btn " onClick={handlePush} data-selected='Flayers'> Flayers</button>
        <button className="btn " onClick={handlePush} data-selected='Business Cards'> Business Cards</button>
      </div><div className="container">
        <ShopItemFunc itemArray={itemsArray} onSelected={selected} />
      </div></>
  );
}