


const SimpleForm = () => {

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.phone.value);
        console.log('form submited!');
    }
    return (
        <div className="ml-12 p-5 items-center">
            <form onSubmit={handleSubmit} >
                    <input className="border block border-black" type="text" name="name" placeholder="name" />
                    <input className="border block my-2 border-black" type="email" name="email" placeholder="email" />
                    <input className="border my-2 border-black" type="text" name="phone" placeholder="phone number" />
                    <button className="py-2 px-5 border rounded-md block bg-lime-600 hover:bg-transparent hover:border-lime-600 hover:text-lime-600">Submit</button>
                </form>
            </div>
    );
};

export default SimpleForm;