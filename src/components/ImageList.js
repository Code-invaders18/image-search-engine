import React from "react";
import ImageCard from "./ImageCard";
import "./ImageList.css";

const ImageList = (props) => {
  //console.log(props.images);
  //here we r doing the destructuring of our map function over the images
  // const print = props.images.map(({ description, id, urls }) => {
  //   return <img key={id} alt={description} src={urls.regular} />;
  // });
  const print = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });
  return <div className="image-list">{print}</div>;
};
export default ImageList;
