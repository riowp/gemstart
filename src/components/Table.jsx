import React from "react";

const Table = ({image, name, price, market}) => {
  const rupiah = (number)=>{
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR"
    }).format(number);
  }
  return (
    <tr className="border-b border-black">
      <td>
        <img
          className="h-20 w-20"
          src={image}
          alt=""
        />
      </td>
      <td>{name}</td>
      <td>{rupiah(price)}</td>
      <td>{rupiah(market)}</td>
    </tr>
  );
};

export default Table;
