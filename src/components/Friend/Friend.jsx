import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";

const Friend = () => {
    const award = useContext(AssetContext) ;
    return (
        <div className = "border-2 border-green-500 p-3 rounded-md">
             <h2 className='text-xl text-center'>Friend</h2>
             <p>has: {award}</p>
        </div>
    );
};

export default Friend;