import React, {useState} from "react";
import Option from './Option'
import fill from "./images/fill.png";

const typeEnum = {
    default: "",
    healthy: "Healthy",
    quickMeal: "Quick Meal",
    drink: "Drink"
}

const OptionList = () => {
    //TODO: use typeEnum in state to trigger rerender when filtering
    const [ options, setOptions ] = useState({
        picPath: "./images/fill.png",
        name: "Uncle Fatih's",
        deal: "2 for 1 medium pizza",
        expDate: "Exp. Nov 22, 2022",
        foodType: typeEnum.quickMeal,
        id: 1
    }, {
        picPath: "./images/fill.png",
        name: "Nori",
        deal: "Free Bottled Drink with Purchase",
        expDate: "Exp. Dec 1, 2022",
        foodType: typeEnum.quickMeal,
        id: 2
    }, {
        picPath: "./images/fill.png",
        name: "Subway",
        deal: "10% off any footlong",
        expDate: "Exp. January 1, 2022",
        foodType: typeEnum.healthy,
        id: 3
    }, {
        picPath: "./images/fill.png",
        name: "Body Energy Club",
        deal: "Buy 1 Smoothie get 1 free",
        expDate: "Exp. Nov 30, 2022",
        foodType: typeEnum.drink,
        id: 4
    })



    return (
    
      <div className="ui link cards">
        <Option 
            picPath={fill} 
            name="Subway" 
            deal="10% off any footlong" 
            expDate="Exp. January 1, 2022"
            foodType={typeEnum.healthy}
            id={3}/>  
      </div>
    );
};

export default OptionList;

// picture, restaurant name, deal, expiry date, type, id