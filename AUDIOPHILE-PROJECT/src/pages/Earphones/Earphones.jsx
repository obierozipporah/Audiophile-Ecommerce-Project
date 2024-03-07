import React, { useEffect, useContext } from "react";
import CategoryTop from "../../components/CategoryTop/CategoryTop.jsx";
import ProductLinkPage from "../../components/ProductLinkPage/ProductLinkPage.jsx";
import LoadingSpinner from "../../components/UI/LoadingSpinner.jsx";
import ErrorModal from "../../components/UI/ErrorModal.jsx";
import { getData } from "../../lib/api.jsx";
import useHttp from "../../hooks/useHttp.jsx";
import CategoryLink from "../../components/CategoryLink/CategoryLink.jsx";
import BrandDescription from "../../components/BrandDescription/BrandDescription.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import { CartContext } from "../../store/CartProvider.jsx";
import CartModal from "../../components/Cart/CartModal.jsx";

const Earphones = () => {
  const cartCtx = useContext(CartContext);

  const {
    sendRequest,
    status,
    data: loadedEarphones,
    error,
  } = useHttp(getData, true);

  useEffect(() => {
    sendRequest("earphones");

    return () => sendRequest("earphones");
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <ErrorModal title="Uh Oh ! Something went wrong !" message={error} />
    );
  }

  return (
    <>
      <CategoryTop heading="EARPHONES" />
      {cartCtx.cartIsShown && <CartModal />}
      {loadedEarphones.map((data, index) => (
        <ProductLinkPage
          key={data.id}
          id={data.id}
          name={data.name}
          newOne={data.new}
          description={data.description}
          image={data.image}
        />
      ))}
      <CategoryLink />
      <BrandDescription />
      <Footer />
    </>
  );
};

export default Earphones;