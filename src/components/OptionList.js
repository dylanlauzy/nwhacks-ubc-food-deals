import React, { useState } from "react";
import Option from "./Option";
import fill from "./images/fill.png";
import "./Option.css";
import { type } from "@testing-library/user-event/dist/type";

const typeEnum = {
  default: "",
  healthy: "Healthy",
  quickMeal: "Quick Meal",
  drink: "Drink",
};

const OptionList = () => {
  //TODO: use typeEnum in state to trigger rerender when filtering
  const [options, setOptions] = useState([
    {
      picPath: fill,
      name: "Uncle Fatih's",
      deal: "2 for 1 medium pizza",
      expDate: "Exp. Nov 22, 2022",
      foodType: typeEnum.quickMeal,
      id: 1,
    },
    {
      picPath: fill,
      name: "Nori",
      deal: "20% Niku Tama",
      expDate: "Exp. Dec 1, 2022",
      foodType: typeEnum.quickMeal,
      id: 2,
    },
    {
      picPath: fill,
      name: "Subway",
      deal: "10% off any footlong",
      expDate: "Exp. January 1, 2022",
      foodType: typeEnum.healthy,
      id: 3,
    },
    {
      picPath: fill,
      name: "Body Energy Club",
      deal: "Buy 1 Smoothie get 1 free",
      expDate: "Exp. Nov 30, 2022",
      foodType: typeEnum.drink,
      id: 4,
    },
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
  } else {
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

  function onQuickMealClick(e) {
    e.preventDefault();
    setFilter(typeEnum.quickMeal);
  }

  function onDrinksClick(e) {
    e.preventDefault();
    setFilter(typeEnum.drink);
  }

  return (
    <div>
      <div className="buttonsGroup">
        <button
          className="rounded-2xl py-3 px-5 text-[18px] bg-secondaryBeige buttton"
          onClick={onAllClick}
        >
          All Deals
        </button>
        <button
          className="rounded-2xl py-3 px-5 text-[18px] bg-secondaryBeige buttton"
          onClick={onHealthyClick}
        >
          Healthy
        </button>
        <button
          className="rounded-2xl py-3 px-5 text-[18px] bg-secondaryBeige buttton"
          onClick={onQuickMealClick}
        >
          Quick Meal
        </button>
        <button
          className="rounded-2xl py-3 px-5 text-[18px] bg-secondaryBeige buttton"
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
