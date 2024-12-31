import { SetStateAction, useState } from 'react';

export default function InputComponent() { 
  const [inputText, setText] = useState(''); 

  function handleChange(e: { target: { value: SetStateAction<string>; }; }) { 
    setText(e.target.value); 
  } 

  return ( 
    <> 
      <input value={inputText} onChange={handleChange}
      className='bg-slate-600' /> 
      <p>You typed: {inputText}</p> 
      <button onClick={() => setText('')} className='bg-red-400'> 
        Reset 
      </button> 
    </> 
  ); 
} 