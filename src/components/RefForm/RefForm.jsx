import { useEffect, useRef } from "react";


const RefForm = () => {
//  ai part ta cursor ta kothay thakbe seta korar jonno toiri  kora hoyece
    const nameRef = useRef(null) ;
    const emailRef = useRef(null) ;
    const passwordRef = useRef(null)

    useEffect(() => {
        nameRef.current.focus() ;
    },[])

    const handleSubmit = e =>{
        e.preventDefault() ;
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="bg-slate-300 flex flex-col justify-center py-8 items-center" >

                <input ref={nameRef} className="border block border-black" type="text" name="name" placeholder="name" />

                <input defaultValue={'sushil@gmail.com'} ref={emailRef} className="border block my-2 border-black" type="email" name="email" placeholder="email" />

                <input ref={passwordRef} className="border my-2 border-black" type="password" name="password" placeholder="password" />

                <button className="py-2 px-5 border rounded-md block bg-lime-600 hover:bg-transparent hover:border-lime-600 hover:text-lime-600">Submit</button>
            </form>
        </div>
    );
};

export default RefForm;