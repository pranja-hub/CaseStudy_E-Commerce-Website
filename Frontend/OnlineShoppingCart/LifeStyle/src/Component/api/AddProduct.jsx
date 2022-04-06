import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const PostDepartment = () => {
  const [input, setInput] = useState({
    productID: "",
    productType: "",
    productName: "",
    price: "",
    description: "",
    specification: "",
  });

  const nav = useNavigate();

  const Logout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("jwt");
      nav("/");
    }
  };

  const inputEvent = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;

    setInput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const showdata = (event) => {
    event.preventDefault();

    try {
      if (
        axios
          .post("http://localhost:8009/product/add", {
            productID: input.productID,
            productType: input.productType,
            productName: input.productName,
            price: input.price,
            description: input.description,
            specification: input.specification,
          })
          .then((response) => {
            console.log(response.data);
          })
      ) {
        alert("uploaded");
      }
    } catch (error) {
      console.log("error is", error);
    }
  };

  const updatedata = (event) => {
    event.preventDefault();

    try {
      if (
        axios
          .put("http://localhost:8009/product/update", {
            productID: input.productID,
            productType: input.productType,
            productName: input.productName,
            price: input.price,
            description: input.description,
            specification: input.specification,
          })
          .then((response) => {
            console.log(response);
          })
      ) {
        alert("Data updated");
      }
    } catch (error) {
      console.log("error is ", error);
    }
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

      <div className="conatiner bg-color">
        <div class="text-center name">
          <h2>Post and Update Product</h2>
        </div>
        <div class="wrapper">
          <div className="container col-md-3">
            <form class="p-3 mt-3">
              <label className="mt-2">Product Id: </label>
              <div class="form-field d-flex align-items-center">
                <span class="far fa-user"></span>
                <input
                  type="text"
                  name="productID"
                  id="productID"
                  placeholder="productID"
                  onChange={inputEvent}
                  value={input.productID}
                  required
                />
              </div>

              <label className="mt-2">Product Type: </label>
              <div class="form-field d-flex align-items-center ">
                <span class="far fa-user"></span>
                <input
                  type="text"
                  name="productType"
                  id="productType"
                  placeholder="productType"
                  onChange={inputEvent}
                  value={input.productType}
                  required
                />
              </div>

              <label className="mt-2">Product Name: </label>
              <div class="form-field d-flex align-items-center">
                {" "}
                <span class="far fa-user"></span>{" "}
                <input
                  type="text"
                  name="productName"
                  id="productName"
                  placeholder="productName"
                  onChange={inputEvent}
                  value={input.productName}
                  required
                />{" "}
              </div>

              <label className="mt-2">Product Price: </label>
              <div class="form-field d-flex align-items-center">
                {" "}
                <span class="far fa-user"></span>{" "}
                <input
                  type="text"
                  name="price"
                  id="price"
                  placeholder="price"
                  onChange={inputEvent}
                  value={input.price}
                  required
                />{" "}
              </div>

              <label className="mt-2">Product Description: </label>
              <div class="form-field d-flex align-items-center">
                {" "}
                <span class="far fa-user"></span>{" "}
                <input
                  type="text"
                  name="description"
                  id="description"
                  placeholder="description"
                  onChange={inputEvent}
                  value={input.description}
                  required
                />{" "}
              </div>

              <label className="mt-2">Product Specification: </label>
              <div class="form-field d-flex align-items-center">
                {" "}
                <span class="far fa-user"></span>{" "}
                <input
                  type="text"
                  name="specification"
                  id="specification"
                  placeholder="specification"
                  onChange={inputEvent}
                  value={input.specification}
                  required
                />
              </div>

              <button
                class="btn m-2 mt-3 bg-success btn-success"
                type="submit"
                onClick={showdata}
              >
                Post
              </button>
              <button
                class="btn m-2 mt-3 bg-success btn-success"
                type="submit"
                onClick={updatedata}
              >
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostDepartment;
