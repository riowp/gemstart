import React from "react";
import Dashboard from "./logo/Dashboard";
import Approval from "./logo/Approval";
import Client from "./logo/Client";
import Setting from "./logo/Setting";
import Logout from "./logo/Logout";
const Sidebar = () => {
  return (
    <div
      className="sticky top-0 flex flex-col w-3/12 h-screen"
      style={{ backgroundColor: "#1E67AF" }}
    >
      <div className="flex justify-center self-center items-center rounded-xl mt-3 h-16 w-48 cursor-pointer bg-white">
        <h2 className="text-4xl font-semibold">LOGO</h2>
      </div>
      <div className="flex flex-col ml-6 gap-4">
        <div className="bg-white mt-6 h-16 w-16 rounded-full"></div>
        <h2 className="font-semibold text-white">Radhika Dhawan Puri</h2>
        <h2 className="-mt-4 text-sm text-white">Senior Client Service</h2>
      </div>
      <div className="flex self-center my-4 h-0 border border-gray-300 w-5/6"></div>

      <div className="flex flex-col ml-6">
        <h2 className="text-white text-xs">NAVIGATION</h2>
        <div className="flex gap-2 mt-4 w-44 cursor-pointer">
          <Dashboard />
          <h2 className="-mt-1 text-black font-bold underline">Dashboard</h2>
        </div>
        <div className="flex gap-2 mt-4 w-44 cursor-pointer">
          <Approval />
          <h2 className="-mt-1 text-white font-bold hover:transform hover:scale-110">Approvals</h2>
        </div>
      </div>

      <div className="flex self-center my-4 h-0 border border-gray-300 w-5/6"></div>

      <div className="flex flex-col ml-6">
        <h2 className="text-white text-xs">MY ACCOUNT</h2>
        <div className="flex gap-2 mt-4 w-44 cursor-pointer">
          <Client />
          <h2 className="-mt-1 text-white font-bold  hover:transform hover:scale-110">My Client</h2>
        </div>
        <div className="flex gap-2 mt-4 w-44 cursor-pointer">
          <Setting />
          <h2 className="-mt-1 text-white font-bold  hover:scale-110">Edit Profiles</h2>
        </div>
      </div>
      <div className="flex gap-2 ml-6 mt-10 cursor-pointer ">
        <Logout />
        <h2 className="text-white font-bold text-xl -mt-1  hover:transform hover:scale-110">Logout</h2>
      </div>
    </div>
  );
};

export default Sidebar;
