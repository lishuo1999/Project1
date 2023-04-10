import React, {useState} from 'react';

function Input() {
    const [textValue, setTextValue] = useState("");
    //num의 초기값이 0이고 num을 결정해주는 setNumber 함수

   function onChange(e) {
    setTextValue(e.target.value)
   }

    return (
        <div>
            <input type="text" value={textValue} onChange={onChange} />
            <p>{textValue}</p>
        </div>
    )
}

export default Input;