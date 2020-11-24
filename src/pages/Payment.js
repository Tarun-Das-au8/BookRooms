import React from "react";
import "../styles/payment.css";
import { Link } from "react-router-dom";

const Payment = () => {
  return (
    <>
      <div className="row">
        <div className="col-75">
          <div className="container1">
            <form action="/action_page.php">
              <div className="row">
                <div className="col-50">
                  <h3 style={{ color: "darkgoldenrod" }}>Billing Address</h3>
                  <label for="fname">Full Name</label>
                  <input
                    type="text"
                    id="fname"
                    name="firstname"
                    placeholder="John M. Doe"
                  />
                  <label for="email">Email</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                  />
                  <label for="adr">Address</label>
                  <input
                    type="text"
                    id="adr"
                    name="address"
                    placeholder="542 W. 15th Street"
                  />
                  <label for="city">City</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="New York"
                  />

                  <div className="row">
                    <div className="col-50">
                      <label for="state">State</label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        placeholder="NY"
                      />
                    </div>
                    <div className="col-50">
                      <label for="zip">Zip</label>
                      <input
                        type="text"
                        id="zip"
                        name="zip"
                        placeholder="10001"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-50">
                  <h3 style={{ color: "darkgoldenrod" }}>Payment</h3>
                  <label for="cname">Name on Card</label>
                  <input
                    type="text"
                    id="cname"
                    name="cardname"
                    placeholder="John More Doe"
                  />
                  <label for="ccnum">Credit card number</label>
                  <input
                    type="text"
                    id="ccnum"
                    name="cardnumber"
                    placeholder="1111-2222-3333-4444"
                  />
                  <label for="expmonth">Exp Month</label>
                  <input
                    type="text"
                    id="expmonth"
                    name="expmonth"
                    placeholder="September"
                  />
                  <div className="row">
                    <div className="col-50">
                      <label for="expyear">Exp Year</label>
                      <input
                        type="text"
                        id="expyear"
                        name="expyear"
                        placeholder="2020"
                      />
                    </div>
                    <div className="col-50">
                      <label for="cvv">CVV</label>
                      <input
                        type="text"
                        id="cvv"
                        name="cvv"
                        placeholder="xxx"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <label>
                <input type="checkbox" name="sameadr" /> Accept terms and
                conditions
              </label>
              <Link to="/confirm" className="btn-check">
                Proceed to checkout
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
