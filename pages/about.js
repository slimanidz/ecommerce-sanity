import React from "react";
import NavBar from "../components/NavBar";

const about = () => {
  return (
    <div>
      <NavBar />
      <div className="p-5">
        <h1 className="pb-5">Add Produts</h1>
        <p
          href="https://sanity-silk-pi.vercel.app/desk/product"
          className="cursor-not-allowed w-32 text-center bg-blue-600 active:bg-blue-400 text-white font-bold p-2 rounded"
        >
          Sanity
        </p>
      </div>
    </div>
  );
};

export default about;
