
import './App.css'
import Grandpa from './components/Grandpa/Grandpa'
// import HookForm from './components/HookForm/HookForm'
// import ReUseableForm from './components/reUseable form/ReUseableForm'
// import RefForm from './components/RefForm/RefForm'
// import StateFulForm from './components/stateFulform/StateFulForm'
// import SimpleForm from './components/simpleForm/SimpleForm'

function App() {
//   const handleSignUpSubmit = data =>{
//     // e.preventDefault()
//     console.log('sign up data', data);
// }
//   const handleUpdateProfile = data =>{
//     console.log('updata profile data', data);
//   }

  return (
    <>
      
      <h1 className='text-3xl text-center font-bold my-7 text-emerald-600'>Form Master</h1>

      <Grandpa></Grandpa>



      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFulForm></StateFulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReUseableForm
       formTitle={'sign up'}
       handleSubmit={handleSignUpSubmit}>
        <div>
          <h1>Sign Up</h1>
          <p>Please Sign Up Right Now</p>
        </div>
       </ReUseableForm>
      <ReUseableForm 
      formTitle={'Profile Update'}
       handleSubmit={handleUpdateProfile}
        SubmitBtnText='Update'>
        <div>
          <h1>Update</h1>
          <p>Always Keep Your Profile Updated</p>
        </div>
        </ReUseableForm> */}
    </>
  )
}

export default App
