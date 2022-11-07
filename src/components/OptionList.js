import React, { useState } from "react";
import Option from "./Option";
import fill from "./images/fill.png";
import subway from "./images/subway.png"
import nori from "./images/nori.png"
import bodyclub from "./images/bodyclub.jpeg"
import unclefatih from "./images/unclefatih.jpeg"
import mcd from "./images/mcd.png"
import chatime1 from "./images/chatime1.jpeg"
import freshii from "./images/freshii.png"
import kok from "./images/kok.png"
import "./Option.css";
import { type } from "@testing-library/user-event/dist/type";

const typeEnum = {
  default: "",
  healthy: "Healthy",
  quickMeal: "Quick Meal",
  drink: "Drink",
  vegan: "Vegan"
};

const OptionList = () => {
  //TODO: use typeEnum in state to trigger rerender when filtering
  const [options, setOptions] = useState([
    {
      picPath: unclefatih,
      name: "Uncle Fatih's",
      deal: "Buy 1 medium pizza get 1 for free.",
      expDate: "Exp. Nov 22, 2022",
      foodType: typeEnum.quickMeal,
      id: 1,
    },
    {
      picPath: nori,
      name: "Nori",
      deal: "20% off Niku Tama with Student Card",
      expDate: "Exp. Dec 1, 2022",
      foodType: typeEnum.quickMeal,
      id: 2,
    },
    {
      picPath: subway,
      name: "Subway",
      deal: "10% off any footlong with drink purchase",
      expDate: "Exp. January 1, 2022",
      foodType: typeEnum.healthy,
      id: 3,
    },
    {
      picPath: bodyclub,
      name: "Body Energy Club",
      deal: "Buy 1 Smoothie get 1 for 50% off",
      expDate: "Exp. Nov 30, 2022",
      foodType: typeEnum.drink,
      id: 4,
    },
    {
      picPath: mcd,
      name: "McDonald's",
      deal: "App coupons available (includes 4.99 Bic Macs)",
      expDate: "Exp. December 1, 2022",
      foodType: typeEnum.quickMeal,
      id: 5       
    },
    {
      picPath: chatime1,
      name: "Chatime",
      deal: "Buy 2 drinks get the 3rd one free",
      expDate: "Exp. December 1, 2022",
      foodType: typeEnum.drink,
      id: 6  
    }, 
    {
      picPath: freshii,
      name: "Freshii",
      deal: "Buy one get one Kung Fu Bowl",
      expDate: "Exp. January 1, 2022",
      foodType: typeEnum.vegan,
      id: 7  
    },
    {
      picPath: kok,
      name: "Kokoro",
      deal: "Free Iced Milk Tea for takout orders over 50$",
      expDate: "Exp. January 1, 2022",
      foodType: typeEnum.vegan,
      id: 8 
    }
  ]);

  const [filter, setFilter] = useState("");

  //if statement to build filtered array or default
  let cards = options.map((option) => (
    <Option
      picPath={option.picPath}
      name={option.name}
      deal={option.deal}
      expDate={option.expDate}
      foodType={option.foodType}
      key={option.id}
    />
  ));

  if (filter === typeEnum.drink) {
    const filteredOptions = options.filter(
      (option) => option.foodType === filter
    );
    cards = filteredOptions.map((option) => (
      <Option
        picPath={option.picPath}
        name={option.name}
        deal={option.deal}
        expDate={option.expDate}
        foodType={option.foodType}
        key={option.id}
      />
    ));
  } else if (filter === typeEnum.healthy) {
    const filteredOptions = options.filter(
      (option) => option.foodType === filter
    );
    cards = filteredOptions.map((option) => (
      <Option
        picPath={option.picPath}
        name={option.name}
        deal={option.deal}
        expDate={option.expDate}
        foodType={option.foodType}
        key={option.id}
      />
    ));
  } else if (filter === typeEnum.quickMeal) {
    const filteredOptions = options.filter(
      (option) => option.foodType === filter
    );
    cards = filteredOptions.map((option) => (
      <Option
        picPath={option.picPath}
        name={option.name}
        deal={option.deal}
        expDate={option.expDate}
        foodType={option.foodType}
        key={option.id}
      />
    ));
  } else if (filter === typeEnum.vegan) {
    const filteredOptions = options.filter(
        (option) => option.foodType === filter
    );
    cards = filteredOptions.map((option) => (
        <Option
          picPath={option.picPath}
          name={option.name}
          deal={option.deal}
          expDate={option.expDate}
          foodType={option.foodType}
          key={option.id}
        />
      ));
  }
  else {
    cards = options.map((option) => (
      <Option
        picPath={option.picPath}
        name={option.name}
        deal={option.deal}
        expDate={option.expDate}
        foodType={option.foodType}
        key={option.id}
      />
    ));
  }

  function onAllClick(e) {
    e.preventDefault();
    setFilter("");
  }

  function onHealthyClick(e) {
    e.preventDefault();
    setFilter(typeEnum.healthy);
  }

  function onVeganClick(e) {
    e.preventDefault();
    setFilter(typeEnum.vegan)
  }

  function onQuickMealClick(e) {
    e.preventDefault();
    setFilter(typeEnum.quickMeal);
  }

  function onDrinksClick(e) {
    e.preventDefault();
    setFilter(typeEnum.drink);
  }

  return (
    <div id="deals">
      <div className="buttonsGroup">
        <button
          className="hover:bg-primaryDarkGreen hover:text-background transition-colors transition-ease-in rounded-2xl py-3 px-5 text-[18px] bg-secondaryBeige buttton"
          onClick={onAllClick}
        >
          All Deals
        </button>
        <button
          className="hover:bg-primaryDarkGreen hover:text-background transition-colors transition-ease-in rounded-2xl py-3 px-5 text-[18px] bg-secondaryBeige buttton"
          onClick={onHealthyClick}
        >
          Healthy
        </button>
        <button
          className="hover:bg-primaryDarkGreen hover:text-background transition-colors transition-ease-in rounded-2xl py-3 px-5 text-[18px] bg-secondaryBeige buttton"
          onClick={onVeganClick}
        >
          Vegan
        </button>
        <button
          className="rounded-2xl py-3 px-5 text-[18px] bg-secondaryBeige buttton"
          onClick={onQuickMealClick}
        >
          Quick Meal
        </button>
        <button
          className="hover:bg-primaryDarkGreen hover:text-background transition-colors transition-ease-in rounded-2xl py-3 px-5 text-[18px] bg-secondaryBeige buttton"
          onClick={onDrinksClick}
        >
          Drinks
        </button>
      </div>
      <div className="ui link cards format">{cards}</div>
    </div>
  );
};

export default OptionList;

// picture, restaurant name, deal, expiry date, type, id
