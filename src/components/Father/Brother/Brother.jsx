import { useContext } from 'react';
import { MoneyContext } from '../../Grandpa/Grandpa';

const Brother = () => {
    const [money] = useContext(MoneyContext) ;
    return (
        <div>
            <h2 className='text-xl text-center'>Brother</h2>

            <p className='text-xl text-center font-semibold'>Grandpa: {money}</p>
        </div>
    );
};

export default Brother;