import { createContext } from "react";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import Untee from "../Unteee/Untee";

const AssetContext = createContext("gold");

const Grandpa = () => {
  const asset = "diamond";
  return (
    <div className="border-2 text-center border-green-500 p-5 m-5 rounded-md">
      <h2 className="text-2xl">Grandpa</h2>
      <AssetContext.Provider value="gold">
        <div className=" flex gap-3 m-3 items-center justify-center flex-wrap lg:flex-nowrap rounded-md">
          <Father asset={asset}></Father>
          <Uncle asset={asset}></Uncle>
          <Untee></Untee>
        </div>
      </AssetContext.Provider>
    </div>
  );
};

export default Grandpa;

/**
 * sob gulo prop k use korar jonno jodi sob jayga theke use korte chai tahle akta context api toiri korte hobe...seti korar jonno ja ja korte hobe niche dewa holo ---
 *
 * 1. create a context abd export it
 * 2 . add provider for the context with a value. 
 * 3.
 *
 */
