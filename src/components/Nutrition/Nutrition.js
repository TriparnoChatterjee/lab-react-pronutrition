import {useState } from "react";

import Tracker from "../Layout/Tracker";
import FoodBox from "../UI/FoodBox";
import classes from "./Nutrition.module.css";
const Nutrition = (props) => {
   
  const DUMMY_MEALS = [
    {
      id: "1",
      Name: "Pizza",
      Calorie: 266,
      img: "https://www.simplyrecipes.com/thmb/8caxM88NgxZjz-T2aeRW3xjhzBg=/2000x1125/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-8f256746d649404baa36a44d271329bc.jpg",
    },
    {
      id: "2",
      Name: "Burger",
      Calorie: 500,
      img: "https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/5:4/w_3129,h_2503,c_limit/Smashburger-recipe-120219.jpg",
    },
    {
      id: "3",
      Name: "Samosa",
      Calorie: 900,
      img: "https://milkandcardamom.com/wp-content/uploads/2020/05/Samosa.jpg",
    },
    {
      id: "4",
      Name: "Idli",
      Calorie: 800,
      img: "https://www.vegrecipesofindia.com/wp-content/uploads/2021/06/idli-recipe-4-500x500.jpg",
    },
    {
      id: "5",
      Name: "Fish BBQ",
      Calorie: 109,
      img: "https://kfoods.com/images1/newrecipeicon/barbecue-fish_5173.jpg",
    },
    {
      id: "6",
      Name: "Omlette",
      Calorie: 188,
      img: "https://i2.wp.com/mygorgeousrecipes.com/wp-content/uploads/2018/02/Worlds-Best-Vegetarian-Omelette-Quick-and-Easy.jpg",
    },
    {
      id: "7",
      Name: "Spinach",
      Calorie: 100,
      img: "https://kfoods.com/images1/newrecipeicon/barbecue-fish_5173.jpg",
    },
    {
      id: "8",
      Name: "Apple",
      Calorie: 52,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3yN4MudiMN6L2urIHJ3CLrK7CndNqbN98J7S_1ab3Px42SWzYJ-KEL_8ktMw9UMWHTUE&usqp=CAU",
    },
    {
      id: "9",
      Name: "Puttu",
      Calorie: 305,
      img: "https://www.vegrecipesofindia.com/wp-content/uploads/2017/11/puttu-recipe-1a-500x500.jpg",
    },
    {
      id: "10",
      Name: "Cheesecake",
      Calorie: 205,
      img: "https://sugarspunrun.com/wp-content/uploads/2019/01/Best-Cheesecake-Recipe-2-1-of-1-4.jpg",
    },
    {
      id: "11",
      Name: "Rice",
      Calorie: 130,
      img: "https://www.simplyrecipes.com/thmb/j_IZxLEP2tJjonCl3s7RiGnMuxo=/2000x1331/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2020__02__HTC-White-Rice-Lead-4-e5743ee4c63a40a0aec2f3abd9f1c097.jpg",
    },
  ];
  const [currentMeals, getMeals] = useState(DUMMY_MEALS);
  const searchMeals = (event) => {
    if (event.target.value === "") {
      getMeals(DUMMY_MEALS);
    }
    const updatedMeals = DUMMY_MEALS.filter((meal) => {
      return meal.Name.includes(event.target.value);
    });
    getMeals(updatedMeals);
    console.log(event.target.value);
  };
  const mealsList = currentMeals.map((meal) => {
    return (
      <FoodBox
        id={meal.id}
        key={meal.id}
        img={meal.img}
        name={meal.Name}
        cal={meal.Calorie}
      ></FoodBox>
    );
  });


  return (
    <div className={classes['nutrition']}>
    <div className={classes['nutrition-container']}>
      <div className={classes['nutrition-search-meals']}>
        <div>
          
          Search
          <input
            className={classes.search}
            type="text"
            placeholder="search for food"
            onChange={searchMeals}
          ></input>
        </div>
        <div className={classes.meals}>{mealsList}</div>
      </div>
      <Tracker></Tracker>
    </div>
    </div>

  );
};
export default Nutrition;
