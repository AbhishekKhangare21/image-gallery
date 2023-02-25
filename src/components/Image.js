import React from "react";

const Image = ({ data, key }) => {
  console.log(data);
  return (
    <a href={data.cover_photo.urls.regular} target="_blank" rel="noreferrer">
      <img
        className="h-72 w-full object-cover rounded-lg shadow-md bg-gray-200 "
        src={data.cover_photo.urls.small}
        alt={data.cover_photo.description}
      />
    </a>
  );
};

export default Image;
