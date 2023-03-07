import Sidebar from "../components/Sidebar";
import Content from "../components/Content";

import React from 'react'

const Home = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Content />
    </div>
    
  )
}

export default Home