import { useRef } from "react";
import MyInput from "./input";

const FocusInput = () => {

    const inputRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        inputRef.current?.focus();
    }

    return (  
        <div className="flex flex-col gap-2">
        <MyInput ref={inputRef}></MyInput>


        <button className="bg-blue-200 w-20 h-20 rounded-sm text-neutral-800" onClick= {handleClick}>
            Focus Input
        </button>
        </div>

    );
}
 
export default FocusInput;