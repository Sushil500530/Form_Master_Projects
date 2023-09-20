import { useState } from "react";


const StateFulForm = () => {
    const [name,setName] = useState('sushil roy') ;
    const [email,setEmail] = useState(null) ;
    const [password,setPassword] = useState(null) ;
    // validation korar jonno 
    const [error,setError] = useState('') ;

    const handleSubmit =(e) =>{
        e.preventDefault() ;
        if(password.length < 6){
            setError('password must be 6 characters or longer')
        }
        else{
            setError('')
            console.log(name,email,password);
        }


    }
    const handleNameChange = e =>{
        setName(e.target.value)
    }

    const handleFormChange = e =>{
        // console.log(e.target.value);
        setEmail(e.target.value);
    }
    const handlePasswordChange = e =>{
        setPassword(e.target.value)
    }
    // console.log(email);
    // console.log(password);
    return (
        <div className="ml-12">
            <form onSubmit={handleSubmit} >
                <input  value={name} onChange={handleNameChange} className="border block border-black" type="text" name="name" placeholder="name" />

                <input onChange={handleFormChange} className="border block my-2 border-black" type="email" name="email" placeholder="email" />

                <input onChange={handlePasswordChange} className="border my-2 border-black" type="password" name="password" placeholder="password" required />

                <button className="py-2 px-5 border rounded-md block bg-lime-600 hover:bg-transparent hover:border-lime-600 hover:text-lime-600" >Submit</button>
                {
                    error && `${error}'`
                }
            </form>
        </div>
    );
};
/**
 * 1. use individual field state for each field
 * 2. 
 */

export default StateFulForm;