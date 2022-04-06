import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const ShowProduct = (props) => {
  const nav = useNavigate();

  const Logout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("jwt");
      nav("/");
    }
  };

  console.log(props);
  const [data, setData] = useState([]);

  const getProduct = () => {
    try {
      axios.get("/product/get").then((response) => {
        console.log(response.data);
        setData(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const cartHandler = (product) => {
    try {
      console.log(product);
      const { productID, productName, price } = product;
      const cart = JSON.parse(localStorage.getItem("cartArr")) || [];
      cart.push({ productID, productName, price });
      localStorage.setItem("cartArr", JSON.stringify(cart));
      console.log(localStorage.getItem("cartArr"));
    } catch (error) {
      console.log("error is", error);
    }
  };

  useEffect(() => {
    cartHandler();
    getProduct();
  }, []);

  return (
    <>
      <div>
        <nav class="navbar navbar-inverse bg-dark navbar-dark">
          <div class="container">
            <div class="navbar-brand navbar-header">Lifestyle Store</div>
          </div>

          <Link to="/Cart">
            <button
              style={{
                cursor: "pointer",
                backgroundColor: "floralwhite",
                position: "absolute",
                top: "14px",
                right: "8em",
              }}
            >
              Cart
            </button>
          </Link>

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
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://source.unsplash.com/1600x500/?camera,fashion"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <h2>Welcome to Life Store</h2>
                <p>We have more product and more brands</p>
                <Link to="/sales">
                  <button class="btn btn-danger">Shop Now</button>
                </Link>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="https://source.unsplash.com/1600x500/?mobiles,grocery"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <h2>Best Quality clothes</h2>
                <p>Best deals within range</p>
                <Link to="/sales">
                  <button class="btn btn-danger">Shop Now</button>
                </Link>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="https://source.unsplash.com/1600x500/?laptop,footwears"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <h2>Big sale on Big Brands</h2>
                <p>Big Sale on this Wednesday</p>
                <Link to="/sales">
                  <button class="btn btn-danger">Shop Now</button>
                </Link>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

        <div className="container card">
          <div
            className="col-md-4 px-md-5"
            style={{
              display: "flex",
            }}
          >
            {data.map((detail, index) => (
              <div key={detail.productID}>
                <div className="card-deck">
                  <div
                    class="col-sm-9"
                    style={{
                      width: "15em",
                      margin: "1em",
                    }}
                  >
                    <div className="card">
                      <div className="card-body">
                        <img
                          src="https://source.unsplash.com/100x100/??mobile,laptop"
                          style={{
                            marginLeft: "50px"
                          }}
                        />
                        <div class="lines">
                          <h2 class="text-center my-1">{detail.productName}</h2>
                          <p class="text-center my-1">
                            Rating: {detail.rating}
                          </p>
                          <p class="text-center my-1">
                            Review: {detail.review}
                          </p>
                          <p class="text-center my-1">Price: {detail.price}</p>

                          <center>
                            <Link to="/payment">
                              <button
                                style={{
                                  backgroundColor: "orange",
                                  color: "white",
                                  borderRadius: "3px",
                                  marginTop: "10%",
                                }}
                              >
                                Buy
                              </button>
                            </Link>

                            <Link to="/product">
                              <button
                                onClick={() => cartHandler(detail)}
                                style={{
                                  backgroundColor: "orange",
                                  color: "white",
                                  borderRadius: "3px",
                                  marginTop: "10%",
                                  marginLeft: "10%",
                                  marginBottom: "10%",
                                }}
                              >
                                Add To Cart
                              </button>
                            </Link>
                            <h5>
                              <p>
                                Quantity:-&nbsp;
                                <input
                                  type="number"
                                  id="quantity"
                                  name="quantity"
                                  min="1"
                                  max="7"
                                ></input>
                              </p>
                            </h5>
                          </center>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowProduct;
