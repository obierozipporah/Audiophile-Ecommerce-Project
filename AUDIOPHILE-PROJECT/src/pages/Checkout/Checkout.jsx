import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer.jsx";
import Header from "../../components/Header/Header.jsx";
import classes from "./Checkout.module.css";
import Form from "../../components/Form/Form.jsx";
import Summary from "../../components/Summary/Summary.jsx";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51ItGfwABxdLEu54yZ8bkuDPwbZf8MUjITF4IIlVcCj2DC7EpAttJ7qlZsT5JUNnVUm9LyQa72EGuXCFkRGjtqMsd00SCJajckg"
);

const Checkout = () => {
  const [formValid, setFormValid] = useState(false);
  const [processing, setProcessing] = useState(false);

  const processFormHandler = (e) => {
    setProcessing(e);
  };

  const validateFormHandler = (event) => {
    setFormValid(event);
  };

  return (
    <>
      <div className={classes.top}>
        <Header />
      </div>
      <div className={classes.background}>
        <Link to={`/home`} className={classes.back}>
          &larr; &nbsp; Go Back
        </Link>
        <Elements stripe={stripePromise}>
          <Form
            onFormValid={validateFormHandler}
            onProcessing={processFormHandler}
          />
        </Elements>
        <Summary onButtonActive={!formValid} onProcessing={processing} />
      </div>
      <Footer />
    </>
  );
};

export default Checkout;