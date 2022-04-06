import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const NewCart = () => {
  const [data, setData] = useState([]);

  const nav = useNavigate();
  var counter = 1;
  const Logout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("jwt");
      nav("/");
    }
  };

  const getCart = () => {
    try {
      axios.get("http://localhost:8020/cart/get").then((response) => {
        console.log(response.data);
        setData(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  };
  const deleteProduct = (productId) => {
    try {
      if (
        axios
          .delete(`http://localhost:8020/cart/del/${productId}`)
          .then((response) => {
            console.log(response);
            getCart();
          })
      ) {
        alert("Cart id " + productId + " is deleted");
      }
    } catch (error) {
      console.log("error is", error);
    }
  };

  useEffect(() => {
    getCart();
  }, []);

  return (
    <div>
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
                  right: "6em",
                }}
              >
                <span>Logout</span>
              </button>
            </li>
          </ul>
        )}

        <Link to="/Cart"></Link>
      </nav>

      <div style={{ backgroundColor: "#d0e6f3" }}>
        <div>
          <center>
            {" "}
            <h1>Carts</h1>
          </center>
          <hr />
        </div>
        <div className="conatiner card">
          <div className="col-md-4 px-md-5">
            {data.map((detail, index) => (
              <table key={detail.id}>
                <div className="card-deck">
                  <div
                    class="col-sm-9"
                    style={{
                      width: "15em",
                      margin: "1em",
                    }}
                  >
                    <h5 style={{ padding: "2%" }}>
                        <div className="card">
                        <div className="card-body">
                      Index: {index + 1}
                      <br />
                      <hr />
                      Product Id:- {detail.productId},<br />
                      <hr />
                      Product Name:-{detail.productName},<br />
                      <hr />
                      <center>
                        {" "}
                        <button className="btn btn-danger"
                          onClick={() => {
                            deleteProduct(detail.productId);
                          }}
                          style={{ backgroundColor: "#d0e6f3", color: "red" }}
                        >
                          Buy
                        </button>

                        <button className="btn btn-danger"
                          onClick={() => {
                            deleteProduct(detail.productId);
                          }}
                          style={{ backgroundColor: "#d0e6f3", color: "red" }}
                        >
                          Delete
                        </button>
                      </center>
                      </div>
                      </div>
                    </h5>
                    <div
                      style={{
                        backgroundColor: "white",
                        color: "red",
                        height: "10px",
                        borderRadius: "20px",
                      }}
                    ></div>
                  </div>
                </div>
              </table>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCart;
