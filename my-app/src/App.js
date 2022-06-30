/* eslint-disable react/style-prop-object */
import "./css/main.css";
import Toolbar from "./components/Toolbar";

function App() {
  const itemsArray = [
    {
      img: "/img/mon.jpg",
      category: "Business Cards",
    },
    {
      img: "/img/200.jpg",
      category: "Websites",
    },
    {
      img: "/img/emi_haze.jpg",
      category: "Websites",
    },
    {
      img: "/img/codystretch.jpg",
      category: "Websites",
    },
    {
      img: "/img/Triangle_003.jpg",
      category: "Business Cards",
    },
    {
      img: "/img/place200x290.png",
      category: "Websites",
    },
    {
      img: "/img/200.jpg",
      category: "Websites",
    },
    {
      img: "/img/transmission.jpg",
      category: "Business Cards",
    },
    {
      img: "/img/place200x290_1.png",
      category: "Websites",
    },
    {
      img: "/img/place200x290_2.png",
      category: "Flayers",
    },
    {
      img: "/img/the_ninetys_brand.jpg",
      category: "Websites",
    },
    {
      img: "/img/dia.jpg",
      category: "Business Cards",
    },
    {
      img: "/img/Triangle_350x197.jpg",
      category: "Websites",
    },
    {
      img: "/img/emi_haze.jpg",
      category: "Websites",
    },
    {
      img: "/img/transmission.jpg",
      category: "Business Cards",
    },
    {
      img: "/img/Triangle_350x197_1.jpg",
      category: "Websites",
    },
    {
      img: "/img/place200x290_3.png",
      category: "Flayers",
    },
  ];

  return ( 
    <div className="main">
      <Toolbar itemsArray={itemsArray} />
    </div>
  );
}

export default App;
