import React from "react";
import Page from "../components/Page";
import ProgressReglement from "../components/ProgressReglement";
import Link from "next/link";

const livraison = () => {
  return (
    <Page>
      <ProgressReglement widthProgress={63} />
      livraison
      <Link
        href="/paiement"
        className="w-32 md:w-64 flex justify-center text-xl font-bold text-white   bg-blue-500 active:bg-blue-300 rounded"
      >
        Suivant
      </Link>
    </Page>
  );
};

export default livraison;
