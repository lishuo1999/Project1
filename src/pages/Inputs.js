import React, {useState} from 'react';

function Inputs() {
    const [Inputs, setInputs] = useState({
        name: "",
        email: "",
        tel: ""
    })

    const {name, email, tel} = Inputs; //object를 분해해야 안에 변수 접근 가능

    function onChange(e) {
        const value = e.target.value;
        const id = e.target.id;
        setInputs({
            ...Inputs, //Inputs를 깊은 복사하여 새로운 oject 만듦, ...에 각각의 변수 들어옴
            [id]: value //[id]는 변수대신 할 자리, 예를 들어 name이 입력받으면 id가 name이고 변수이름도 name이기 때문에 변수name에 value값 업데이트
        })
    }

    return (
        <div>
            <div>
                <lable>이름</lable>
                <input type="text" id="name" value={name} onChange={onChange}/>
            </div>
            <div>
                <lable>이메일</lable>
                <input type="email" id="email" value={email} onChange={onChange}/>
            </div>
            <div>
                <lable>전화번호</lable>
                <input type="tel" id="tel" value={tel} onChange={onChange}/>
            </div>
            <p>이름: {name}</p>
            <p>이메일: {email}</p>
            <p>전화번호: {tel}</p>
        </div>
    )
}

export default Inputs;