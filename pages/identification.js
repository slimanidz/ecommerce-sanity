import React from "react";
import Page from "../components/Page";
import ProgressReglement from "../components/ProgressReglement";
import Link from "next/link";

const identification = () => {
  return (
    <Page>
      <ProgressReglement widthProgress={35} />
      <div>
        <div>identification</div>
        <Link
          href="/livraison"
          className="w-32 md:w-64 flex justify-center text-xl font-bold text-white   bg-blue-500 active:bg-blue-300 rounded"
        >
          Suivant
        </Link>
      </div>
    </Page>
  );
};

export default identification;
