import React from "react";
import { Button } from "react-bootstrap";
import StripeCheckout from "react-stripe-checkout";
import { placeOrder } from "../actions/orderAction";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../component/Loader";
import Error from "../component/Error";
import Success from "../component/Success";

const Checkout = ({ subTotal }) => {
  const orderState = useSelector((state) => state.placeOrderReducer);
  const { loading, error, success } = orderState;
  const dispatch = useDispatch();

  const tokenHandler = (token) => {
    dispatch(placeOrder(token, subTotal));
    console.log(token);
  };

  return (
    <>
      {loading && <Loader />}
      {error && <Error error="something went wrong" />}
      {success && <Success success="order placed success" />}
      <StripeCheckout
        amount={subTotal * 100}
        shippingAddress
        token={tokenHandler}
        stripeKey="pk_test_51Mwm5MSGuMw4hCPHLmEtH5ozPONfDUUKpEKvB7JoF2aRcRhLEAdHUMZwKcWBnVPupnocMYLUwtiFp4jZJjq10BcX003KXJVGzp"
        currency="INR"
      >
        <Button>Pay Now</Button>
      </StripeCheckout>
    </>
  );
};

export default Checkout;
