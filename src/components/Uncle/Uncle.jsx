import React from 'react';
import Cusin from '../Cusin/Cusin';

const Uncle = () => {
    return (
        <div>
            <h2 className='text-xl text-center'>Uncle</h2>
            <section className="flex gap-3 p-10 rounded-md">
                <div className="border border-blue-500 p-3 rounded-md">
                  <Cusin name={'Rafsan'}></Cusin>
                </div>
                <div className="border border-amber-500 p-3 rounded-md">
                <Cusin name={'Sohana'}></Cusin>
                </div>
            </section>
        </div>
    );
};

export default Uncle;