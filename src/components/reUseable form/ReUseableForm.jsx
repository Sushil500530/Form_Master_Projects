

const ReUseableForm = ({formTitle,SubmitBtnText ='Submit',handleSubmit,children}) => {
  const handleLocalSubmit = e =>{
    e.preventDefault() ;
    const data = {
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value
    }
    handleSubmit(data)
  }
    return (
        <div>
            <h2  className="text-2xl my-5 text-center text-bold text-purple-500">{children}</h2>
            
              <form onSubmit={handleLocalSubmit} className="bg-slate-300 flex flex-col justify-center py-8 items-center" >
                <input className="border block border-black" type="text" name="name" placeholder="name" />

                <input className="border block my-2 border-black" type="email" name="email" placeholder="email" />

                <input className="border my-2 border-black" type="password" name="password" placeholder="password" />

                <button className="py-2 px-5 border rounded-md block bg-lime-600 hover:bg-transparent hover:border-lime-600 hover:text-lime-600">{SubmitBtnText}</button>
            </form>
        </div>
    );
};

export default ReUseableForm;