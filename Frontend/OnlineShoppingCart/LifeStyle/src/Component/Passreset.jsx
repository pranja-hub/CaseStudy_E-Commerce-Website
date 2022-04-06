import { Link } from "react-router-dom";

function Passreset() {
  return (
    <>
      <nav className="navbar navbar-inverse bg-dark navbar-dark">
        <div className="container">
          <div className="navbar-header">
            <a href="#" className="navbar-brand">
              Lifestyle Store
            </a>
          </div>
        </div>
      </nav>{" "}
      <br /> <br /> <br /> <br /> <br />
      <div className="container">
        <div className="row row_style justify-content-center row_style">
          <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
            <div className="panel-heading">
              <h1>Change Password</h1>
            </div>
            <div className="panel-body">
              <input
                type="password"
                placeholder="Old Password"
                className="form-control input-lg"
              />{" "}
              <br />
              <input
                type="password"
                placeholder="New Password"
                className="form-control input-lg"
              />{" "}
              <br />
              <input
                type="password"
                placeholder="Re-type New Password"
                className="form-control input-lg"
              />{" "}
              <br />
              <Link to="/login"><button type="submit" className="btn-primary btn-lg"> 
                Change
              </button>
              </Link>
            </div>
          </div>
        </div>{" "}
      </div>
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
      <div className="footer">
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
}

export default Passreset;
