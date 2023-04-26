import React from "react";
import ImageSrc from "./ImageSrc";

const Footer = () => {
  return (
    <div className="flex flex-col items-center gap-5 bg-slate-700 text-white p-5 ">
      <p className="border-b pb-5 text-center">
        Nos conseillers et conseillères vous répondent du lundi au dimanche de
        7h à 22h au 0892 01 77 67 67.
      </p>
      <div className="w-full flex justify-around border-b pb-5">
        <div className="flex flex-col items-center">
          <ImageSrc
            Url={"https://cdn-icons-png.flaticon.com/512/411/411709.png"}
            className="rounded-full w-10 h-10"
          />

          <p className="text-sm md:text-xl text-center">Livraison gratuite</p>
        </div>
        <div className="flex flex-col items-center">
          {" "}
          <ImageSrc
            Url={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE8tqB4SQ5lKnRJrGYLUknDPnJwIuxlCVhHQ&usqp=CAU"
            }
            className="rounded-full w-10 h-10"
          />
          <p className="text-sm md:text-xl text-center">Service client 7j/7</p>
        </div>
        <div className="flex flex-col items-center">
          <ImageSrc
            Url={"https://cdn-icons-png.flaticon.com/512/1686/1686816.png"}
            className="rounded-full w-10 h-10"
          />

          <p className="text-sm md:text-xl text-center">
            SAV en magasin et à domicile
          </p>
        </div>
        <div className="flex flex-col items-center">
          <ImageSrc
            Url={
              "https://solubrux.fr/wp-content/uploads/2013/01/V4-Icone-paiement-securis%C3%A9.png"
            }
            className="rounded-full w-10 h-10"
          />

          <p className="text-sm md:text-xl text-center">Paiement sécurisé</p>
        </div>
      </div>
      <div>E-commerce Sanity</div>
    </div>
  );
};

export default Footer;
