import React from "react";
import { client } from "../lib/client";
import Reglement from "../components/Reglement";

export default function reglement(products) {
  return (
    <div>
      <Reglement products={products} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  return {
    props: { products },
  };
};
