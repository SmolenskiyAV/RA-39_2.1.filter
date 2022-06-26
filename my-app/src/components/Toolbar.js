import React, { useState } from "react";
import ShopItemFunc from "./ShopItemFunc";

let valueSelected = 'All'; // днфолтное значение фильтра при первоначальной загрузке страницы
let btnSelected; // объект выбранной кнопки фильтра

document.addEventListener('DOMContentLoaded', () => {
    if ((btnSelected === undefined)) btnSelected = document.getElementById('myBtnContainer').querySelector('.active'); // объект выбранной кнопки изначально это кнопка "All"
  }
);

export default function Toolbar(props) { // компонент кнопок фильтра
  const { itemsArray } = props;

  const [selected, setSelected] = useState('All');
  const [pushed, setPushed] = useState(btnSelected);
  
  const handlePush = evt => { // ОБРАБОТЛА НАЖАТИЯ КНОПОК ФИЛЬТРА

    btnSelected.classList.remove('active');
    
    setPushed((prevPushed) => { // обновление состояния нажатой кнопки фильтра (РАБОЧИЙ КОД)
      prevPushed = evt.target;
      valueSelected = prevPushed.dataset.selected; // получаем текущее значение фильтра по нажатой кнопке
      btnSelected = prevPushed;
    });

    btnSelected.classList.add('active');
    console.log('valueSelected = ', valueSelected); // КОНТРОЛЬНАЯ ТОЧКА (выбранное значение фильтра)
  };
  
  const handleSelected = valueSelected => { 
    let result;

    setSelected((prevSelected) => { // обновление состояния выбранного фильтра (НЕ РАБОТАЮЩИЙ КОД!) ...???...
      prevSelected = valueSelected;
      result = prevSelected;
    });

    return result; // попытка вывести значение выбранного фильтра valueSelected.
  }

  console.log('handleSelected() return: ', handleSelected()); // но функция handleSelected выдаёт  "undefined" (ПОЧЕМУ?)  и в результате в компонент ShopItemFunc ничего не передаётся. 

  return (
    // Control buttons
    <>
      <div id="myBtnContainer" className="myBtnContainer">
        <button className="btn active" onClick={handlePush} data-selected='All'> All</button>
        <button className="btn " onClick={handlePush} data-selected='Websites'> Websites</button>
        <button className="btn " onClick={handlePush} data-selected='Flayers'> Flayers</button>
        <button className="btn " onClick={handlePush} data-selected='Business Cards'> Business Cards</button>
      </div><div className="container">
        <ShopItemFunc itemArray={itemsArray} onSelected={handleSelected} />
      </div></>
      // попытка передать значение выбранного фильтра в дочерний компонент в стр.54 НЕУДАЧНА.. :/ Почему???
  );
}