import React from "react";
import Page from "../components/Page";
import ProgressReglement from "../components/ProgressReglement";
import Reglement from "../components/Reglement";
import { client } from "../lib/client";
import Link from "next/link";

const paiement = (products) => {
  return (
    <Page>
      <ProgressReglement widthProgress={89} />

      <Reglement products={products} />
      <Link
        href="/recapulatif"
        className="w-32 md:w-64 flex justify-center text-xl font-bold text-white   bg-blue-500 active:bg-blue-300 rounded"
      >
        Valider
      </Link>
    </Page>
  );
};

export default paiement;

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  return {
    props: { products },
  };
};
