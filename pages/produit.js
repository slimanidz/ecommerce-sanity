import React from "react";
import Produit from "../components/Produit";
import { client } from "../lib/client";

const produit = (products) => {
  return (
    <div>
      <Produit products={products} />
    </div>
  );
};

export default produit;

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  return {
    props: { products },
  };
};
