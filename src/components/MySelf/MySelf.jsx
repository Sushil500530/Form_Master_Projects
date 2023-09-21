import Special from "../Special/Special";


const MySelf = ({asset}) => {
    return (
        <div>
            <h2 className='text-xl text-center'>My Self</h2>
            <section  className="p-3">
                <Special asset={asset}></Special>
            </section>
        </div>
    );
};

export default MySelf;