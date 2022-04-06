import React from "react";

const Payment = () => {

  return (
    <section
  class="p-4 p-md-5">
  <div class="row d-flex justify-content-center">
    <div class="col-md-10 col-lg-9 col-xl-5">
      <div class="card rounded-3">
        <div class="card-body p-4">
          <div class="text-center mb-4">
            <h1>Payment</h1>
          </div>
          <form action="">
            <p class="fw-bold mb-4 pb-2">Enter the Card Details:</p>

            <div class="d-flex flex-row align-items-center mb-4 pb-1">
             
              <div class="flex-fill mx-3">
                <div class="form-outline">
                  <label class="form-label" for="formControlLgXc">Card Number</label>
                  <input
                    type="text"
                    id="formControlLgXc"
                    class="form-control form-control-lg"
                    placeholder="Enter the Card Number"
                  />
                </div>
              </div>
          
            </div>

            <div class="d-flex flex-row align-items-center mb-4 pb-1">
             
              <div class="flex-fill mx-3">
                <div class="form-outline">
                  <label class="form-label" for="formControlLgXs">Name</label>
                  <input
                    type="text"
                    id="formControlLgXs"
                    class="form-control form-control-lg"
                    placeholder="Enter the Name on Card"
                  />
                </div>
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-4">
                <div class="form-outline">
                <label class="form-label" for="formControlLgExpk">Expire</label>
                  <input
                    type="password"
                    id="formControlLgExpk"
                    class="form-control form-control-lg"
                    placeholder="MM/YYYY"
                  />
                </div>
              </div>
              <div class="col-4">
                <div class="form-outline">
                <label class="form-label" for="formControlLgcvv">Cvv</label>
                  <input
                    type="password"
                    id="formControlLgcvv"
                    class="form-control form-control-lg"
                    placeholder="Cvv"
                  />
                </div>
              </div>
            </div>

            <button class="btn btn-success btn-lg btn-block bg-success">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
  );
};

export default Payment;
