import { tab } from "@testing-library/user-event/dist/tab";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Cart = (props) => {
  const nav = useNavigate();

  const Logout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("jwt");
      nav("/");
    }
  };

  const cart = JSON.parse(localStorage.getItem("cartArr")) || [];
  console.log(cart);

  const listItems = cart.map((d) => (
    <table class="table table-striped tab">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Product ID</th>
          <th scope="col">Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td scope="row">{d.productName}</td>
          <td>{d.productID}</td>
          <td>{d.price}</td>
          <td>
            <Link to="/payment">
              <button class="btn btn-success bg-success"> Buy </button>
            </Link>
          </td>
        </tr>
      </tbody>
    </table>
  ));

  return (
    <>
      <nav class="navbar navbar-inverse bg-dark navbar-dark">
        <div class="container">
          <div class="navbar-brand navbar-header">Lifestyle Store</div>
        </div>
        {localStorage.getItem("jwt") && (
          <ul class="nav navbar-nav navbar-right">
            <li>
              <button
                onClick={Logout}
                style={{
                  cursor: "pointer",
                  backgroundColor: "floralwhite",
                  position: "absolute",
                  top: "14px",
                  right: "3em",
                }}
              >
                <span>Logout</span>
              </button>
            </li>
          </ul>
        )}
      </nav>

      <div className="container">
        <div className="card">
          <h4 class="m-3"> My Cart </h4>
          <table>
            {listItems}
            <tr>
              <td></td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};

export default Cart;
