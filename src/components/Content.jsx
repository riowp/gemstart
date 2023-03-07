import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "./logo/Search";
import Burger from "./logo/Burger";
import Card from "./Card";
import Table from "./Table";
import dataDummy from "../assets/dataDummy";
const Content = () => {
  const [coin, setCoin] = useState([]);

  const getCoin = async () => {
    try {
      const { data } = await axios({
        url: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=idr&per_page=10",
        method: "GET",
      });
      setCoin(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCoin();
  }, []);

  return (
    <div className="flex flex-col w-full">
      <div className="sticky top-0 flex justify-between border border-b-black bg-white px-6 py-4">
        <div className="flex">
          <Search />
          <input
            className="ml-2 -mt-1 w-98 focus:outline-none placeholder: text-sm"
            type="text"
            placeholder="Search anything here.."
          />
        </div>
        <div className="cursor-pointer hover:transform hover:scale-110">
          <Burger />
        </div>
      </div>
      <div className="mx-6">
        <div
          className="flex justify-center items-center my-5 w-80 h-12 rounded-md"
          style={{ backgroundColor: "#73B9FF" }}
        >
          <h1 className="text-2xl font-semibold">Hi Radhika, welcome back!</h1>
        </div>
        <div className="my-4">
          <h2 className="font-semibold text-xl">Your client list</h2>
          <h2 className="text-sm">
            You currently servicing {dataDummy.length} clients
          </h2>
        </div>
        {/* card list start */}
        <div className="flex gap-3">
          {dataDummy.map((el) => {
            return (
              <Card
                image={el.image}
                title={el.title}
                description={el.description}
                key={el.id}
              />
            );
          })}
        </div>
        {/* card list end */}

        <div className="flex justify-between my-7">
          <div className="flex flex-col">
            <h1 className="text-xl font-semibold">Recent Approvals</h1>
            <h1 className="text-sm">
              You can find the recent on-going approvals here
            </h1>
          </div>
          <div className="flex justify-center items-center self-center border border-black rounded-3xl px-5 cursor-pointer hover:transform hover:scale-110">
            <span className="text-2xl mb-1 mr-2">+</span>
            <h1 className="font-semibold ">Create new approval</h1>
          </div>
        </div>
        <table className="table-fixed text-left border-2 border-black w-full h-52">
          <thead className="border-2 border-black">
            <tr>
              <th className="w-40 pl-4">Image</th>
              <th className="">Name</th>
              <th className="">Current Price</th>
              <th className="w-64">Market Cap</th>
            </tr>
          </thead>
          <tbody>
            {coin.map((el) => {
              return (
                <Table
                  key={el.id}
                  image={el.image}
                  name={el.name}
                  price={el.current_price}
                  market={el.market_cap}
                />
              );
            })}
          </tbody>
        </table>
        <div className="flex justify-end my-10">
          <h1>© Manning&Co. 2022</h1>
        </div>
      </div>
    </div>
  );
};

export default Content;
