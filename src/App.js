import React from "react";
import {useState} from 'react';
/*
import {Routes, Route, Link} from "react-router-dom";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Counter from "./pages/Counter"
import Input from "./pages/Input"
import Inputs from "./pages/Inputs"
import List from "./pages/List"
*/
function Header(props) { //객체 -> html 속성 받음
  return <header>
    <h1><a href="/" onClick={function(event) {
      event.preventDefault();
      props.onChangMode();
    }}>{props.title}</a></h1> 
  </header>
}
function Nav(props) {
  const lis = [] //공백 배열
  //props를 통해 미리 정의된 topics 배열 내용(각 태그 속성들) 가져와 lis 배열에 넣기
  for (let i=0; i<props.topics.length; i++) {
    let k = props.topics[i];
    lis.push(<li id={k.id} key={k.id}><a id={k.id} href={'/read/'+k.id} onClick={event=> { //id값이 태그 속성로 주어지면서 문자로 인식
      event.preventDefault();
      props.onChangMode(Number(event.target.id)); //target = 이벤트를 유발시킨 태그를 가르킴
    }}>{k.title}</a></li>) 
  }
  return <nav>
    <ol>
      {lis}
    </ol>
  </nav>
}
function Article(props) {
  return <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>
}
function App() {
  //const _mode = useState('WELCOME'); //초기값
  //0: 상태값을 읽음 1: function 상태값을 변경할 때 사용
  //useState는 배열을 리턴함
  //const mode = _mode[0]; //상태값을 읽음
  //const setMode = _mode[1]; //setMode를 통해 상태값 변경 가능
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  const topics = [
    {id:1, title:'html', body:'html is...'},
    {id:2, title:'css', body:'css is...'},
    {id:3, title:'javascipt', body:'javascipt is...'}
  ]
  let content = null;
  if (mode === 'WELCOME') {
    content = <Article title="Welcome" body="Hello, WEB"></Article>
  } 
  else if (mode === 'READ') {
    let title, body = null;
    for (let i=0; i<topics.length; i++) {
      if(topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>
  }

  return (
    <div>
      <Header title="REACT" onChangMode={function() {
        setMode('WELCOME');
      }}></Header>
      <Nav topics={topics} onChangMode={(id)=>{
        setMode('READ');//변수 mode는 상태변수로 바꿔야 함
        setId(id);
      }}></Nav>
      {content}
    </div>
  );
}

export default App;
 