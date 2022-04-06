import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  var auth = JSON.stringify(localStorage.getItem("auth"));
  console.log("this is auth string :" + auth);
  const nav = useNavigate();
  const login = () => {
    nav("/shop");
  };
  const reg = () => {
    const path = "/registration";
    nav(path);
  };

  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const inputEvent = (event) => {
    const { name, value } = event.target;
    setInput((previousvalue) => {
      console.log(previousvalue.data);
      return {
        ...previousvalue,
        [name]: value,
      };
    });
  };
  const showdata = (event) => {
    event.preventDefault();
    try {
      axios
        .post("http://localhost:8090/auth", {
          username: input.username,
          password: input.password,
        })
        .then(
          (response) => {
            console.log(response);
            localStorage.setItem("jwt", JSON.stringify(response.data.response));
            console.log(JSON.stringify(localStorage.getItem("jwt")));
            console.log(response.data.role);
            setInput({ ...input, role: response.data.role });
            if (response.data.role === "[merchant]") {
              nav("/add");
              toast("Wecome to Merchant");
            } else if (response.data.role === "[user]") {
              nav("/shop ");
              toast("Wecome to LifeStore");
            } else {
              alert("not user");
            }
          },
          (error) => {
            toast("Please Enter Valid Credentials");
            console.log(error);
          }
        );
    } catch (error) {
      console.log("error is", error);
    }
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "mistyrose",
          height: "36em",
        }}
      >
        <nav class="navbar navbar-inverse">
          <div class="container">
            <div class="navbar-header">
              <a href="#" class="navbar-brand">
                Welcome To Lifestyle Store
              </a>
            </div>
          </div>
        </nav>

        <div
          class="container-fluid"
          style={{ paddingLeft: "30%", marginTop: "50px" }}
        >
          <div
            class="row main-content text-center"
            style={{ marginTop: "12em", marginRight: "12em" }}
          >
            <div class="col-md-4 text-center company__info">
              <h4
                class="company_title"
                style={{
                  position: "relative",
                  top: "-2em",
                  right: "12em",
                }}
              >
                <img
                  src="./img/ShoppingCart.jpg"
                  alt="image"
                  style={{ width: "17em", borderRadius: "10px" }}
                />
              </h4>
            </div>
            <div class="col-md-8 col-xs-12 col-sm-12 login_form ">
              <div class="container-fluid col-auto">
                <div class="row">
                  <h2>Log In</h2>
                </div>
                <div class="row">
                  <form class="form-group">
                    <div class="row">
                      UserName:
                      <input
                        type="text"
                        name="username"
                        className="form-control input-lg"
                        id="username"
                        placeholder="username"
                        onChange={inputEvent}
                        value={input.username}
                        required
                      />
                    </div>
                    <div class="row mt-2">
                      Password:
                      <input
                        type="password"
                        name="password"
                        className="form-control input-lg"
                        id="password"
                        placeholder="password"
                        onChange={inputEvent}
                        value={input.password}
                        required
                      />
                    </div>
                    <div data-testid="button" class="row mt-2">
                      <Link to="/shop">
                        <button
                          style={{
                            backgroundColor: "mediumturquoise",
                            color: "white",
                            width: "7em",
                          }}
                          class="btn mt-1"
                          type="submit"
                          onClick={showdata}
                        >
                          Login
                        </button>
                      </Link>
                    </div>

                    <div class=" mt-2">
                      <p>
                        Don't have an account?
                        <Link to="/register">Register Here</Link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
