import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import "./Home.css";

export default function Home(props) {
  function compareCategory(obj) {
    if (props.category === "all") {
      return obj;
    } else if (obj.category === props.category) {
      return obj;
    }
  }
  function updateCart(e, obj) {
    console.log(obj.name);
    let isFound = false;
    if (props.cartData) {
      props.setCartData(
        props.cartData.filter((item) => {
          if (item.name === obj.name) {
            isFound = true;
            item.count++;
            console.log(obj.name);
            return item;
          } else return item;
        })
      );
    }

    if (isFound === false) {
      props.setCartData([
        ...props.cartData,
        {
          name: obj.name,
          price: obj.price,
          category: obj.category,
          count: 1,
        },
      ]);
    }
  }

  return (
    <div>
      <div>
        <p>Search your required product category wise</p>
        <input
          type="radio"
          value="pizza"
          name="catergory"
          checked={props.category === "pizza"}
          onChange={(e) => props.setCategory(e.target.value)}
        />{" "}
        Pizza
        <input
          type="radio"
          value="burger"
          name="catergory"
          checked={props.category === "burger"}
          onChange={(e) => props.setCategory(e.target.value)}
        />{" "}
        Burger
        <input
          type="radio"
          value="beverage"
          name="catergory"
          checked={props.category === "beverage"}
          onChange={(e) => props.setCategory(e.target.value)}
        />{" "}
        Beverage
        <input
          type="radio"
          value="all"
          name="catergory"
          checked={props.category === "all"}
          onChange={(e) => props.setCategory(e.target.value)}
        />{" "}
        All
      </div>

      <div className="heroSec">
        <div className="cardsSec">
          {props.data
            .filter((obj) => compareCategory(obj))
            .map((item, index) => {
              return (
                <div className="mainCard" key={index}>
                  <div className="imageCard"></div>
                  <div className="bottomCard">
                    <div className="cardLeft">
                      <p> {item.name}</p>
                      <p> {item.price}</p>
                    </div>

                    <button
                      className="cardButton"
                      key={index}
                      onClick={(e) => updateCart(e, item)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      {/* console.log(tempData) */}
    </div>
  );
}
