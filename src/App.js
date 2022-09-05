import React, { useState } from "react";
import "./App.css";
import MainPage from './pages/MainPageList/MainPageList';


export default function App() {
  const users  = [
    { 
      one: "Самый первый твит, вырезанные сцены из «Криминального чтива», песня Илона Маска и, конечно же, мемы — все они существуют в формате NFT и стоят огромных денег. Что это такое, можно ли создать свой токен и как на этом заработать — читайте в статье. ",
    },
    {
      two: "Халва знает, как заставить цвести ваше «денежное дерево» в любых условиях: покупать в беспроцентную рассрочку товары в 250 000 магазинах-партнерах на сумму до 500 000 рублей, получать кешбэк до 10% и приумножать сбережения в удобной онлайн-копилке до 7,5% годовых. Оформите карту и получите «золотой ключик» финансового благополучия!",
    }
  ]



  const [darkMode, setDarkMode] = useState(false);
  return (

    
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div className="container">
        <span style={{ color: darkMode ? "white" : "grey" }}>white</span>
        <div className="switch-checkbox">
          <label className="switch">
            <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
            <span className="slider round"></span>
          </label>
        </div>
        <span style={{ color: darkMode ? "white" : "black" }}>black</span>
      </div>
      <div>
          <MainPage users={users}/>
      </div>
    </div>
  );
}
