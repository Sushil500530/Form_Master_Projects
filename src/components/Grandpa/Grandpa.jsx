import React from "react";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import Untee from "../Unteee/Untee";

const Grandpa = () => {
  return (
    <div className="border-2 text-center border-green-500 p-5 m-5 rounded-md">

      <h2 className="text-2xl">Grandpa</h2>
      <div className=" flex gap-3 m-3 items-center justify-center flex-wrap lg:flex-nowrap rounded-md">
        <div className="border border-red-500 p-5 m-5 rounded-md">
          <Father></Father>
        </div>
        <div className="border border-black p-5 m-5 rounded-md">
          <Uncle></Uncle>
        </div>
        <div className="border border-blue-500 p-5 m-5 rounded-md">
          <Untee></Untee>
        </div>
      </div>
    </div>
  );
};

export default Grandpa;
