import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
export default function Cart(props) {
  let price = 0;
  for (let i = 0; props.cartData[i]; i++) {
    price += props.cartData[i].price * props.cartData[i].count;
  }
  function compareItem(item, obj) {
    if (obj.name !== item.name) {
      // console.log(obj.name);
      return item;
    } else {
      if (item.count > 1) {
        item.count--;
        return item;
      }
    }
  }
  // props.setCartData([])
  function updateCart(e, obj) {
    // console.log(obj.name);
    let tempData = [];
    tempData = props.cartData.filter((item) => compareItem(item, obj));
    console.log(tempData);
    props.setCartData([...tempData]);
    // console.log(props.cartData.filter((item) => compareItem(item, obj)));
  }
  console.log(props.cartData);
  return (
    <div>
      <div className="d-flex justify-content-end">
        <div className="me-5 text-danger alert alert-danger">
          Total Price: {price}
        </div>
      </div>
      {price !== 0 ? (
        <div>
          {props.cartData.map((obj, index) => {
            return (
              <div className="d-flex justify-content-center" key={index}>
                <div
                  style={{ width: "20rem", borderRadius: "25px" }}
                  className=" alert alert-warning text-center "
                >
                  <p>Name: {obj.name}</p>
                  <p>Price: {obj.price}</p>
                  <p>Items added : {obj.count}</p>

                  <button
                    className="btn btn-danger"
                    key={index}
                    onClick={(e) => updateCart(e, obj)}
                  >
                    Remove Item
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          <div className="d-flex justify-content-center">
            <div className="me-5 text-warning alert alert-warning p-5">
              <p>
                "No Products are added to cart continue shopping"
              </p>
              <Link className="d-flex justify-content-center" to="/">
                Continue shopping
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
