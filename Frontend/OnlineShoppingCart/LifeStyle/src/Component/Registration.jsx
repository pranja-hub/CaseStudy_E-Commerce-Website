import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Registration = () => {
  var auth = JSON.stringify(localStorage.getItem("auth"));
  console.log("this is auth string :" + auth);

  const nav = useNavigate();
  const [input, setInput] = useState({
    role: "",
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
        .post("http://localhost:8090/subs", {
          role: input.role,
          username: input.username,
          password: input.password,
        })
        .then((response) => {
          console.log(response.data.response);

          const a = localStorage.setItem(
            "auth",
            JSON.stringify(response.data.response)
          );
          nav("/");
        });
    } catch (error) {
      console.log("error is", error);
    }
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "ghostwhite",
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
          class="container-fluid "
          style={{ paddingLeft: "30%", marginTop: "50px" }}
        >
          <div class="col-md-8 col-xs-12 col-sm-12 row main-content text-center">
            <div>
              <div class="container-fluid mt-5">
                <div class="row">
                  <h2> Registration here!</h2>
                </div>
                <div class="row mt-3">
                  <form class="form-group">
                    <div class="row">
                      UserName:
                      <input
                        type="text"
                        className="form-control input-lg"
                        name="username"
                        id="username"
                        placeholder="Create Username"
                        onChange={inputEvent}
                        value={input.username}
                        required
                      />
                    </div>
                    <div class="row mt-3">
                      Password:
                      <input
                        type="password"
                        name="password"
                        id="password"
                        className="form-control input-lg"
                        placeholder="Create Password"
                        onChange={inputEvent}
                        value={input.password}
                        required
                      />
                    </div>

                    <div className="form-group mt-3"
                    style={{
                      marginRight: "18em"
                    }}>
                      <label htmlFor="role" style={{ color: "black", marginRight: "1em" }}>
                        Choose a Role:
                      </label>
                      <select
                        name="role"
                        id="role"
                        value={input.role}
                        onChange={inputEvent}
                      >
                        <option value="NA">Select Role</option>
                        <option value="merchant">Merchant</option>
                        <option value="user">User</option>
                      </select>
                    </div>

                    <div class="row mt-3">
                      <button
                        style={{
                          backgroundColor: "lightsalmon",
                          color: "white",
                        }}
                        class="btn mt-1"
                        type="submit"
                        onClick={showdata}
                      >
                        Register
                      </button>
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
export default Registration;
