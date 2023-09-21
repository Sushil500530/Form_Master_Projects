import { useContext } from "react";
import { AssetContext } from "../../Grandpa/Grandpa";

const Cousin = ({name}) => {
    const diamond = useContext(AssetContext) ;
    return (
        <div>
            <h2 className='text-xl text-center'>Cousin</h2>
            <p>{name}</p>
            <p>has: {diamond}</p>
        </div>
    );
};

export default Cousin;