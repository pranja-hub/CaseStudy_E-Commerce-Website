import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";


const NewPayment = ({ price, id }) => {

  const nav = useNavigate();

  const Logout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("jwt");
      nav("/");
    }
  };


  const publishableKey =
    "pk_test_51Jg8ikSCkVGSmTrqgG2ASVz9qR0jWA0TiEzN2BgDedDvp3H9mgddqi578uZmDbfjzKAb3Qu0OehLrZTJxDhAVxlC00SPDFH36d";
  const stripePrice = price * 100;
  const cartId = id;

  const onToken = (token) => {
    console.log(token);
    axios
      .post("http://localhost:8083/payment", {
        amount: stripePrice,
        token,
      })
      .then((response) => {
        console.log(response);
        UpdateOrder(cartId);
        toast("payment Success");
      })
      .catch((error) => {
        console.log(error);
        toast("Payment failed");
      });
  };
  const UpdateOrder = (id) => {
    axios
      .put("http://localhost:8054/apicart/Upadtecart" + "/" + id)
      .then((response) => {
        console.log(response);
        // alert(cartId);
        alert("payment Successfully");
      })
      .catch((error) => {
        console.log(error);
        alert("Payment Success");
      });
  };

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
    <div
      className="container"
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "skyblue",
        position: "relative",
        top: "3em",
      }}
    >
      <div class="card card-deck"
      style={{
        width: "30em",
        height: "20em",
        backgroundColor: "lightgreen"
      }}>
        <div className="card-head"
        style={{
          position: "relative",
          top: "4em",
          left: "6em"
        }}>
          <h1 className="mt-2">Secure Payment</h1>
           <p>Your Security is important for us. </p>
        </div>
        <div className="card-body"
        style={{
          position: "relative",
          top: "2em",
          left: "9em"
        }}>
        <StripeCheckout className="mt-5"
          amount={stripePrice}
          label="Pay Now"
          name="Payment Gateway"
          // image="https://svgshare.com/i/CUz.svg"
          // description={`Your total is ${price}`}
          panelLabel="Pay Now"
          token={onToken}
          stripeKey={publishableKey}
          currency="INR"
        />
        </div>
      </div>
    </div>
    <div className="footer" style={{
      position: "relative",
      top: "83px"
    }}>
          <div className="container">
            <center>
              <h>
                <b>Copyright &#169; Lifestyle Store. All Rights Reserved</b> and{" "}
                <b>Contact Us: +91 90000 00000</b>
              </h>
            </center>
          </div>
        </div>
    </>
  );
};

export default NewPayment;
