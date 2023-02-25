import React from "react";

const Skeleton = ({ item }) => {
  return [...Array(item)].map((_, id) => (
    <div key={id} className="animate-pulse">
      <div className="bg-gray-200 rounded-lg h-72 "></div>
    </div>
  ));
};

export default Skeleton;
