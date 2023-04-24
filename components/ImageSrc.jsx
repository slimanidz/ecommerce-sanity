import React from "react";
import { urlFor } from "../lib/client";

const ImageSrc = (props) => {
  const { Url, className } = props;
  return (
    <img width={200} height={200} src={Url} alt="image" className={className} />
  );
};

export default ImageSrc;
