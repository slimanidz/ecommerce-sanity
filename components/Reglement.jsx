import React from "react";
import { useCartContext } from "./CartContext";
import Page from "./Page";
import FormatCurrency from "./FormatCurancy";

const Reglement = (props) => {
  const { products } = props;

  const { cartItems } = useCartContext();

  const article = cartItems.reduce((total, cartItem) => {
    const item = products.products.find((i) => i._id === cartItem.id);
    return total + (item?.price || 0) * cartItem.quantity;
  }, 0);

  const livraison = 5;
  return (
    <Page>
      <div className="p-5">
        <h1 className="text-3xl font-bold py-5">Reglement</h1>
        Articles:
        <span className="font-bold">{FormatCurrency(article)}</span>
        <p>
          Livrison:
          <span className="font-bold">{FormatCurrency(livraison)}</span>
        </p>
        <p>
          Total:{" "}
          <span className="font-bold">
            {FormatCurrency(article + livraison)}
          </span>
        </p>
        <h1>Choisi un mode de paiment : </h1>
      </div>
    </Page>
  );
};

export default Reglement;
