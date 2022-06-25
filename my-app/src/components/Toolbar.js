import React from "react";

export default function Toolbar(props) {
  // const { item } = props;

  const [selected, setSelected] = useState('all');
  const handleSelect = evt => {
    setSelected(selected => selected + 1);
    
};

  return (
    // Control buttons
<div id="myBtnContainer">
  <button className="btn active" onClick="filterSelection('all')"> All</button>
  <button className="btn" onClick="filterSelection('websites')"> Websites</button>
  <button className="btn" onClick="filterSelection('flayers')"> Flayers</button>
  <button className="btn" onclick="filterSelection('business_cards')"> Business Cards</button>
</div>
  );
}