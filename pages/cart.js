import React from "react";
import NavBar from "../components/NavBar";
import { useCartContext } from "../components/CartContext";
import Image from "next/image";
import FormatCurrency from "../components/FormatCurancy";
import { client, urlFor } from "../lib/client";
import ImageSrc from "../components/ImageSrc";
import { useRouter } from "next/router";
import Page from "../components/Page";
import ProgressReglement from "../components/ProgressReglement";
import Link from "next/link";

const Cart = (products) => {
  const router = useRouter();
  const {
    cartItems,
    cartQuantity,
    decreaseCartQuantity,
    getItemQuantity,
    increaseCartQuantity,
  } = useCartContext();

  const handlePayer = () => {
    router.push("/reglement");
  };

  if (cartItems.length === 0) {
    return (
      <Page>
        <h1 className="flex justify-center items-center pt-32 text-2xl font-bold">
          Votre panier est vide
        </h1>
      </Page>
    );
  }
  return (
    <Page>
      <div className="lg:flex lg:flex-col lg:items-center">
        <div className="flex flex-col   gap-3 p-2 lg:w-[75%] ">
          <ProgressReglement widthProgress={9} />
          <h1 className=" px-5 pt-10 text-2xl font-bold">PANIER</h1>

          {products.products.map((itemAll) => (
            <div key={itemAll._id}>
              {cartItems.map((item) => (
                <div key={item.id}>
                  {itemAll._id === item.id ? (
                    <div className="flex  h-32 md:h-48  border p-3">
                      <div>
                        <ImageSrc
                          Url={`${urlFor(itemAll.image[0])}`}
                          className=" h-full w-32 md:w-48 lg:w-64 grow border p-1 "
                        />
                      </div>
                      <div className="h-full w-full flex flex-col  justify-between pl-2 ">
                        <div className=" flex justify-between bg-red-30">
                          <div className=" flex ">
                            <h1>{itemAll.name}</h1>
                            {item.quantity > 1 && (
                              <h1 className="px-2 text-[10px] text-slate-500">
                                x {item.quantity}
                              </h1>
                            )}
                          </div>
                          {/* total produit */}
                          <div>
                            {FormatCurrency(item.quantity * itemAll.price)}
                          </div>
                        </div>
                        <div className=" flex justify-between items-center bg-red-30">
                          <div className="text-slate-500 text-sm">
                            {FormatCurrency(itemAll.price)}
                          </div>
                          <div className="flex gap-3 my-2">
                            <button
                              onClick={() => decreaseCartQuantity(item.id)}
                              className={
                                item.quantity !== 1
                                  ? "bg-blue-700 active:bg-blue-400 px-2 text-white font-bold rounded  "
                                  : "bg-red-700 active:bg-red-400 px-2 text-white font-bold rounded  "
                              }
                            >
                              -
                            </button>
                            <p>{getItemQuantity(item.id)}</p>
                            <button
                              onClick={() => increaseCartQuantity(item.id)}
                              className="bg-blue-700 active:bg-blue-400 px-2 text-white font-bold rounded  "
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          ))}
          <div className=" flex justify-end pt-5 mr-5">
            Total:
            <span className="font-bold">
              {FormatCurrency(
                cartItems.reduce((total, cartItem) => {
                  const item = products.products.find(
                    (i) => i._id === cartItem.id
                  );
                  return total + (item?.price || 0) * cartItem.quantity;
                }, 0)
              )}
            </span>
          </div>
          <div className=" flex justify-end">
            <Link
              href="/identification"
              className="w-32 p-1 mr-5 flex justify-center text-xl font-bold text-white   bg-blue-500 active:bg-blue-300 rounded"
            >
              VALIDER
            </Link>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Cart;

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  return {
    props: { products },
  };
};
