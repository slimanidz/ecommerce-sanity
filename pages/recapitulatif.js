import React from "react";
import Page from "../components/Page";
import ProgressReglement from "../components/ProgressReglement";
import Link from "next/link";
import { useCartContext } from "../components/CartContext";

const Recapitulatif = () => {
  const { videCart } = useCartContext();
  const handleVide = () => {
    videCart();
  };
  return (
    <Page>
      <ProgressReglement widthProgress={100} />
      <div>
        <div>récapitulatif</div>
        <Link
          href="/"
          onClick={handleVide}
          className="w-32 md:w-64 flex justify-center text-xl font-bold text-white   bg-blue-500 active:bg-blue-300 rounded"
        >
          return
        </Link>
      </div>
    </Page>
  );
};

export default Recapitulatif;
