import React, { useState } from "react";
import { useCartContext } from "./CartContext";
import { urlFor } from "../lib/client";
import ImageSrc from "./ImageSrc";
import Page from "./Page";

const Produit = (props) => {
  const [imageNum, setImageNum] = useState(0);
  const { products } = props;
  const {
    produitId,
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useCartContext();

  return (
    <Page className="">
      <div className="  p-3 ">
        {products.products.map((produit) => (
          <div key={produit._id}>
            {produit._id === produitId && (
              <div>
                <h1 className="text-3xl font-bold p-3">
                  Produit: {produit.name}
                </h1>
                <div className="flex gap-2 md:gap-5">
                  {" "}
                  <div className=" w-auto flex flex-col gap-3 border p-1">
                    <ImageSrc
                      Url={`${urlFor(produit.image[imageNum])}`}
                      className="w-64 h-64 grow border"
                    />

                    <div className="flex gap-1">
                      <button onClick={() => setImageNum(0)}>
                        <ImageSrc
                          Url={`${urlFor(produit.image[0])}`}
                          className="w-20 h-20"
                        />
                      </button>

                      <button onClick={() => setImageNum(1)}>
                        <ImageSrc
                          Url={`${urlFor(produit.image[1])}`}
                          className="w-20 h-20"
                        />
                      </button>

                      <button onClick={() => setImageNum(2)}>
                        <ImageSrc
                          Url={`${urlFor(produit.image[2])}`}
                          className="w-20 h-20"
                        />
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between py-3">
                    <p className="w-48 md:w-64 ">{produit.details}</p>
                    <h1>{produit.price}€</h1>
                  </div>
                </div>

                <div className=" w-full py-10 px-5">
                  {getItemQuantity(produit._id) === 0 ? (
                    <div className=" h-20 flex items-center justify-center">
                      <button
                        onClick={() => increaseCartQuantity(produit._id)}
                        className=" bg-blue-700 active:bg-blue-400 p-2 text-white font-bold rounded w-full md:w-64 "
                      >
                        ADD TO CART
                      </button>
                    </div>
                  ) : (
                    <div className="h-20 flex flex-col items-center">
                      <div className="flex gap-3 items-center my-2">
                        <button
                          onClick={() => decreaseCartQuantity(produit._id)}
                          className="bg-blue-700 active:bg-blue-400 px-2 text-white font-bold rounded md:text-4xl "
                        >
                          -
                        </button>
                        <p className="text-sm md:text-xl">
                          <span className="font-bold">
                            {getItemQuantity(produit._id)}
                          </span>{" "}
                          In Cart
                        </p>
                        <button
                          onClick={() => increaseCartQuantity(produit._id)}
                          className="bg-blue-700 active:bg-blue-400 px-2 text-white font-bold rounded md:text-4xl "
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(produit._id)}
                        className="bg-red-700 active:bg-red-400 px-2 mb-2 text-white font-bold rounded md:text-xl md:w-48"
                      >
                        REMOVE
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </Page>
  );
};

export default Produit;
