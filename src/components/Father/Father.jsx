import React from 'react';
import MySelf from '../MySelf/MySelf';
import Brother from './Brother/Brother';
import Sister from '../Sister/Sister';

const Father = () => {
    return (
        <div>
            <h2 className='text-xl text-center'>Father</h2>
            <section className="flex gap-3 p-3 rounded-md">
                <div className="border border-blue-500 rounded-md p-3">
                  <MySelf></MySelf>
                </div>
                <div className="border border-amber-500 rounded-md p-3">
                  <Brother></Brother>
                </div>
                <div className="border border-lime-500 rounded-md p-3">
                 <Sister></Sister>
                </div>
            </section>
        </div>
    );
};

export default Father;