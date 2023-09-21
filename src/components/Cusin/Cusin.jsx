import Special from "../Special/Special";


const Cusin = ({name,asset}) => {
  return (
    <div>
      <h2 className="text-xl text-center">Cousin</h2>
        <p>{name}</p>
        {/* <p>has {asset}</p> */}
        {
            asset && <Special asset ={asset}></Special>
        }
    </div>
  );
};

export default Cusin;
