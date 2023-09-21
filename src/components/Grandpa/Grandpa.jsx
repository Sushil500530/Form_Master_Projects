import { createContext, useState } from "react";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import Untee from "../Unteee/Untee";

export const AssetContext = createContext("gold");

export const MoneyContext = createContext(1000);


const Grandpa = () => {
    const [money,setMoney] = useState(1000)
    const asset = "diamond";

  return (
    <div className="border-2 text-center border-green-500 p-5 m-5 rounded-md">
      <h2 className="text-2xl">Grandpa</h2>
      <h2 className="text-2xl">Net Money: {(money)}</h2>
        <MoneyContext.Provider value={[money,setMoney]}>
        <AssetContext.Provider value="gold">
          <div className=" flex gap-3 m-3 items-center justify-center flex-wrap lg:flex-nowrap rounded-md">
            <Father asset={asset}></Father>
            <Uncle asset={asset}></Uncle>
            <Untee></Untee>
          </div>
        </AssetContext.Provider>
        </MoneyContext.Provider>
    </div>
  );
};

export default Grandpa;

/**
 * sob gulo prop k use korar jonno jodi sob jayga theke use korte chai tahle akta context API toiri korte hobe...seti korar jonno ja ja korte hobe niche dewa holo ---
 *
 * 1. create a context abd export it
 * 2 . add provider for the context with a value. value could be anything
 * 3. useContext to access value in the Context API
 *
 */
