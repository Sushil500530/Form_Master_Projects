import Friend from "../Friend/Friend";
import Special from "../Special/Special";


const MySelf = ({asset}) => {
    return (
        <div>
            <h2 className='text-xl text-center'>My Self</h2>
            <section  className="p-3 gap-3 flex">
                <Special asset={asset}></Special>
                <Friend></Friend>
            </section>
        </div>
    );
};

export default MySelf;