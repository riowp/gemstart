import React from "react";

export default function Card({ image, title, description }) {
  return (
    <div className="flex flex-col w-60 h-46 border rounded-md">
      <div className="ml-4 my-3">
        <img src={image} alt={title} />
        <h1 className="my-1 font-bold">{title}</h1>
        <p className="pr-4" style={{ fontSize: 11, lineHeight: "1rem" }}>
          {description}
        </p>
      </div>
      <h2 className="absolute ml-52 -mt-2 cursor-pointer text-3xl hover:transform hover:scale-110">
        ...
      </h2>
    </div>
  );
}