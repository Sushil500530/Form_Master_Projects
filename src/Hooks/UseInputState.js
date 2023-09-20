import { useState } from "react"
// state ta k manag korar jonno ata korar hoyece
const useInputState = (defaultValue = null) => {
    const [value,setValue] = useState(defaultValue) ;
    
    // change version er jonno ata create kora 
    // const handleChange = e =>{
    //     setValue(e.target.value) ;
    // }
    const onChange = e =>{
        setValue(e.target.value) ;
    }
    // return [inputValue,handleChange]
    return {
        value,
        onChange
    }
};
export default useInputState ;