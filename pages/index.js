import { useCartContext } from "../components/CartContext";
import FormatCurrency from "../components/FormatCurancy";
import NavBar from "../components/NavBar";
import Image from "next/image";
import { client, urlFor } from "../lib/client";
import { useState } from "react";
import { useRouter } from "next/router";
import ImageSrc from "../components/ImageSrc";
import Page from "../components/Page";

export default function Home(products) {
  console.log(products);
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,

    setProduitId,
  } = useCartContext();
  const router = useRouter();

  const [imageNum, setImageNum] = useState(0);

  const handleProduit = (event) => {
    const id = event.currentTarget.getAttribute("data-id");
    setProduitId(id);
    router.push("/produit");
    // router.push({
    //   pathname: "/produit/[pid]",
    //   query: { pid: id },
    // });
  };
  const handleFerme = () => {
    setProduitId("");
  };

  return (
    <Page>
      <h1 className=" px-5 py-10 text-2xl font-bold">Home</h1>

      <div className="p-10 flex flex-wrap   gap-3">
        {products.products.map((produit) => (
          <div
            key={produit._id}
            className="border w-32  md:w-64 p-2 flex flex-col items-center"
          >
            <button onClick={handleProduit} data-id={produit._id}>
              <ImageSrc
                Url={`${urlFor(produit.image[0])}`}
                className="w-48 h-32 md:h-48 grow "
              />
            </button>

            <div className="flex md: justify-between w-full">
              <h1 className="truncate w-[50%] text-sm ">{produit.name}</h1>
              <p className="bg-slate-300 px-2 rounded text-sm">
                {FormatCurrency(produit.price)}
              </p>
            </div>
            <div className=" w-full">
              {getItemQuantity(produit._id) === 0 ? (
                <div className=" h-20 flex items-center">
                  <button
                    onClick={() => increaseCartQuantity(produit._id)}
                    className=" bg-blue-700 active:bg-blue-400 p-2 text-white text-sm md:text-xl md:font-bold rounded w-full "
                  >
                    ADD TO CART
                  </button>
                </div>
              ) : (
                <div className="h-20 flex flex-col items-center">
                  <div className="flex gap-3 items-center my-2">
                    <button
                      onClick={() => decreaseCartQuantity(produit._id)}
                      className="bg-blue-700 active:bg-blue-400 px-2 text-white font-bold rounded  "
                    >
                      -
                    </button>
                    <p className="text-sm ">{getItemQuantity(produit._id)}</p>
                    <button
                      onClick={() => increaseCartQuantity(produit._id)}
                      className="bg-blue-700 active:bg-blue-400 px-2 text-white font-bold rounded  "
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(produit._id)}
                    className="bg-red-700 active:bg-red-400 px-2 mb-2 text-white font-bold rounded "
                  >
                    REMOVE
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </Page>
  );
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  const query1 = '*[_type == "users"]';
  const users = await client.fetch(query1);

  return {
    props: { products, users },
  };
};
