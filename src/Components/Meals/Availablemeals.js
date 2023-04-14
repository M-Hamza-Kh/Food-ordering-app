import React from "react";
import "./Availablemeals.css";
import Mealitem from "./Mealitem/Mealitem";
const dummy_meals = [
  {
    id: "m1",
    name: "sushi",
    description: "Finestfish",
    price: 22.99,
  },
  {
    id: "m2",
    name: "sushi",
    description: "Finestfish",
    price: 22.99,
  },
  {
    id: "m3",
    name: "sushi",
    description: "Finestfish",
    price: 22.99,
  },
  {
    id: "m4",
    name: "sushi",
    description: "Finestfish",
    price: 22.99,
  },
];

const Availablemeals = () => {
  const mealslist = dummy_meals.map((meals) => (
    <Mealitem
      key={meals.id}
      id={meals.id}
      name={meals.name}
      description={meals.description}
      price={meals.price}
    />
  ));
  return (
    <div className="container-fluid top-cont ">
      <div className="row ">
        <div className="col-12 d-flex justify-content-center">
          <div className="unorderlist-div ">
            <ul className="list-unstyled">{mealslist}</ul>;
          </div>
        </div>
      </div>
    </div>
  );
};

export default Availablemeals;
