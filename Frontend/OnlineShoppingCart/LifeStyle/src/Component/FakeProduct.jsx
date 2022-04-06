import React from "react";
import { Link, useNavigate } from "react-router-dom";

const FakeProduct = () => {
  const nav = useNavigate();

  const Logout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("jwt");
      nav("/");
    }
  };

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
              {/* <i class="bi bi-cart"></i> */}
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
        
        <div className="tex-center"
        style={{
            backgroundColor: "cyan",
            fontSize: "2em",
            marginTop: "4px",    
        }}> <h1
        style={{
          marginLeft: "12em"
        }}>Our Products</h1> </div>

        <div
          className="container card"
          style={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "orange"
          }}
        >
          <h1>Dress</h1>
          <div
            className="col-md-2 px-md-1"
            style={{
              display: "flex",
              height: "25em",
              marginTop: "3em",
              marginLeft: "-6em",
            }}
          >
            <div className="card mt-2">
              <div className="card-body">
                <img
                  src="https://source.unsplash.com/100x100/??dress,womensdress,mensdress"
                 style={{
                   marginLeft: "24px"
                 }}
                />
                <div class="lines">
                  <h2 class="text-center my-1">SAADHVI</h2>
                  <p class="text-center my-1">Pack of 2 Printed Dress</p>
                  <p class="text-center my-1">Rs: 200/-</p>
                  <p class="text-center my-1 bg-danger">Only Few Left !!</p>

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
                    
                  </center>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-md-2 px-md-1"
            style={{
              display: "flex",
              height: "25em",
              marginTop: "3em",
              marginLeft: "2em",
            }}
          >
            <div className="card mt-2">
              <div className="card-body">
                <img
                  src="https://source.unsplash.com/100x100/??dress,womendress,mendress"
                 style={{
                   marginLeft: "20px"
                 }}
                />
                <div class="lines">
                  <h2 class="text-center my-1">MOLCHA</h2>
                  <p class="text-center my-1">Women Pack of 2</p>
                  <p class="text-center my-1">Rs: 400/-</p>
                  <p class="text-center my-1 bg-danger">Only Few Left !!</p>

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
                    
                  </center>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-md-2 px-md-1"
            style={{
              display: "flex",
              height: "25em",
              marginTop: "3em",
              marginLeft: "2em",
            }}
          >
            <div className="card mt-2">
              <div className="card-body">
                <img
                  src="https://source.unsplash.com/100x100/??dress, womendress, mendress"
                  style={{
                    marginLeft: "20px"
                  }}
                />
                <div class="lines">
                  <h2 class="text-center my-1">LILPicks</h2>
                  <p class="text-center my-1">Girl Pack of 2 Dress</p>
                  <p class="text-center my-1">Rs: 839/- </p>

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
                   
                  </center>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-md-2 px-md-1"
            style={{
              display: "flex",
              height: "25em",
              marginTop: "3em",
              marginLeft: "2em",
            }}
          >
            <div className="card mt-2">
              <div className="card-body">
                <img
                  src="https://source.unsplash.com/100x100/??dress, womendress, mendress"
                  style={{
                    marginLeft: "21px"
                  }}
                />
                <div class="lines">
                  <h2 class="text-center my-1">BABY GO</h2>
                  <p class="text-center my-1">Pack of 2 A-Line Dresses</p>
                  <p class="text-center my-1">Price: 200/-</p>
                  <p class="text-center my-1 bg-danger">Only Few Left !!</p>

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
              
                  </center>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-md-2 px-md-1"
            style={{
              display: "flex",
              height: "25em",
              marginTop: "3em",
              marginLeft: "2em",
            }}
          >
            <div className="card mt-2">
              <div className="card-body">
                <img
                  src="https://source.unsplash.com/100x100/??dress, womendress, mendress"
                  style={{
                    marginLeft: "22px"
                  }}
                />
                <div class="lines">
                  <h2 class="text-center my-1">YK</h2>
                  <p class="text-center my-1">Pack of 2 Printed Dress</p>
                  <p class="text-center my-1">Rs: 739/-</p>

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
                    
                  </center>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="container card"
          style={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "orange"
          }}
        >
          <h1>Mobile</h1>
          <div
            className="col-md-2 px-md-1"
            style={{
              display: "flex",
              height: "25em",
              marginTop: "3em",
              marginLeft: "-6em"
            }}
          >
            <div className="card mt-2">
              <div className="card-body">
                <img
                  src="https://source.unsplash.com/100x100/??Iphone"
                  style={{
                    marginLeft: "17px"
                  }}
                />
                <div class="lines">
                  <h2 class="text-center my-1">IPhone</h2>
                  <p class="text-center my-1">Rs: 2000000/-</p>

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
                   
                  </center>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-md-2 px-md-1"
            style={{
              display: "flex",
              height: "25em",
              marginTop: "3em",
              marginLeft: "2em",
            }}
          >
            <div className="card mt-2">
              <div className="card-body">
                <img
                  src="https://source.unsplash.com/100x100/??Samsung"
                  style={{
                    marginLeft: "24px"
                  }}
                />
                <div class="lines">
                  <h2 class="text-center my-1">Samsung</h2>
                  <p class="text-center my-1">Rs: 20000/-</p>

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
                    
                  </center>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-md-2 px-md-1"
            style={{
              display: "flex",
              height: "25em",
              marginTop: "3em",
              marginLeft: "2em",
            }}
          >
            <div className="card mt-2">
              <div className="card-body">
                <img
                  src="https://source.unsplash.com/100x100/??Oppo"
                  style={{
                    marginLeft: "24px"
                  }}
                />
                <div class="lines">
                  <h2 class="text-center my-1">OPPO</h2>
                  <p class="text-center my-1">Rs: 20000/-</p>

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
                   
                  </center>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-md-2 px-md-1"
            style={{
              display: "flex",
              height: "25em",
              marginTop: "3em",
              marginLeft: "2em",
            }}
          >
            <div className="card mt-2">
              <div className="card-body">
                <img
                  src="https://source.unsplash.com/100x100/??Vivo"
                  style={{
                    marginLeft: "24px"
                  }}
                />
                <div class="lines">
                  <h2 class="text-center my-1">VIVO</h2>
                  <p class="text-center my-1">Rs: 40000/-</p>
                  <p class="text-center my-1 bg-success">HOLI SALE !!</p>

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
                    
                  </center>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-md-2 px-md-1"
            style={{
              display: "flex",
              height: "25em",
              marginTop: "3em",
              marginLeft: "2em",
            }}
          >
            <div className="card mt-2">
              <div className="card-body">
                <img
                  src="https://source.unsplash.com/100x100/??Redmi"
                  style={{
                    marginLeft: "24px"
                  }}
                />
                <div class="lines">
                  <h2 class="text-center my-1">REDMI</h2>
                  <p class="text-center my-1">Rs: 250000/-</p>
                  <p class="text-center my-1 bg-success">HOlI SALE !!</p>

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
                    
                  </center>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="container card"
          style={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "orange"
          }}
        >
          <h1>Footwears</h1>
          <div
            className="col-md-2 px-md-1"
            style={{
              display: "flex",
              height: "25em",
              marginTop: "3em",
              marginLeft: "-11em",
            }}
          >
            <div className="card mt-2">
              <div className="card-body">
                <img
                  src="https://source.unsplash.com/100x100/??Footwear,Addidas"
                  style={{
                    marginLeft: "24px"
                  }}
                />
                <div class="lines">
                  <h2 class="text-center my-1">ADDIDAS</h2>
                  <p class="text-center my-1">Pack of 2</p>
                  <p class="text-center my-1">Rs: 2000/-</p>

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
                  
                  </center>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-md-2 px-md-1"
            style={{
              display: "flex",
              height: "25em",
              marginTop: "3em",
              marginLeft: "2em",
            }}
          >
            <div className="card mt-2">
              <div className="card-body">
                <img
                  src="https://source.unsplash.com/100x100/??footwear,u.s.polo"
                  style={{
                    marginLeft: "24px"
                  }}
                />
                <div class="lines">
                  <h2 class="text-center my-1">U.S. Polo</h2>
                  <p class="text-center my-1">Pack of 3</p>
                  <p class="text-center my-1">Rs: 1500/-</p>

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
                   
                  </center>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-md-2 px-md-1"
            style={{
              display: "flex",
              height: "25em",
              marginTop: "3em",
              marginLeft: "2em",
            }}
          >
            <div className="card mt-2">
              <div className="card-body">
                <img
                  src="https://source.unsplash.com/100x100/??footwear,nike"
                  style={{
                    marginLeft: "24px"
                  }}
                />
                <div class="lines">
                  <h2 class="text-center my-1">Nike</h2>
                  <p class="text-center my-1">Packs</p>
                  <p class="text-center my-1">Rs: 900/-</p>

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
                   
                  </center>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-md-2 px-md-1"
            style={{
              display: "flex",
              height: "25em",
              marginTop: "3em",
              marginLeft: "2em",
            }}
          >
            <div className="card mt-2">
              <div className="card-body">
                <img
                  src="https://source.unsplash.com/100x100/??footwear,Puma"
                  style={{
                    marginLeft: "24px"
                  }}
                />
                <div class="lines">
                  <h2 class="text-center my-1">PUMA</h2>
                  <p class="text-center my-1">Rs: 800/-</p>
                  <p class="text-center my-1 bg-danger">Only Few Left !!</p>

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
                  
                  </center>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-md-2 px-md-1"
            style={{
              display: "flex",
              height: "25em",
              marginTop: "3em",
              marginLeft: "2em",
            }}
          >
            <div className="card mt-2">
              <div className="card-body">
                <img
                  src="https://source.unsplash.com/100x100/??footwear,ALDO"
                  style={{
                    marginLeft: "24px"
                  }}
                />
                <div class="lines">
                  <h2 class="text-center my-1">ALDO</h2>
                  <p class="text-center my-1">Rs: 500/-</p>
                  <p class="text-center my-1 bg-danger">Only Few Left !!</p>

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
                   
                  </center>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FakeProduct;
