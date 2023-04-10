import React, {useState} from 'react';

function Counter() {
    const [num, setNumber] = useState(0);
    //num의 초기값이 0이고 num을 결정해주는 setNumber 함수

    function increase() {
        setNumber(num + 1);
    }

    function decrease() {
        setNumber(num - 1);
    }

    return (
        <div>
            <button onClick={increase}>+1</button>
            <button onClick={decrease}>-1</button>
            <p>{num}</p>
        </div>
    )
}

export default Counter;