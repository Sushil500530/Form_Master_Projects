import useInputState from "../../Hooks/UseInputState";

const HookForm = () => {
    // const [name,handleNameChange] = useInputState('sushil hoocked') 
     const emailState = useInputState('sushil@gmail.com')

    const handleSubmit = e =>{
        console.log('form data:',emailState.value);
        e.preventDefault() ;
    }


    return (
        <div>
            <form onSubmit={handleSubmit} className="bg-slate-300 flex flex-col justify-center py-8 items-center" >
                {/* <input value={name} onChange={handleNameChange} className="border block border-black" type="text" name="name" placeholder="name" /> */}

                <input {...emailState} className="border block my-2 border-black" type="email" name="email" placeholder="email" />

                <input className="border my-2 border-black" type="password" name="password" placeholder="password" />

                <button className="py-2 px-5 border rounded-md block bg-lime-600 hover:bg-transparent hover:border-lime-600 hover:text-lime-600">Submit</button>
            </form>
        </div>
    );
};

export default HookForm;