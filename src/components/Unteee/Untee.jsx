import React from 'react';
import Cousin from './Cousin/Cousin';

const Untee = () => {
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
        </div>
    );
};

export default Untee;