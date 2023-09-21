import Special from "../Special/Special";


const MySelf = () => {
    return (
        <div>
            <h2 className='text-xl text-center'>My Self</h2>
            <section className="flex border-2 p-3 m-3 rounded-md border-green-500">
                <Special></Special>
            </section>
        </div>
    );
};

export default MySelf;