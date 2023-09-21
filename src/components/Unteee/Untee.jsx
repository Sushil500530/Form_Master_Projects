

import { useContext } from 'react';
import Cousin from './Cousin/Cousin';
import { MoneyContext } from '../Grandpa/Grandpa';

const Untee = () => {
    const [money,setMoney] = useContext(MoneyContext)
    return (
        <div className="border border-blue-500 p-3 rounded-md">
            <h2 className='text-xl text-center'>Unteee</h2>
            <section className="flex gap-3 m-3 p-8 rounded-md">
                <div className="border border-blue-500 rounded-md p-3">
                 <Cousin name={'Anisha'}></Cousin>
                </div>
                <div className="border border-amber-500 rounded-md p-3">
                <Cousin name={'Shefali'}></Cousin>
                </div>
            </section>
            <p className='text-xl my-3 font-semibold'>Money: {money} </p>
            <button onClick={() => setMoney(money + 1000)} className='bg-lime-600 border font-semibold text-xl px-7 py-2 rounded-md hover:bg-transparent hover:text-lime-600 transition-all border-lime-600'>Add 1000 tk</button>
        </div>
    );
};

export default Untee;